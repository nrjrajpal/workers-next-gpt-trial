import type { NextRequest } from "next/server";

export async function GET(request: NextRequest): Promise<Response> {
  // Parse URL search parameters
  const { searchParams } = new URL(request.url);
  // Get the "name" parameter (default to "World" if not provided)
  const name = searchParams.get("name") || "World";
  // Return the greeting as JSON
  return new Response(
    JSON.stringify({ message: `Hello, ${name}` }),
    { headers: { "Content-Type": "application/json" } }
  );
}
