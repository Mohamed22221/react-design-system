
import Lists from '../components/lists/Lists'
import BookItem from '../components/lists/viewData/BookItem'
import { books } from '../components/lists/data/DataBooksJson'

const ListItems = () => {
  return (
    <div>
        <Lists items={books} sourceName="books" ItemComponent={BookItem} />

    </div>
  )
}

export default ListItems