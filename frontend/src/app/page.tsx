async function getData() {
  const res = await fetch('http://' + process.env.BACKEND_URL + ':' + process.env.BACKEND_PORT + '/api/v1/hello', {
    // Add cache: 'no-store' if you want fresh data on every request
    // or use { next: { revalidate: 60 } } to revalidate every 60 seconds
    cache: 'no-store'
  });
  
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  
  return res.json();
}

export default async function Home() {
  const data = await getData();
  
  return (
    <main>
      <h1>Welcome to My Fullstack App</h1>
      {data.message && <p>{data.message}</p>}
    </main>
  );
}
