import React, { ComponentProps } from 'react';
import { BlocksScreen } from './screens/blocks';
import { TransactionsScreen } from './screens/transactions';
import { BlockDetailsScreen } from './screens/block-details';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

interface TabBarIconProps {
  name: ComponentProps<typeof Ionicons>['name'];
  color: string;
}

function TabBarIcon({ name, color }: TabBarIconProps) {
  return (
    <Ionicons
      size={30}
      style={{ marginBottom: -3 }}
      name={name}
      color={color}
    />
  );
}

const TransactionsStack = createStackNavigator();

function TransactionsStackScreen() {
  return (
    <TransactionsStack.Navigator>
      <TransactionsStack.Screen
        name="Transactions"
        component={TransactionsScreen}
      />
    </TransactionsStack.Navigator>
  );
}

const BlocksStack = createStackNavigator();

function BlocksStackScreen() {
  return (
    <BlocksStack.Navigator>
      <BlocksStack.Screen name="Blocks" component={BlocksScreen} />
      <BlocksStack.Screen
        name="BlockDetails"
        component={BlockDetailsScreen}
        options={{ title: 'Details' }}
      />
    </BlocksStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export function MainNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Blocks"
        component={BlocksStackScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="cube-outline" color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Transactions"
        component={TransactionsStackScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="swap-horizontal-outline" color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
