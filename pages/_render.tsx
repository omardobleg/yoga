import {
  RenderFn,
  RenderContext,
} from "https://raw.githubusercontent.com/lucacasonato/fresh/main/server.ts";
import { styles } from "../styles/styles.ts";
export function render(ctx: RenderContext, render: RenderFn) {
  ctx.styles.push(...styles);
  render();
}
