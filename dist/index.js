import { jsx as _jsx, jsxs as _jsxs } from "hono/jsx/jsx-runtime";
import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { createClient } from "@sanity/client";
import { serveStatic } from "@hono/node-server/serve-static";
export const client = createClient({
    projectId: "shul8b60",
    dataset: "production",
    useCdn: true,
    apiVersion: "2022-03-07",
});
const app = new Hono();
app.use("/public/*", serveStatic({ root: "./" }));
// homepage
app.get("/", async (c) => {
    const projects = await client.fetch('*');
    console.log(projects);
    return c.html(_jsxs("html", { children: [_jsx("head", { children: _jsx("link", { href: "/public/style.css", rel: "stylesheet" }) }), _jsxs("body", { children: [_jsxs("nav", { children: [_jsx("a", { href: "/", children: "Home" }), _jsx("a", { href: "/contact", children: "Contact" })] }), _jsx("h1", { children: "Projects" }), projects.map((p) => {
                        return (_jsx("div", { children: _jsx("h2", { children: p.name }) }));
                    })] })] }));
});
app.get("/contact", async (c) => {
    return c.html(_jsxs("html", { children: [_jsx("head", { children: _jsx("link", { href: "/public/style.css", rel: "stylesheet" }) }), _jsxs("body", { children: [_jsxs("nav", { children: [_jsx("a", { href: "/", children: "Home" }), _jsx("a", { href: "/contact", children: "Contact" })] }), _jsx("h1", { children: "Contact" })] })] }));
});
// serve
serve({
    fetch: app.fetch,
    port: 3000,
}, (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
});
//# sourceMappingURL=index.js.map