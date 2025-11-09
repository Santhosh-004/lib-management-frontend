import { type RouteConfig, index, layout, prefix, route } from "@react-router/dev/routes";

export default [
    
    layout("routes/layout.tsx", [
        index("routes/pages/home-page/home.tsx"),
    ]),
    

] satisfies RouteConfig;
