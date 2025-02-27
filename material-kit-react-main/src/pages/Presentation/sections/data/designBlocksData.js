/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

const imagesPrefix =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections";

export default [
  {
    title: "Eventos",
    description: "Producción y programación para espacios escenicos",
    items: [
      {
        image: `${imagesPrefix}/alerts.jpg`,
        name: "Alerts",
        count: 4,
        route: "/sections/attention-catchers/alerts",
      },
      {
        image: `${imagesPrefix}/toasts.jpg`,
        name: "Notifications",
        count: 3,
        pro: true,
      },
      {
        image: `${imagesPrefix}/popovers.jpg`,
        name: "Tooltips & Popovers",
        count: 2,
        route: "/sections/attention-catchers/tooltips-popovers",
      },
      {
        image: `${imagesPrefix}/modals.jpg`,
        name: "Modals",
        count: 5,
        route: "/sections/attention-catchers/modals",
      },
    ],
  },
  {
    title: "Artistas",
    description: "Promotor de conciertos y espectáculos de artistas",
    items: [
      {
        image: "/edwinRivera.png",
        name: "Edwin Rivera",
      },
      {
        image: "/alejandroSanz.png",
        name: "Alejandro Sanz",
      },
      {
        image: "/mannyManuel.png",
        name: "Manny Manuel",
      },
      {
        image: "/tonnyTunTun.png",
        name: "Tonny Tun Tun",
      },
      {
        image: "/tonySantos.png",
        name: "Tony Santos",
      },
      {
        image: `${imagesPrefix}/breadcrumbs.jpg`,
        name: "Breadcrumbs",
      },
      {
        image: `${imagesPrefix}/badges.jpg`,
        name: "Badges",
      },
    ],
  },
];
