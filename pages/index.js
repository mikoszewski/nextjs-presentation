function HomePage() {
  const url =
    "https://images.unsplash.com/photo-1517516794485-082c4d03bb19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80";

  return (
    <dir>
      <h1> The HomePage</h1>
      <img src={url} alt="great bird"></img>
    </dir>
  );
}

export default HomePage;
