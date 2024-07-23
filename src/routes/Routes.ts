import DetailCharacter from "../pages/character/DetailCharacter.tsx";
import {ROUTE} from "../constants/route.constant.ts";
import {Dashboard} from "../pages/dashboard/Dashboard.tsx";
import React from "react";

export const ROUTES: IRoutes[] = [
    {
        component: Dashboard,
        path: ROUTE.HOME(),
    },
    {
        component: DetailCharacter,
        path: ROUTE.CHARACTER.DETAIL(":id"),
    }
]

export interface IRoutes {
    path: string
    component: React.ComponentType
}