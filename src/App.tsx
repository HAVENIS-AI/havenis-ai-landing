import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';

export default function App() {
  const { t, i18n } = useTranslation();

  const images = {
    hero: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop',
    privacy: 'https://images.unsplash.com/photo-1633356122544-f134324ef6cb?w=400&h=300&fit=crop',
    strategy: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
    traction: 'https://images.unsplash.com/photo-1518611505868-48510c2171dd?w=400&h=300&fit=crop',
    metrics: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=400&fit=crop'
  };

  return (
    <>
      <Helmet>
        <html lang={i18n.language} />
        <title>HAVENIS-AI | High-Margin IoT Solution</title>
        <meta name="description" content={t('hero.description')} />
        <meta property="og:title" content={t('hero.title')} />
        <meta property="og:image" content={images.hero} />
        <link rel="alternate" hrefLang="en" href="https://havenis-ai.github.io/havenis-ai-landing/" />
        <link rel="alternate" hrefLang="de" href="https://havenis-ai.github.io/havenis-ai-landing/de" />
        <link rel="alternate" hrefLang="fr" href="https://havenis-ai.github.io/havenis-ai-landing/fr" />
      </Helmet>