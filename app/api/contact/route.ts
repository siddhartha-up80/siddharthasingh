import Contact from "@/models/contact";
import { connectToDB } from "@/utils/database";

export const POST = async (request: any) => {
  const { name, email, message } = await request.json();

  try {
    await connectToDB();
    const contact = new Contact({ name, email, message });

    await contact.save();
    return new Response(JSON.stringify(contact), { status: 201 });
  } catch (error) {
    return new Response("Failed to add contact", { status: 500 });
  }
};
