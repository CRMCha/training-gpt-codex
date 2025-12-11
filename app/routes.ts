import { type RouteConfig, index, route, layout } from "@react-router/dev/routes";

export default [
  layout("routes/layout.tsx", [
    index("routes/home.tsx"),
    route("todo", "routes/todo.tsx"),
  ]),
] satisfies RouteConfig;
