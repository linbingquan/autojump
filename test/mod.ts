import { assertEquals } from "https://deno.land/std@0.141.0/testing/asserts.ts";
import { get_jump_url } from "../src/mod.ts";

Deno.test("test url", () => {
  const r = get_jump_url(
    "url",
    "https://www.oschina.net/action/GoToLink?url=https://bing.com",
  );
  assertEquals("https://bing.com", r);
});

Deno.test("test target", () => {
  const r = get_jump_url(
    "target",
    "https://link.zhihu.com/?target=https://bing.com",
  );
  assertEquals("https://bing.com", r);
});
