function Home() {
    return (
      <div style={{
        padding: '40px',
        backgroundColor: '#f5f5f5',
        borderRadius: '12px',
        textAlign: 'center',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        margin: '20px auto',
        maxWidth: '800px'
      }}>
        <h1 style={{ color: '#2c3e50', marginBottom: '10px' }}>Welcome to Our Company</h1>
        <p style={{ fontSize: '18px', color: '#555' }}>
          We are dedicated to delivering excellence in all our services.
          Our mission is to help you grow with innovative and reliable solutions.
        </p>
      </div>
    );
  }
  
  export default Home;