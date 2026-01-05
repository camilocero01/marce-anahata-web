import lighthouse from 'lighthouse';
import * as chromeLauncher from 'chrome-launcher';
import fs from 'fs';
import path from 'path';

const PRODUCTION_URL = 'https://marceanahata.com';

const urls = [
  { name: 'home', url: PRODUCTION_URL },
  { name: 'blog', url: `${PRODUCTION_URL}/blog` },
  { name: 'terapia-sonido', url: `${PRODUCTION_URL}/terapia-sonido` },
  { name: 'clases', url: `${PRODUCTION_URL}/clases` },
  { name: 'bienestar-corporativo', url: `${PRODUCTION_URL}/bienestar-corporativo` },
  { name: 'sobre-mi', url: `${PRODUCTION_URL}/sobre-mi` },
];

const options = {
  logLevel: 'info',
  output: 'html',
  onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
  port: 0,
  formFactor: 'mobile',
  screenEmulation: {
    mobile: true,
    width: 412,
    height: 823,
    deviceScaleFactor: 2.625,
    disabled: false,
  },
  throttling: {
    rttMs: 150,
    throughputKbps: 1638.4,
    requestLatencyMs: 150,
    downloadThroughputKbps: 1638.4,
    uploadThroughputKbps: 675,
    cpuSlowdownMultiplier: 4,
  },
};

async function runLighthouse(url, name) {
  console.log(`\n🔍 Running Lighthouse audit for: ${name} (${url})`);
  
  const chrome = await chromeLauncher.launch({ chromeFlags: ['--headless'] });
  options.port = chrome.port;

  try {
    const runnerResult = await lighthouse(url, options);

    // Create reports directory if it doesn't exist
    const reportsDir = path.join(process.cwd(), 'lighthouse-reports');
    if (!fs.existsSync(reportsDir)) {
      fs.mkdirSync(reportsDir, { recursive: true });
    }

    // Save HTML report
    const timestamp = new Date().toISOString().split('T')[0];
    const reportPath = path.join(reportsDir, `${name}-${timestamp}.html`);
    fs.writeFileSync(reportPath, runnerResult.report);

    // Extract key metrics
    const { lhr } = runnerResult;
    const scores = {
      performance: Math.round(lhr.categories.performance.score * 100),
      accessibility: Math.round(lhr.categories.accessibility.score * 100),
      bestPractices: Math.round(lhr.categories['best-practices'].score * 100),
      seo: Math.round(lhr.categories.seo.score * 100),
    };

    const metrics = {
      fcp: lhr.audits['first-contentful-paint'].displayValue,
      lcp: lhr.audits['largest-contentful-paint'].displayValue,
      cls: lhr.audits['cumulative-layout-shift'].displayValue,
      tti: lhr.audits['interactive'].displayValue,
      tbt: lhr.audits['total-blocking-time'].displayValue,
      speedIndex: lhr.audits['speed-index'].displayValue,
    };

    console.log(`\n✅ Report saved: ${reportPath}`);
    console.log('\n📊 Scores:');
    console.log(`   Performance: ${scores.performance}/100`);
    console.log(`   Accessibility: ${scores.accessibility}/100`);
    console.log(`   Best Practices: ${scores.bestPractices}/100`);
    console.log(`   SEO: ${scores.seo}/100`);
    console.log('\n⚡ Core Web Vitals:');
    console.log(`   FCP: ${metrics.fcp}`);
    console.log(`   LCP: ${metrics.lcp}`);
    console.log(`   CLS: ${metrics.cls}`);
    console.log(`   TTI: ${metrics.tti}`);
    console.log(`   TBT: ${metrics.tbt}`);
    console.log(`   Speed Index: ${metrics.speedIndex}`);

    // Save JSON summary
    const summary = {
      url,
      name,
      timestamp: new Date().toISOString(),
      scores,
      metrics,
    };
    const summaryPath = path.join(reportsDir, `${name}-${timestamp}.json`);
    fs.writeFileSync(summaryPath, JSON.stringify(summary, null, 2));

    return summary;
  } catch (error) {
    console.error(`❌ Error running Lighthouse for ${name}:`, error);
    throw error;
  } finally {
    await chrome.kill();
  }
}

async function main() {
  const runAll = process.argv.includes('--all');
  const urlsToTest = runAll ? urls : [urls[0]]; // Default: only home

  console.log('🚀 Starting Lighthouse Audits...');
  console.log(`📍 Testing ${urlsToTest.length} URL(s)\n`);

  const results = [];

  for (const { name, url } of urlsToTest) {
    try {
      const result = await runLighthouse(url, name);
      results.push(result);
      
      // Wait 5 seconds between audits to avoid rate limiting
      if (urlsToTest.length > 1) {
        console.log('\n⏳ Waiting 5 seconds before next audit...');
        await new Promise(resolve => setTimeout(resolve, 5000));
      }
    } catch (error) {
      console.error(`Failed to audit ${name}`);
    }
  }

  // Generate summary report
  console.log('\n\n📈 Summary Report');
  console.log('='.repeat(60));
  
  results.forEach(result => {
    console.log(`\n${result.name.toUpperCase()}`);
    console.log(`  Performance: ${result.scores.performance}/100`);
    console.log(`  LCP: ${result.metrics.lcp} | CLS: ${result.metrics.cls}`);
  });

  // Calculate average scores
  const avgPerformance = Math.round(
    results.reduce((sum, r) => sum + r.scores.performance, 0) / results.length
  );
  console.log(`\n📊 Average Performance Score: ${avgPerformance}/100`);
  
  console.log('\n✨ All audits complete!');
  console.log(`📁 Reports saved in: lighthouse-reports/`);
}

main().catch(console.error);
