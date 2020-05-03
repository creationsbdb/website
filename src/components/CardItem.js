const CardItem = ({ picture, title, price, url }) => (
  <div className="container">
    <a href={'/catalog/' + url}>
      <img src={'/images/' + picture} alt={title}></img>

      <h4>{title}</h4>
    </a>
    <span>
      <span className="divider"></span>
    </span>
    <p>{price} €</p>
    <style jsx>{`
      a {
        all: unset;
      }
      a:hover {
        cursor: pointer;
      }
      img {
        object-fit: cover;
        width: 22vw;
        height: 22vh;
      }
      span,
      p,
      h4 {
        font-size: 12px;
        display: flex;
        justify-content: center;
        width: 100%;
      }
      .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
      }
      .divider {
        height: 1px;
        width: 20px;
        background-color: #000000;
      }
      @media (max-width: 768px) {
        img {
          width: 100%;
        }
      }
    `}</style>
  </div>
);
export default CardItem;
