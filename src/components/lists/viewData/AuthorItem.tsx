interface Author {
  name: string;
  country: string;
  age: number;
  books: string[];
}
interface Props {
  authors: Author;
}

const AuthorItem = ({ authors }: Props) => {
  const { name, country, age, books } = authors;
  return (
    <div>
      <h2>Name :{name}</h2>
      <p>country : {country}</p>
      <p>{age}</p>
      <ul>
        {books.map((book: string, index: number) => (
          <li key={index}>{book}</li>
        ))}
      </ul>
    </div>
  );
};

export default AuthorItem;
