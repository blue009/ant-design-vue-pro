import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";
// import RenderRouteView from "../components/RenderRouterView.vue";

Vue.use(Router);

export default new Router({
  mode : "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/user",
      // component: RenderRouteView,
      // component: { render: h => h("router-view") },
      component: () =>
        import(/* webpackChunkName: "layout" */ "../layouts/UserLayout"),
        children: [
        {
          path: "/user",
          name: "/user/login",
          redirect: "/user/login" //指向默认页面
        },
        {
          path: "/user/login",
          name: "login",
          component: () => 
            import(/* webpackChunkName: "user" */ "../views/User/Login"),
        },
        {
          path: "/user/register",
          name: "register",
          component: () => 
            import(/* webpackChunkName: "user" */ "../views/User/Register"),
        }
      ]
    },
    {
      path: "/",
      component: () => 
        import(/* webpackChunkName: "layout" */ "./layouts/BasicLayout"),
        children: [
          // dashboard
          {
            path: "/",
            redirect: "/dashboard/analysis"         
          },
          {
            path: "/dashboard",
            name: "dashboard",
            component: { render: h => h("router-view") },
            children: [
              {
                path: "/dashboard/analysis",
                name: "analysis",
                component: () => 
                import(/* webpackChunkName: "user" */ "../views/Dashboard/Analysis"),
              }
            ]
          }
        ]
    },
    //form
    {
      path: "/form",
      name: "form",
      component: { render: h => h("router-view") },
      children: [
        {
          path: "/",
          redirect: ""
        },
        {
          path: "",
        }
      ]
    },
    
    //default
    {
      path: "/",
      name: "home",
      component: Home
    },
     {
      path: "/about",
      name: "About",
      component: () =>
        import(/* webpackChunkName: "about" */ "../views/About.vue")
    },
  ]
})
