import Head from "next/head";
import MovieSearch from "./components/MovieSearch";

export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      <Head>
        <title>Movie Database</title>
        <meta name="description" content="This is a simple movie database " />
      </Head>
      <main className="container mx-auto py-10 px-4 flex-col flex items-center justify-center">
        <h1 className="text-4xl font-bold mb-8 text-white">Movie</h1>
        <MovieSearch />
      </main>
    </div>
  );
}
