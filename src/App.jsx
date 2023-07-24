import axios from "axios";
import { useRef, useState } from "react";
import { youtube_parser } from "./utils";


function App() {
  const inputUrlRef = useRef();
  const [urlResult, setUrlResult] = useState(null);


  const [hueRotation, setHueRotation] = useState(0);
  const handleMagicWandClick = () => {
    setHueRotation(hueRotation + 20);
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    const youtubeID = youtube_parser(inputUrlRef.current.value);

    const options = {
      method: "GET",
      url: "https://youtube-mp36.p.rapidapi.com/dl",
      headers: {
        "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY,
        "X-RapidAPI-Host": "youtube-mp36.p.rapidapi.com",
      },
      params: {
        id: youtubeID,
      },
    };

    axios(options)
      .then((res) => setUrlResult(res.data.link))
      .catch((err) => console.log(err));

    inputUrlRef.current.value = "";

    if (!youtubeID) {
      console.log("Invalid YouTube video link");
    }
  };  
  
  return (
    <div className="app" style={{ filter: `hue-rotate(${hueRotation}deg)` }}>
      <div className="main__container">
        <div className="main__wrapper1">
          <div className="madeBy__text">Designed by <a target="_blank" href="https://www.instagram.com/dachi.s_/"><span className="colored__brackets">dachiSakhuria</span></a></div>
          <div className="conv__text__bracket"><span className="conv__text">convack</span><span className="colored__brackets">[]</span></div>
          <div className="desc__text">
            convert video files to .mp3 format within seconds for free
          </div> 

              <button className="magic-wand-button" onClick={handleMagicWandClick}>
                <i className="gg-color-picker"></i>
              </button>

          <div className="inputAndBtn__Container">
            <form onSubmit={handleSubmit} className="input__and__btn">
              <input ref={inputUrlRef}
                placeholder="www.youtube.com/watch?v=dQw4w9WgXcQ"
                type="text"
                name="url"
                id="url"
              />
              <button type="submit">
                <i className="gg-chevron-right"></i>
              </button>
            </form>
          </div>
      
          {urlResult ? <a href={urlResult} className="download_btn"><button className="dwnld__button" type="button">
                <span className="button__text">File has been found, download now</span>
                <span className="button__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35" id="bdd05811-e15d-428c-bb53-8661459f9307" data-name="Layer 2" className="svg"><path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path><path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path><path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path></svg></span>
              </button></a> : ''}
              
              
            
              
              <span className="app__version">
                v0.2.6
              </span>
        </div>
        
        <div className="main_wrapper2">
            <div className="card">
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="card-inner"></div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default App




