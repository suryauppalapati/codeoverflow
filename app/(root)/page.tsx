import { auth } from "@/auth";

const Home = async () => {
  const session = await auth();
  return (
    <div className={`
      flex min-h-screen items-center justify-center bg-zinc-50 font-sans
      dark:bg-black
    `}>
      <h1 className="text-4xl text-amber-600">
        Welcome to Next.js
        {session?.user && <span className="font-space-grotesk text-amber-800">, {session.user.name}</span>}
      </h1>
    </div>
  );
};

export default Home;
