import React from "react";
import { View, StyleSheet, FlatList } from "react-native";

import Screen from "./Screen";
import { ListItem, AppIcon, ListItemSeparator } from "../components/primitives";
import defaultStyles from "../config/styles";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: defaultStyles.colors.primary,
    },
    onPress: () => console.log("Listings pressed"),
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: defaultStyles.colors.secondary,
    },
    onPress: () => console.log("Listings pressed"),
  },
];

function AccountScreen(props) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Mayank Chandravanshi"
          subTitle="mayank11195@gmail.com"
          IconComponent={
            <AppIcon
              name="account"
              backgroundColor={defaultStyles.colors.primary}
              size={60}
            />
          }
          showChevrons
          onPress={() => console.log("Account pressed")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <AppIcon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              showChevrons
              onPress={item.onPress}
            />
          )}
          ItemSeparatorComponent={ListItemSeparator}
        />
      </View>
      <View style={styles.container}>
        <ListItem
          title="Settings"
          IconComponent={
            <AppIcon
              name="settings"
              backgroundColor={defaultStyles.colors.medium}
            />
          }
          showChevrons
          onPress={() => console.log("Settings")}
        />
      </View>
      <ListItem
        title="Log Out"
        IconComponent={<AppIcon name="logout" backgroundColor="#ffe66d" />}
        onPress={() => console.log("Logout")}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: defaultStyles.colors.light,
  },
  container: {
    marginVertical: 20,
  },
});

export default AccountScreen;
