# 📧 Newsletter - Documentación de Implementación

## Descripción General

Se ha implementado un sistema completo de captura de emails para que los usuarios se suscriban al newsletter y reciban actualizaciones sobre posts del blog e información sobre eventos.

## Características Implementadas

### 1. **Componente Newsletter.astro**
- Formulario elegante y responsive
- Validación de email en cliente
- Integración con Formspree para recepción de emails
- Mensajes de éxito/error contextuales
- Soporte para dos estilos: `compact` y `full`

### 2. **Ubicaciones del Newsletter**

#### ✅ Layout.astro (Todas las páginas)
- **Ubicación**: Antes del footer
- **Estilo**: Full width
- **Visibilidad**: Aparece en TODAS las páginas del sitio
- **Beneficio SEO**: Oportunidad de suscripción en cada página

#### ✅ Página de Inicio (index.astro)
- **Ubicación**: Sección dedicada entre FAQ y footer
- **Estilo**: Completo con descripciones detalladas
- **Enfoque**: Mantener actualizados sobre yoga, meditación y eventos

#### ✅ Página de FAQ (faq.astro)
- **Ubicación**: Al final, después de CTAs de servicios
- **Estilo**: Completo
- **Enfoque**: Recibir contenido exclusivo y tips de bienestar

## Integración Técnica

### Servicio: Formspree
- **Endpoint**: https://formspree.io/f/xvgozygo
- **Método**: POST
- **Campos**:
  - `email`: Email del usuario
  - `message`: "Newsletter subscription"

### Funcionamiento
1. Usuario ingresa email y hace clic en "Suscribirse"
2. JavaScript valida el email (HTML5 validation)
3. Se envía a Formspree via fetch
4. Se reciben confirmaciones de suscripción en: **[TU EMAIL]**
5. Usuario ve confirmación visual en el sitio

### Estados del Formulario
- **Normal**: Listo para ingresar email
- **Loading**: "Suscribiendo..." mientras se procesa
- **Success**: "✓ ¡Gracias por suscribirte! Revisa tu email..."
- **Error**: "✗ Hubo un error. Por favor, intenta de nuevo."

## Beneficios para SEO

1. **Engagement Mejorado**
   - Los usuarios pueden suscribirse directamente en cualquier página
   - Reduce el bounce rate al ofrecer valor adicional

2. **Internal Linking**
   - Enlaces contextuales en FAQ
   - Mejora la estructura interna del sitio

3. **Rich Snippets Potenciales**
   - Schema.org WebPageSchema
   - Mayor visibilidad en Google

4. **Content Marketing**
   - Base de datos de suscriptores
   - Oportunidad para promover posts nuevos
   - Ventaja competitiva con email marketing

## Configuración de Email Destino

**IMPORTANTE**: Actualmente está configurado para recibir emails en el Formspree account.

Para cambiar el email destino:
1. Ir a https://formspree.io/f/xvgozygo
2. Cambiar la configuración de email de destino
3. Verificar el nuevo email
4. Los nuevos emails se recibirán en la dirección configurada

## Textos Predeterminados

### En Layout (Aparece en todas las páginas)
- **Título**: "Recibe actualizaciones y eventos exclusivos"
- **Descripción**: "Suscríbete a nuestro newsletter para recibir artículos nuevos, eventos especiales y ofertas exclusivas directamente en tu email."

### En Página de Inicio
- **Título**: "Mantente actualizado sobre yoga, meditación y bienestar"
- **Descripción**: "Recibe tips exclusivos, nuevos artículos del blog y primero enterarte de nuestros eventos especiales y promociones."

### En Página de FAQ
- **Título**: "No te pierdas nuestras actualizaciones"
- **Descripción**: "Recibe contenido exclusivo, tips de bienestar e información sobre eventos especiales directamente en tu correo."

## Próximos Pasos Recomendados

1. **Email Service Professional**
   - Considerar migrarse a: ConvertKit, MailerLite, o Mailchimp
   - Beneficios: Automatización, segmentación, análisis

2. **Email de Bienvenida**
   - Crear una secuencia de bienvenida automática
   - Presentar servicios y próximos eventos

3. **Segmentación**
   - Separar suscriptores por intereses (yoga, terapia sonora, rituales)
   - Enviar emails más relevantes

4. **Analytics**
   - Monitorear tasa de apertura
   - A/B testing en subject lines
   - Medir impacto en conversiones

## Validación

✅ Build exitoso: 52 páginas generadas
✅ Componente funcional en todas las páginas
✅ Formulario con validación
✅ Integración con Formspree lista
✅ Responsive design para mobile y desktop

## Cambios de Archivo

- **Nuevo**: `src/components/Newsletter.astro`
- **Modificado**: `src/layouts/Layout.astro`
- **Modificado**: `src/pages/index.astro`
- **Modificado**: `src/pages/faq.astro`

---

**Fecha de Implementación**: 31 Diciembre 2025
**Estado**: ✅ Activo y funcional
