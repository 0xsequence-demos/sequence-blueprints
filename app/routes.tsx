import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("./routes/layout.tsx", [
    index("./routes/index.tsx"),
    route("/:topic", "./routes/topic.tsx"),
    route("/:topic/:book", "./routes/book.tsx"),
  ]),
] satisfies RouteConfig;
