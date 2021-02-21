# Bitwala Coding Challenge

This is the project for Bitwala's coding challenge - An iOS/Android app listing the recent Bitcoin blocks and transactions.

## Summary

The app has been built using React Native with TypeScript and fetches the necessary data from [Bitquery](https://bitquery.io) using the [Apollo GraphQL](https://www.apollographql.com) client.

Due to time limitations, Expo was used to quickly get started with the application, which provided a smooth way of running different simulators as well as providing a project base with TypeScript included.

| Blocks                                   | Block Details                                        | Transactions                                       |
| ---------------------------------------- | ---------------------------------------------------- | ----------------------------------------------------
| ![Blocks](assets/blocks.png?raw=true "Blocks") | ![Block Details](assets/blockdetails.png?raw=true "Block Detail") | ![transactions](assets/transactions.png?raw=true "transactions") |

## Usage

### Starting the Development Server

Start the development server using Expo, making it possible to run the app on a physical device using a provided QR code.

```
npm run start
```

### Run in an iOS simulator

Run the app through the iOS simulator (requires the simulator to have been installed on the computer)

```
npm run ios
```

### Run in an Android simulator

Run the app through the Android simulator (requires the simulator to have been installed on the computer)

```
npm run android
```

## Future Improvements

Due to the time limit, some functionalities have been discarded. Below follows some ideas for future improvements that can be done.

### UI

The provided UI is very basic with barely any graphical implementations. The focus was to provide the information in a clear way, but a lot of improvements can be done to make the app more "alive", such as various graphics, a color theme and by using more icons. It would be a good idea to include an animated spinner for the loading message to ensure the user that the app is not in a frozen state.

#### Error message

A custom loading message has been created but for errors, only a simple text component is used. This could be improved by including some more graphics as well as the ability to reload the query fetch.

### Testing

No tests are included in the project due to the time limitation. There could be a few tests included in this project, for example using `MockedProvider` from Apollo GraphQL for testing each query, including both success and failure states.

### Address cache problem

A warning may appear from Apollo regarding the cache as not all objects include an ID. If an ID can be fetched, it would probably solve the problem, else a custom merge function would have to be created.

### Pagination / Pull-to-refresh

As of now, the queries are limited to a number of 20 and has no way of displaying more than the 20 most recent objects. This can be solved using pagination, preferably in a dynamical list. Additionally, a pull-to-refresh function would be convenient as well to enable the user to refresh the recent data.
