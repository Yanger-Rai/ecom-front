import Product from "@/models/product";
import { connectToDB } from "@/utils/mongoose";

export const POST = async (req) => {
  const { ids } = await req.json();
  try {
    await connectToDB();
    const res = await Product.find({ _id: ids });
    return new Response(JSON.stringify(res), { status: 200 });
  } catch (error) {
    return new Response("Failed getting products details", { status: 500 });
  }
};
