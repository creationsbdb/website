const Banner = ({ allBanners }) => {
  return (
    <div className="slider">
      <div className="links">
        <a href="#slide1">
          <button className="selected"></button>
        </a>
        <a href="#slide2">
          <button></button>
        </a>
      </div>
      <div className="slide" id="slide1">
        <h3>LUCA A ADOPTÉ SA COUVERTURE BRODÉE</h3>
        <img src="/images/banner-baby1.jpg" alt="luca"></img>
      </div>
      <div className="slide" id="slide2">
        <h3>JONATHAN EST CONTENT</h3>
        <img src="/images/banner-baby2.jpg" alt="luca"></img>
      </div>
      <style jsx>
        {`
          img {
            object-fit: cover;
            width: 70vw;
            height: 70vh;
          }
          h3 {
            font-size: 36px;
            color: #000;
            position: relative;
            top: 20%;
            text-align: center;
          }
          .links {
            position: absolute;
            bottom: -5%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
          .links > a > button {
            cursor: pointer;
            outline: 0;
            border-style: none;
            border-radius: 50%;
            background-color: #ffffff;
            width: 6px;
            height: 6px;
            margin-left: 10px;
            margin-right: 10px;
            margin-top: 0px;
            margin-bottom: 0px;
            padding: 0;
          }
          .links > a > button.selected {
            border: 2px solid #ffffff;
            background-color: transparent;
            width: 8px;
            height: 8px;
          }
          .slider {
            display: flex;
            flex-direction: row;
            overflow: hidden;
            margin: 0 auto;
            -webkit-overflow-scrolling: touch;
            scroll-snap-type: x mandatory;
            scroll-behavior: smooth;
            // animation: 3s slidy infinite;
          }
          .slide {
            scroll-snap-align: start;
            flex-shrink: 0;
          }
          @keyframes slidy {
            0% {
              margin-left: 0%;
            }
            100% {
              margin-left: -100%;
            }
          }
          @media (max-width: 800px) {
            .slider {
              display: none;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Banner;
