const CardItem = ({ picture, title, price }) => (
  <div className="container">
    <img src={'/images/' + picture}></img>
    <h4>{title}</h4>
    <span>
      <span className="divider"></span>
    </span>
    <p>{price} €</p>
    <style jsx>{`
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
    `}</style>
  </div>
);
export default CardItem;
