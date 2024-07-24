import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest,NextResponse } from "next/server";
// Access your API key as an environment variable
export const runtime='edge';
type Data = {
    recipe_name: string;
    ingredients: string[];
    instructions: string;
  };
export async function GET(req:NextRequest){
    const genAI = new GoogleGenerativeAI(process.env.NEXT_APP_GOOGLE_API_KEY|| '');

    let model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash",
        generationConfig: { responseMimeType: "application/json" }
      });
      
      let prompt = `
        Brief about web development and list 5 resources of each type youtube channel,blogs,websites,courses using this JSON schema:
      {
        "brief":{"type":"String"},
        "roadmap":{"type":"array", "items": { "type": "string" }},
        "type": "array",
        "items": {
          "properties": {
            "platform": { "type": "string" },
            "resources": { "type": "array", "items": { "type": "string" } },
          },
          "required": ["brief","roadmap","platform", "resources"],
        }
    }
      }`;
      
      try {
        const result = await model.generateContent(prompt);
        const recipes: Data[] = JSON.parse(result.response.text());
        return NextResponse.json(recipes);
    }catch(err:any){
            console.log("Some error in generating json",err);
            return NextResponse.json({error:err.message},{status:500});
    }
}