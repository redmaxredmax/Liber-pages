import React from "react"
import { mainRouteData, userRouteData } from "./router/router"
import { Route, Routes } from "react-router-dom"
import { nanoid } from "nanoid"
import { MainLayout } from "./layout"
import { UserLayout } from "./layout/user-layout" 
import { UserInfo } from "./layout/user-info/user-info"
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {mainRouteData.map((item) =>
          <Route key={item.id} path={item.path} index={item.path ? false : true} element={item.component} />
        )}
        <Route path="/user" element={<UserLayout/>}>
          {userRouteData.map((item) =>
            <Route key={item.id} path={item.path} index={item.path ? false : true} element={item.component} />
          )}
        </Route>
      </Route>
    </Routes>
  )
}

export default App
