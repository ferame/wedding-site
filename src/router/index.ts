import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/story",
      name: "story",
      component: () => import("../views/StoryView.vue"),
    },
    {
      path: "/agenda",
      name: "agenda",
      component: () => import("../views/AgendaView.vue"),
    },
    {
      path: "/travel",
      name: "travel",
      component: () => import("../views/TravelView.vue"),
    },
    {
      path: "/things-to-do",
      name: "things-to-do",
      component: () => import("../views/ThingsToDoView.vue"),
    },
    {
      path: "/q-and-a",
      name: "q-and-a",
      component: () => import("../views/QAView.vue"),
    },
    {
      path: "/people",
      name: "people",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/PeopleView.vue"),
    },
    {
      path: "/rsvp",
      name: "rsvp",
      component: () => import("../views/RsvpView.vue"),
    }
  ],
});

export default router;