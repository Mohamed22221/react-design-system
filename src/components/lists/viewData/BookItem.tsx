
interface Book {
    name: string,
    title: string,
    price: number,
}
interface Props {
    book?: Book
    
}

const BookItem = ({book} : Props) => {
    const {name, title, price} = book || {};
    if (!book) {
      return <div>Loading...</div>;
    }
  return (
    <div>
        <h2>Name :{name}</h2>
        <p>Title : {title}</p>
        <p>Price : {price}</p>

    </div>
  )
}

export default BookItem