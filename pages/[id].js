import { useRouter } from "next/router";

function PostPage() {
  const router = useRouter();
  const { id, subcat } = router.query;

  //abc?subcat=eat
  console.log(router.query);

  if (subcat)
    return (
      <h1>
        {" "}
        The Post: {id} meal of the day: {subcat}
      </h1>
    );
  else return <h1>The Post {id}</h1>;
}

export default PostPage;
