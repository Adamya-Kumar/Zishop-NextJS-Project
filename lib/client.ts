import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

//connect to sanity
export const client = sanityClient({
  projectId: "ky6gyjwg",
  dataset: "production",
  apiVersion: "2022-06-04",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

//be able to use sanity images
const builder = imageUrlBuilder(client);

export const urlFor = (source:any) => builder.image(source)