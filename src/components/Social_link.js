const Social = ({ link, type }) => {
  return (
    <a href={link} target="_blank" rel="noopnener noreferrer">
      {type}
    </a>
  );
};

export default Social;
