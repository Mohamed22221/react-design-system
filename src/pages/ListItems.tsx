
import Lists from '../components/lists/Lists'
import BookItem from '../components/lists/viewData/BookItem'
import { books } from '../components/lists/data/DataBooksJson'
import AuthorItem from '../components/lists/viewData/AuthorItem'
import { Authors } from '../components/lists/data/DataAuthorsJson'

const ListItems = () => {
  return (
    <div>
        <Lists items={books} sourceName="books" ItemComponent={BookItem} />
        <Lists items={Authors} sourceName="authors" ItemComponent={AuthorItem} />

    </div>
  )
}

export default ListItems