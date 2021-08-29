import { h, json, jsx, serve } from "https://deno.land/x/sift/mod.ts";
import {App} from "./components/app.tsx"

const NotFound = () => (
  <div>
    <h1>Page not found</h1>
  </div>
);

serve({
  "/": () => jsx(<App />),
  "/api": () => json({ message: "Hello world" }),
  404: () => jsx(<NotFound />, { status: 404 }),
});