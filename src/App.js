import logo from "./images/jmk-logo.svg";

import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="header">
        <img alt="Logo" src={logo} className="logo" />
        <div className="title">Jeremy M King</div>
        <div className="contact">
          <a href="tel:+16025388446" className="phone-number">
            (602) 538-8446
          </a>
          <a href="mailto:thejeremymking@gmail.com" className="email">
            <div>thejeremymking</div>
            <div>@gmail.com</div>
          </a>
        </div>
      </div>
      <div className="quote">
        <div>"Business is the most competitive sport."</div>
        <div className="quoted">-Mark Cuban</div>
      </div>
      <div className="iframe-container">
        <iframe
          src="https://www.youtube.com/embed/HFOGxrZKBro?si=lcjQaRLj2YR4HnNE"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
      <div className="description">
        We're looking for people who want financial freedom. Who do you know?
      </div>
      <a
        href="https://mysite.mynuskin.com/content/nuskin/en_US/mysite/mysite-home.mysite.jeremymking.html?storeId=US9100641#home"
        className="shop-button"
        target="_blank"
        rel="noreferrer"
      >
        shop now
      </a>
    </div>
  );
}

export default App;
