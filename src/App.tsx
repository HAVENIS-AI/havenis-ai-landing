export default function App() {
  return (
    <div style={{ minHeight: '100vh', background: '#0f172a', color: '#e2e8f0', padding: '40px 20px' }}>
      <header style={{ marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '10px' }}>
          HAVENIS<span style={{ color: '#00d9ff' }}>-AI</span>
        </h1>
      </header>

      <main>
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '20px' }}>High-Margin, Low-Volume</h2>
          <p style={{ fontSize: '2rem', color: '#00d9ff', marginBottom: '20px' }}>€150k ARR in Year 1</p>
          <p style={{ fontSize: '1.1rem', maxWidth: '600px' }}>
            B2B2C für HNWIs: IP-geschütztes Sensing (Patent Pending) via Partner & Events – Privacy-First. 80% Interest from 15 Interviews.
          </p>
        </section>

        <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '40px' }}>
          <div style={{ border: '1px solid #334155', borderRadius: '8px', padding: '20px', background: '#1e293b' }}>
            <p style={{ fontSize: '2rem', color: '#00d9ff', marginBottom: '10px' }}>€150k</p>
            <p>ARR Target (Year 1)</p>
          </div>
          <div style={{ border: '1px solid #334155', borderRadius: '8px', padding: '20px', background: '#1e293b' }}>
            <p style={{ fontSize: '2rem', color: '#00d9ff', marginBottom: '10px' }}>80%</p>
            <p>Market Interest</p>
          </div>
          <div style={{ border: '1px solid #334155', borderRadius: '8px', padding: '20px', background: '#1e293b' }}>
            <p style={{ fontSize: '2rem', color: '#00d9ff', marginBottom: '10px' }}>8.5</p>
            <p>Pilot NPS Score</p>
          </div>
        </section>

        <section style={{ background: '#1e293b', padding: '30px', borderRadius: '8px', marginBottom: '40px' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>✓ Deployment Successful</h3>
          <p>HAVENIS-AI landing page is now live on Vercel.</p>
        </section>
      </main>

      <footer style={{ borderTop: '1px solid #334155', paddingTop: '20px', textAlign: 'center', color: '#94a3b8' }}>
        <p>© 2025 HAVENIS-AI GmbH. All rights reserved.</p>
      </footer>
    </div>
  )
}
