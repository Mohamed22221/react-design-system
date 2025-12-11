import UserItem from "../components/lists/viewData/UserItem";
// import UserContainer from "../components/lists/container/UserContainer";
// import ResourceContainer from "../components/lists/container/ResourceContainer";
// import BookItem from "../components/lists/viewData/BookItem";
import RenderContainer from "../components/lists/container/RenderContainer";
import type { User } from "../components/lists/types/User";


const ListItems = () => {
  return (
    <div>
      {/* <ResourceContainer resourceUrl={"current-user"} resourceName={"user"}>
        <UserItem />
      </ResourceContainer>
      <ResourceContainer resourceUrl={"books/1"} resourceName={"book"}>
        <BookItem />
      </ResourceContainer>
      <UserContainer userId={"1"}>
        <UserItem />
      </UserContainer> */}
      <RenderContainer<User>
        resourceUrl={"current-user"}
        render={(user) => <UserItem user={user} />}
      />
    </div>
  );
};

export default ListItems;
