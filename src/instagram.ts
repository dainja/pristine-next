// @ts-ignore
import Instagram from "instagram-web-api";

export interface Post {
  id: string;
  image: string;
  blur: string;
  text: string;
}

export async function getInstagramFeed(): Promise<Post[]> {
  try {
    const client = new Instagram({
      username: process.env.INSTAGRAM_USERNAME,
      password: process.env.INSTAGRAM_PASSWORD,
    });
    await client.login();
    const user = await client.getUserByUsername({
      username: "pristine.adnan",
    });
    console.log("user", user);
    const posts: Post[] = user.edge_owner_to_timeline_media.map(
      (edge: any) => ({
        id: "", // TODO: Get from edge.node
        image: edge.node.display_url,
        blur: edge.node.media_preview,
        text: edge.node.edge_media_to_caption.edges[0].node.text,
      })
    );
    return posts;
  } catch (error) {
    console.log("Instagram fetch error", error);
    return [];
  }
}
