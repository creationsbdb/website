import CardItem from './CardItem';

const CardList = ({ allCards }) => (
  <div className="container">
    {allCards.map((card, index) => (
      <CardItem
        key={index}
        picture={card.frontmatter?.images[0] ?? 'logo.png'}
        title={card.frontmatter?.title}
        price={card.frontmatter?.price}
      ></CardItem>
    ))}
    <style jsx>{`
      .container {
        display: flex;
        justify-content: space-between;
        width: 100%;
        flex-direction: row;
        flex-wrap: wrap;
      }
    `}</style>
  </div>
);

export default CardList;