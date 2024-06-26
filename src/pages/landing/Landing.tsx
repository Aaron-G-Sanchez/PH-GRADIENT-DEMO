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
            <span className='spacer'></span>
            <h1 className='title'>PROJECT<br/>HERMES</h1>
            <div className='description-container'>
              <p className='description'>Find your duo with Project Hermes. Whether you're looking for someone to help complete a quest line or run some ranked, Project Hermes has you covered.</p>
            </div>
          </div>
        </div>
        <div className='info-container'>
          <div className='display-container'>
            <img src="./src/public/CONNECTION_ICON_V1.png" alt="Icon illustrating connected users." className='snippet-icon'/>
          </div>
          <div className='dialog-container'>
            <h2>Go beyond just games.</h2>
            <p>Get matched with a liked minded individual to help rank up, beat the boss, or make a new friend.</p>
          </div>
        </div>
        <div className='info-container'>
           <div className='dialog-container'>
            <h2>Communicate with ease.</h2>
            <p>Once matched, communicate via our low-latency text chat.</p>
          </div>
          <div className='display-container'>
            <img src="./src/public/MESSENGER_ICON_V1.png" alt="Messenger icon." className='snippet-icon'/>
          </div>
        </div>
        <div className='info-container'>
          <div className='display-container'>
            <img src="./src/public/REMATCH_ICON_V1.png" alt="Icon illustrating rematch functionality." className='snippet-icon'/>
          </div>
           <div className='dialog-container'>
            <h2>Not the vibes?</h2>
            <p>No worries! Rematch with ease or leave the party to find a new partner.</p>
          </div>
        </div>
        <footer className='footer-container'>
          <ul className='links-list'>
            <li>link</li>
            <li>link</li>
            <li>link</li>
            <li>link</li>
          </ul>
        </footer>

      </main>
    </>
  )
}