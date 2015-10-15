import React from "react";
import { Route, IndexRoute } from "react-router";

import Layout from "./layout";
import InstitutionsView from "../institutions/institutions_view";

export default {
  path: "/institutions",
  component: Layout,
  indexRoute: { component: InstitutionsView },
  childRoutes: []
};

// export default (
//   <Route path="/institutions" component={Layout}>
//     <IndexRoute component={InstitutionsView} />
//   </Route>
// );
