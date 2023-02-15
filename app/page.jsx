export async function generateMetadata(props) {
  console.log(props);
  // For /products/123, params.id is "123"
  // For /products/123?foo=bar, searchParams.get("foo") is "bar"
  // The return value is the metadata object
  return { title: "Home page", description: "Long text goes here." };
}

export default function Home() {
  return (
    <>
      <h1>I am the homepage!</h1>
    </>
  );
}
