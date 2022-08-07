function WeatherPage() {
  const url =
    "https://images.unsplash.com/photo-1560813487-803cbe32d18b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1122&q=80";

  return (
    <dir>
      <h1> The Weather</h1>
      <img src={url}></img>
    </dir>
  );
}

export default WeatherPage;
