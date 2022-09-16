interface IUserResponse {
  userSearch: string;
}
export const UserResponse = (props: IUserResponse) => {
  return (
    <>
      <div>
        <h1>No search results</h1>
        <h2>Could not find a movie with the title "{props.userSearch}"</h2>
      </div>
    </>
  );
};
