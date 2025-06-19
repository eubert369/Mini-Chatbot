import { ai } from "~/components/GenAi";

export default defineEventHandler(async (event) => {
  const method = event.method;
  const body = await readBody(event);
  if (method == "POST") {
    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: `${body.messageContent}`,
      });

      return {
        timestamp: `${new Date().toISOString()}`,
        response: response.text,
      };
    } catch (error) {
      console.error(error);
      event.node.res.statusCode = 500;
      return { message: "Server Error" };
    }
  } else {
    event.node.res.statusCode = 405;
    return { message: "HTTP Method not allowed" };
  }
});
