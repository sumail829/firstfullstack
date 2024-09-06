import Post from "./components/page";
import prisma from "@/lib/prisma";

async function getPosts(){
   const posts = await prisma.post.findMany({
    where:{published:true},
    include:{
      author:{
        select:{name:true}
      }
    }
   })
   return posts;
}

export default async function Home() {
   const posts=await getPosts();
   console.log({posts})
  return (
    <div>
      <h1 className="flex justify-center items-center text-6xl ">Feeds</h1>
      {
      posts.map((post)=>{
        return(
          <Post
          key={post.id}
          title={post.title}
          content={post.content}
          authorName={post.author.name}
          />

        )
      })
    }
    </div>
  );
}
