import CardItem from './CardItem';

const CardList = ({ allCards }) => (
  <div className="container">
    {Array.isArray(allCards) ? (
      allCards.map((card, index) => (
        <CardItem
          key={index}
          picture={card.frontmatter?.images[0] ?? 'logo.png'}
          title={card.frontmatter?.title ?? 'Pas de titre'}
          price={card.frontmatter?.price}
          url={card.slug}
        ></CardItem>
      ))
    ) : (
      <></>
    )}
    <style jsx>{`
      .container {
        display: flex;
        justify-content: space-between;
        width: 100%;
        flex-direction: row;
        flex-wrap: wrap;
      }
      @media (max-width: 768px) {
        .container {
          flex-direction: column;
        }
      }
    `}</style>
  </div>
);

export default CardList;
