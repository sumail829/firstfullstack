import Post from "./components/page";
import Link from "next/link";
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
      <Link href={'/add-post'}>Add post</Link>
      {
      posts.map((post)=>{
        return(
          <Post
          key={post.id}
          title={post.title}
          content={post.content}
          authorName={post.authorName}
          />

        )
      })
    }
    </div>
  );
}
