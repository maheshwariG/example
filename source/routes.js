import RegistrationForm from "./containers/RegistrationForm.jsx";
import UserSearch from "./containers/UserSearch.jsx";
import Navigation from "./containers/Navigation.jsx";
import Reports from "./containers/Reports.jsx";
export const routes = [
{
  component: Navigation,
  routes:[
      {
        path: "/",
        exact: true,
        component: RegistrationForm
      },
      {
        path: "/search",
        exact: true,
        component: UserSearch
      },
      {
        path: "/reports",
        exact: true,
        component: Reports
      }
    ]
  }
];
