import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import routes from "./routes";
import AdminAdder from "../screens/AdminAdder";
import AdminEdit from "../screens/AdminEdit";
import AdminUpdate from "../screens/AdminUpdate";

const Stack = createStackNavigator();

const AdminNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={routes.ADMIN_LISTING_ADD}
      component={AdminAdder}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name={routes.ADMIN_LISTING_EDIT}
      component={AdminEdit}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name={routes.ADMIN_LISTING_UPDATE}
      component={AdminUpdate}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default AdminNavigator;
