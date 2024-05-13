import './Landing.scss'

export const Landing = () => {
  return (
    <>
      <main className='landing-container'>
        <div className='hero-container'>
          <nav className='nav-bar'>
            <img className='logo' src="https://i.imgur.com/pbsxqJi.png" alt="Globe icon with branding." />
           <button className='btn'>Login</button>
          </nav>
          <div className='title-container'>
            <h1 className='title'>PROJECT<br/>HERMES</h1>
          </div>
        </div>
        <div className='info-container'>
          <div>
            <p>Info box #1</p>
          </div>
        </div>
        <div className='info-container'>
          <div>
            <p>Info box #2</p>
          </div>
        </div>

      </main>
    </>
  )
}