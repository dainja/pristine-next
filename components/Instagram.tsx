import Image from "next/image";
import { Post } from "../src/sanity";

export const Instagram: React.FC<{ posts: Post[] }> = ({ posts }) => {
  if (posts.length === 0) {
    return null;
  }
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 bg-custom1 pt-12 px-4">
      {posts.map((post) => (
        <div key={post.id} className="aspect-[1/1]">
          <div className="h-full w-full relative rounded overflow-hidden">
            <Image
              objectFit="cover"
              layout="fill"
              src={post.image}
              alt=""
              sizes="33vw"
            />
          </div>
        </div>
      ))}
    </div>
  );
};
