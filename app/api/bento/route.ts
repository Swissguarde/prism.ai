import { sanityClient } from "@/lib/sanity";

export const GET = async () => {
  try {
    const query = `*[_type == "bento"]`;
    const data = await sanityClient.fetch(query);
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error: any) {
    console.log(error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
};
