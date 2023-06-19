import Product from "@/models/product";
import { connectToDB } from "@/utils/mongoose";

export const GET = async () => {
  try {
    console.log("server firing...");
    await connectToDB();
    const res = await Product.find().sort({ _id: -1 });
    return new Response(JSON.stringify(res), { status: 200 });
  } catch (error) {
    return new Response("Failed getting new products", { status: 500 });
  }
};
