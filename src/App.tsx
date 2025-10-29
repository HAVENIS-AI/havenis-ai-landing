export default function App() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', color: '#e2e8f0' }}>
      {/* Header */}
      <header style={{ background: '#0f172a', borderBottom: '1px solid #334155', padding: '20px 0', position: 'sticky', top: 0, zIndex: 50 }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
            HAVENIS<span style={{ color: '#00d9ff' }}>-AI</span>
          </h1>
          <nav>
            <a href="#vision" style={{ color: '#cbd5e1', marginLeft: '20px', textDecoration: 'none' }}>Vision</a>
            <a href="#market" style={{ color: '#cbd5e1', marginLeft: '20px', textDecoration: 'none' }}>Market</a>
            <a href="#team" style={{ color: '#cbd5e1', marginLeft: '20px', textDecoration: 'none' }}>Team</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section style={{ padding: '80px 20px', textAlign: 'center', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ marginBottom: '20px', display: 'inline-block', background: 'rgba(0, 217, 255, 0.1)', border: '1px solid rgba(0, 217, 255, 0.5)', padding: '10px 20px', borderRadius: '20px' }}>
          <p style={{ color: '#00d9ff', fontSize: '0.9rem', fontWeight: '500' }}>Go-to-Market Strategy v2.5</p>
        </div>
        <h2 style={{ fontSize: '3.5rem', fontWeight: 'bold', marginBottom: '20px' }}>High-Margin, Low-Volume</h2>
        <p style={{ fontSize: '2.5rem', color: '#00d9ff', marginBottom: '20px', fontWeight: 'bold' }}>€150k ARR in Year 1</p>
        <p style={{ fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto 40px', color: '#cbd5e1' }}>
          B2B2C für HNWIs: IP-geschütztes Sensing (Patent Pending) via Partner & Events – Privacy-First. 80% Interest from 15 Interviews.
        </p>
        <button style={{ background: '#00d9ff', color: '#0f172a', padding: '15px 40px', fontSize: '1rem', fontWeight: 'bold', border: 'none', borderRadius: '8px', cursor: 'pointer', transition: 'all 0.3s' }}>
          Request Full Deck (NDA)
        </button>
      </section>

      {/* Key Metrics */}
      <section style={{ padding: '60px 20px', background: 'rgba(30, 41, 59, 0.5)', marginTop: '40px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h3 style={{ fontSize: '1.8rem', textAlign: 'center', marginBottom: '40px' }}>Key Metrics</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
            <div style={{ background: '#1e293b', border: '1px solid #334155', borderRadius: '8px', padding: '30px', textAlign: 'center' }}>
              <p style={{ fontSize: '3rem', color: '#00d9ff', fontWeight: 'bold', marginBottom: '10px' }}>€150k</p>
              <p style={{ color: '#cbd5e1' }}>ARR Target (Year 1)</p>
            </div>
            <div style={{ background: '#1e293b', border: '1px solid #334155', borderRadius: '8px', padding: '30px', textAlign: 'center' }}>
              <p style={{ fontSize: '3rem', color: '#00d9ff', fontWeight: 'bold', marginBottom: '10px' }}>80%</p>
              <p style={{ color: '#cbd5e1' }}>Market Interest</p>
            </div>
            <div style={{ background: '#1e293b', border: '1px solid #334155', borderRadius: '8px', padding: '30px', textAlign: 'center' }}>
              <p style={{ fontSize: '3rem', color: '#00d9ff', fontWeight: 'bold', marginBottom: '10px' }}>8.5</p>
              <p style={{ color: '#cbd5e1' }}>Pilot NPS Score</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section id="market" style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <h3 style={{ fontSize: '1.8rem', textAlign: 'center', marginBottom: '40px' }}>Why HAVENIS-AI</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
          <div style={{ background: '#1e293b', border: '1px solid #334155', borderRadius: '8px', padding: '30px' }}>
            <h4 style={{ fontSize: '1.3rem', color: '#00d9ff', marginBottom: '15px' }}>🔒 Privacy-First RF-Sensing</h4>
            <p style={{ color: '#cbd5e1', lineHeight: '1.6' }}>Non-invasive, IP-protected sensing technology. Patent pending. Zero video surveillance.</p>
          </div>
          <div style={{ background: '#1e293b', border: '1px solid #334155', borderRadius: '8px', padding: '30px' }}>
            <h4 style={{ fontSize: '1.3rem', color: '#00d9ff', marginBottom: '15px' }}>🤝 B2B2C Strategy</h4>
            <p style={{ color: '#cbd5e1', lineHeight: '1.6' }}>Direct HNWI sales + Partner integration (Crestron LOI signed). Diversified revenue.</p>
          </div>
          <div style={{ background: '#1e293b', border: '1px solid #334155', borderRadius: '8px', padding: '30px' }}>
            <h4 style={{ fontSize: '1.3rem', color: '#00d9ff', marginBottom: '15px' }}>✓ Proven Traction</h4>
            <p style={{ color: '#cbd5e1', lineHeight: '1.6' }}>10 pilot installations, 8.5 NPS, 80% HNWI interest. Scaling to 30 by Q4.</p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" style={{ padding: '60px 20px', background: 'rgba(30, 41, 59, 0.5)', marginTop: '60px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h3 style={{ fontSize: '1.8rem', textAlign: 'center', marginBottom: '40px' }}>Leadership Team</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            <div style={{ background: '#0f172a', border: '1px solid #334155', borderRadius: '8px', padding: '30px', textAlign: 'center' }}>
              <p style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '5px' }}>Danilo Kuss</p>
              <p style={{ color: '#00d9ff', marginBottom: '15px' }}>CEO & Founder</p>
              <p style={{ color: '#cbd5e1', fontSize: '0.9rem', lineHeight: '1.6' }}>PhD Elektrotechnik (TU Berlin), 8 Jahre RF-Sensing bei Siemens Labs</p>
            </div>
            <div style={{ background: '#0f172a', border: '1px solid #334155', borderRadius: '8px', padding: '30px', textAlign: 'center' }}>
              <p style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '5px' }}>Elias Kern</p>
              <p style={{ color: '#00d9ff', marginBottom: '15px' }}>CTO</p>
              <p style={{ color: '#cbd5e1', fontSize: '0.9rem', lineHeight: '1.6' }}>MSc Computer Science (ETH Zurich), 6 Jahre bei Bosch</p>
            </div>
            <div style={{ background: '#0f172a', border: '1px solid #334155', borderRadius: '8px', padding: '30px', textAlign: 'center' }}>
              <p style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '5px' }}>Sarah Le Roux</p>
              <p style={{ color: '#00d9ff', marginBottom: '15px' }}>COO</p>
              <p style={{ color: '#cbd5e1', fontSize: '0.9rem', lineHeight: '1.6' }}>MBA (INSEAD), 10 Jahre Sales bei Honeywell</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 20px', textAlign: 'center', marginTop: '60px' }}>
        <h3 style={{ fontSize: '2rem', marginBottom: '20px' }}>Ready to Learn More?</h3>
        <p style={{ fontSize: '1.1rem', color: '#cbd5e1', marginBottom: '30px' }}>Request the full deck under NDA to explore partnership opportunities.</p>
        <button style={{ background: '#00d9ff', color: '#0f172a', padding: '15px 40px', fontSize: '1rem', fontWeight: 'bold', border: 'none', borderRadius: '8px', cursor: 'pointer', transition: 'all 0.3s' }}>
          Request Full Deck (NDA)
        </button>
      </section>

      {/* Footer */}
      <footer style={{ background: '#0f172a', borderTop: '1px solid #334155', padding: '40px 20px', marginTop: '80px', textAlign: 'center', color: '#94a3b8' }}>
        <p>© 2025 HAVENIS-AI GmbH. All rights reserved.</p>
        <p style={{ marginTop: '10px', fontSize: '0.9rem' }}>Confidential - NDA Required</p>
      </footer>
    </div>
  )
}
