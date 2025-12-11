import type { User } from "../types/User";

interface Props {
  user?: User | null;
}

const UserItem = ({ user }: Props) => {
  const { name, country, age, books } = user || {};
  if (!user) return <div>Loading...</div>;
  return (
    <div>
      <h2>Name :{name}</h2>
      <p>country : {country}</p>
      <p>{age}</p>
      <ul>
        {books?.map((book: string, index: number) => (
          <li key={index}>{book}</li>
        ))}
      </ul>
      <></>
    </div>
  );
};

export default UserItem;
