import { Home } from "../pages/home";
import { Detail } from "../pages/detail/detail";
import { Account } from "../pages/user/account";
import { Saved } from "../pages/user/saved";
import { Books } from "../pages/user/books";
import { Settings } from "../pages/user/settings";
import { Subscribe } from "../pages/user/subscribe";
import { nanoid } from "nanoid";
export const mainRouteData=[
    {
        component:<Home/>,
        id:nanoid(),
    },
    {
        component:<Detail/>,
        path:"/added/:addedId/:slug",
        id:nanoid(),
    },
    // {
    //     component:<h1>Page Not Found</h1>,
    //     path:"*",
    //     id:nanoid(),
    // },
];

export const userRouteData=[
    {
        component:<Subscribe/>,
        id:nanoid(),
    },
    {
        component:<Books/>,
        path:"books",
        id:nanoid(),
    },
    {
        component:<Settings/>,
        path:"settings",
        id:nanoid(),
    },
    {
        component:<Saved/>,
        path:"saved",
        id:nanoid(),
    },
    {
        component:<Account/>,
        path:"account",
        id:nanoid(),
    },
]
