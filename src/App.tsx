import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';

export default function App() {
  const { t, i18n } = useTranslation();

  return (
    <>
      <Helmet>
        <html lang={i18n.language} />
        <title>HAVENIS-AI | High-Margin IoT Solution</title>
        <meta name="description" content={t('hero.description')} />
        <link rel="alternate" hrefLang="en" href="https://havenis-ai.github.io/" />
        <link rel="alternate" hrefLang="de" href="https://havenis-ai.github.io/de" />
        <link rel="alternate" hrefLang="fr" href="https://havenis-ai.github.io/fr" />
      </Helmet>

      <div style={{ minHeight: '100vh', background: '#0f172a', color: '#e2e8f0', fontFamily: 'system-ui' }}>
        {/* Header */}
        <header style={{ background: '#0f172a', borderBottom: '1px solid #334155', padding: '20px 0', position: 'sticky', top: 0, zIndex: 50 }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
              HAVENIS<span style={{ color: '#00d9ff' }}>-AI</span>
            </h1>
            <div style={{ display: 'flex', gap: '10px' }}>
              {['en', 'de', 'fr'].map((lang) => (
                <button
                  key={lang}
                  onClick={() => i18n.changeLanguage(lang)}
                  style={{
                    padding: '8px 16px',
                    background: i18n.language === lang ? '#00d9ff' : 'transparent',
                    color: i18n.language === lang ? '#0f172a' : '#cbd5e1',
                    border: '1px solid #334155',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontWeight: i18n.language === lang ? 'bold' : 'normal',
                  }}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section style={{ padding: '80px 20px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '3.5rem', fontWeight: 'bold', marginBottom: '20px' }}>
            {t('hero.title')}
          </h2>
          <p style={{ fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto 40px', color: '#cbd5e1' }}>
            {t('hero.description')}
          </p>
          <button style={{ background: '#00d9ff', color: '#0f172a', padding: '15px 40px', fontSize: '1rem', fontWeight: 'bold', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>
            {t('hero.cta')}
          </button>
        </section>

        {/* Metrics Section */}
        <section style={{ padding: '60px 20px', background: 'rgba(30, 41, 59, 0.5)' }}>
          <h3 style={{ fontSize: '1.8rem', textAlign: 'center', marginBottom: '40px' }}>
            {t('metrics.title')}
          </h3>
          <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
            <div style={{ background: '#1e293b', border: '1px solid #334155', borderRadius: '8px', padding: '30px', textAlign: 'center' }}>
              <p style={{ fontSize: '3rem', color: '#00d9ff', fontWeight: 'bold', marginBottom: '10px' }}>≤15k</p>
              <p style={{ color: '#cbd5e1' }}>{t('metrics.arr')}</p>
            </div>
            <div style={{ background: '#1e293b', border: '1px solid #334155', borderRadius: '8px', padding: '30px', textAlign: 'center' }}>
              <p style={{ fontSize: '3rem', color: '#00d9ff', fontWeight: 'bold', marginBottom: '10px' }}>80%</p>
              <p style={{ color: '#cbd5e1' }}>{t('metrics.interest')}</p>
            </div>
            <div style={{ background: '#1e293b', border: '1px solid #334155', borderRadius: '8px', padding: '30px', textAlign: 'center' }}>
              <p style={{ fontSize: '3rem', color: '#00d9ff', fontWeight: 'bold', marginBottom: '10px' }}>8.5</p>
              <p style={{ color: '#cbd5e1' }}>{t('metrics.nps')}</p>
            </div>
          </div>
        </section>

        {/* Why Section */}
        <section style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto' }}>
          <h3 style={{ fontSize: '1.8rem', textAlign: 'center', marginBottom: '40px' }}>
            {t('why.title')}
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            <div style={{ background: '#1e293b', border: '1px solid #334155', borderRadius: '8px', padding: '30px' }}>
              <h4 style={{ fontSize: '1.3rem', color: '#00d9ff', marginBottom: '15px' }}>
                🔐 {t('why.privacy')}
              </h4>
              <p style={{ color: '#cbd5e1', lineHeight: '1.6' }}>{t('why.privacyDesc')}</p>
            </div>
            <div style={{ background: '#1e293b', border: '1px solid #334155', borderRadius: '8px', padding: '30px' }}>
              <h4 style={{ fontSize: '1.3rem', color: '#00d9ff', marginBottom: '15px' }}>
                🎯 {t('why.strategy')}
              </h4>
              <p style={{ color: '#cbd5e1', lineHeight: '1.6' }}>{t('why.strategyDesc')}</p>
            </div>
            <div style={{ background: '#1e293b', border: '1px solid #334155', borderRadius: '8px', padding: '30px' }}>
              <h4 style={{ fontSize: '1.3rem', color: '#00d9ff', marginBottom: '15px' }}>
                📈 {t('why.traction')}
              </h4>
              <p style={{ color: '#cbd5e1', lineHeight: '1.6' }}>{t('why.tractionDesc')}</p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" style={{ padding: '60px 20px', background: 'rgba(30, 41, 59, 0.5)' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h3 style={{ fontSize: '1.8rem', textAlign: 'center', marginBottom: '40px' }}>
              {t('team.title')}
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
              <div style={{ background: '#0f172a', border: '1px solid #334155', borderRadius: '8px', padding: '40px', textAlign: 'center' }}>
                <h4 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '10px', color: '#e2e8f0' }}>
                  {t('team.danilo')}
                </h4>
                <p style={{ color: '#00d9ff', marginBottom: '20px', fontSize: '1.1rem', fontWeight: 'bold' }}>
                  CEO & Founder
                </p>
                <p style={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: '1.7' }}>
                  {t('team.daniloDes')}
                </p>
              </div>
              <div style={{ background: '#0f172a', border: '1px solid #334155', borderRadius: '8px', padding: '40px', textAlign: 'center' }}>
                <h4 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '10px', color: '#e2e8f0' }}>
                  {t('team.elias')}
                </h4>
                <p style={{ color: '#00d9ff', marginBottom: '20px', fontSize: '1.1rem', fontWeight: 'bold' }}>
                  CTO
                </p>
                <p style={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: '1.7' }}>
                  {t('team.eliasDes')}
                </p>
              </div>
              <div style={{ background: '#0f172a', border: '1px solid #334155', borderRadius: '8px', padding: '40px', textAlign: 'center' }}>
                <h4 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '10px', color: '#e2e8f0' }}>
                  {t('team.sarah')}
                </h4>
                <p style={{ color: '#00d9ff', marginBottom: '20px', fontSize: '1.1rem', fontWeight: 'bold' }}>
                  COO
                </p>
                <p style={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: '1.7' }}>
                  {t('team.sarahDes')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section style={{ padding: '80px 20px', textAlign: 'center' }}>
          <h3 style={{ fontSize: '2rem', marginBottom: '20px' }}>
            {t('cta.title')}
          </h3>
          <p style={{ fontSize: '1.1rem', color: '#cbd5e1', marginBottom: '30px' }}>
            {t('cta.desc')}
          </p>
          <button style={{ background: '#00d9ff', color: '#0f172a', padding: '15px 40px', fontSize: '1rem', fontWeight: 'bold', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>
            {t('cta.button')}
          </button>
        </section>

        {/* Footer */}
        <footer style={{ background: '#0f172a', borderTop: '1px solid #334155', padding: '40px 20px', textAlign: 'center', color: '#94a3b8' }}>
          <p>{t('footer.copyright')}</p>
          <p style={{ marginTop: '10px', fontSize: '0.9rem' }}>
            {t('footer.confidential')}
          </p>
        </footer>
      </div>
    </>
  );
}
