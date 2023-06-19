const { default: Product } = require("@/models/product");
const { connectToDB } = require("@/utils/mongoose");

export const GET = async () => {
  const featuredProductId = "648db4cf3756b7232559a8d4";

  await connectToDB();
  const response = await Product.findById(featuredProductId);

  return new Response(JSON.stringify(response));
};
