import type { AgentContext, AgentRequest, AgentResponse } from "@agentuity/sdk";
import OpenAI from "openai";

const client = new OpenAI();

export const welcome = () => {
	return {
		welcome:
			"Welcome to the OpenAI TypeScript Agent! I can help you build AI-powered applications using OpenAI models.",
		prompts: [
			{
				data: "How do I implement streaming responses with OpenAI models?",
				contentType: "text/plain",
			},
			{
				data: "What are the best practices for prompt engineering with OpenAI?",
				contentType: "text/plain",
			},
		],
	};
};

export default async function Agent(
	req: AgentRequest,
	resp: AgentResponse,
	ctx: AgentContext,
) {
	try {
		return resp.text("Hello world from Production branch");
	} catch (error) {
		return resp.text("Sorry, there was an error processing your request.");
	}
}
