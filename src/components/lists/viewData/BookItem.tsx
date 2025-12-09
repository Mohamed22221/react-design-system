
interface Book {
    name: string,
    title: string,
    price: number,
}
interface Props {
    books : Book
    
}

const BookItem = ({books} : Props) => {
    const {name, title, price} = books
  return (
    <div>
        <h2>Name :{name}</h2>
        <p>Title : {title}</p>
        <p>Price : {price}</p>

    </div>
  )
}

export default BookItem