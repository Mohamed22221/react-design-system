
import { Modal } from "../components/modal/Modal";
import Lists from "../components/lists/Lists";
import { Authors } from "../components/lists/data/DataAuthorsJson";
import AuthorItem from "../components/lists/viewData/AuthorItem";

const ShowModalPage = () => {
  return (
    <div>
      <Modal>
        {" "}
        <Lists
          items={Authors}
          sourceName="authors"
          ItemComponent={AuthorItem}
        />
      </Modal>
    </div>
  );
};

export default ShowModalPage;
