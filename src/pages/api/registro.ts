export const prerender = false;

import { Resend } from 'resend';

export async function POST({ request }: { request: Request }) {
  try {
    const formData = await request.formData();

    const fields = {
      evento:             (formData.get('evento')             as string) || '',
      session:            (formData.get('session')            as string) || '',
      full_name:          (formData.get('full_name')          as string) || '',
      email:              (formData.get('email')              as string) || '',
      country:            (formData.get('country')            as string) || '',
      phone:              (formData.get('phone')              as string) || '',
      source:             (formData.get('source')             as string) || '',
      first_time:         (formData.get('first_time')         as string) || '',
      medical_conditions: (formData.get('medical_conditions') as string) || '',
      share_info:         (formData.get('share_info')         as string) || '',
    };

    const fecha = new Date().toLocaleString('es-CO', { timeZone: 'America/Bogota' });

    const tasks: Promise<unknown>[] = [];

    // ── 1. Email via Resend ────────────────────────────────────────────
    const resendKey = import.meta.env.RESEND_API_KEY;
    const toEmail   = import.meta.env.NOTIFICATION_EMAIL;

    if (resendKey && toEmail) {
      const resend = new Resend(resendKey);
      tasks.push(
        resend.emails.send({
          from: 'inscripciones@marceanahata.com',
          to:   toEmail,
          subject: `🎵 Nueva inscripción — ${fields.session}`,
          html: `
            <div style="font-family:sans-serif;max-width:560px;margin:auto;padding:24px;border:1px solid #e5e7eb;border-radius:12px">
              <h2 style="color:#243c5a;margin-bottom:4px">Nueva inscripción</h2>
              <p style="color:#6ed8d9;font-weight:600;margin-top:0">${fields.session}</p>
              <table style="width:100%;border-collapse:collapse;margin-top:16px">
                <tr><td style="padding:8px;background:#f9fafb;font-weight:600;width:40%">Nombre</td><td style="padding:8px">${fields.full_name}</td></tr>
                <tr><td style="padding:8px;background:#f9fafb;font-weight:600">Email</td><td style="padding:8px"><a href="mailto:${fields.email}">${fields.email}</a></td></tr>
                <tr><td style="padding:8px;background:#f9fafb;font-weight:600">País</td><td style="padding:8px">${fields.country}</td></tr>
                <tr><td style="padding:8px;background:#f9fafb;font-weight:600">Teléfono</td><td style="padding:8px"><a href="https://wa.me/${fields.phone.replace(/\D/g,'')}">${fields.phone}</a></td></tr>
                <tr><td style="padding:8px;background:#f9fafb;font-weight:600">¿Cómo se enteró?</td><td style="padding:8px">${fields.source}</td></tr>
                <tr><td style="padding:8px;background:#f9fafb;font-weight:600">¿Primera vez?</td><td style="padding:8px">${fields.first_time === 'yes' ? 'Sí, primera vez' : 'Ya ha participado antes'}</td></tr>
                ${fields.medical_conditions ? `<tr><td style="padding:8px;background:#fef3c7;font-weight:600">Salud</td><td style="padding:8px">${fields.medical_conditions}</td></tr>` : ''}
                ${fields.share_info ? `<tr><td style="padding:8px;background:#f9fafb;font-weight:600">Comparte</td><td style="padding:8px">${fields.share_info}</td></tr>` : ''}
                <tr><td style="padding:8px;background:#f9fafb;font-weight:600">Fecha</td><td style="padding:8px">${fecha}</td></tr>
              </table>
            </div>
          `,
        })
      );
    }

    // ── 2. Google Sheets via Apps Script webhook ───────────────────────
    const sheetsUrl = import.meta.env.GOOGLE_SHEETS_WEBHOOK;

    if (sheetsUrl) {
      tasks.push(
        fetch(sheetsUrl, {
          method:  'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ fecha, ...fields }),
        })
      );
    }

    await Promise.allSettled(tasks);

    return new Response(JSON.stringify({ ok: true }), {
      status:  200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error en /api/registro:', error);
    return new Response(JSON.stringify({ ok: false }), {
      status:  500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
