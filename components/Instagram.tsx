import Image from "next/image";
import { Post } from "../src/instagram";

export const Instagram: React.FC<{ posts: Post[] }> = ({ posts }) => {
  if (posts.length === 0) {
    return null;
  }
  return (
    <div className="relative bg-gray-50 py-16 sm:py-24 lg:py-32">
      <div className="relative">
        <div className="mt-12 mx-auto max-w-md px-4 grid gap-8 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-3 lg:max-w-7xl">
          {posts.map((post) => (
            <div
              key={post.id}
              className="flex flex-col rounded-lg shadow-lg overflow-hidden"
            >
              <div className="flex-shrink-0">
                <div className="h-48 w-full">
                  <Image
                    objectFit="cover"
                    placeholder="blur"
                    blurDataURL={post.blur}
                    src={post.image}
                    alt=""
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
