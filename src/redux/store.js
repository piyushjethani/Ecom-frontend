
// import userSlice from "./userSlice";
// import { persistStore } from "redux-persist";
// import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import productSlice from "./productSlice";
// import {
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";

// import storage from "redux-persist/lib/storage";

// const persistConfig = {
//   key: "root",
//   version: 1,
//   storage,
// };

// const rootReducer = combineReducers({
//   user: userSlice,
// product:productSlice
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [
//           FLUSH,
//           REHYDRATE,
//           PAUSE,
//           PERSIST,
//           PURGE,
//           REGISTER,
//         ],
//       },
//     }),
// });

// export const persistor = persistStore(store);
// export default store;



import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";

import userSlice from "./userSlice";
import productSlice from "./productSlice";

const store = configureStore({
    reducer:{
        user:userSlice,
        product:productSlice,
        products:productReducer
    }
})
export default store


// import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import userSlice from "./userSlice";
// import productSlice from "./productSlice";

// import {
//   persistReducer,
//   persistStore,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";

// import storage from "redux-persist/lib/storage";

// // 🔹 persist config
// const persistConfig = {
//   key: "root",
//   version: 1,
//   storage,
// };

// // 🔹 combine reducers
// const rootReducer = combineReducers({
//   user: userSlice,
//   product: productSlice,
// });

// // 🔹 persisted reducer
// const persistedReducer = persistReducer(persistConfig, rootReducer);

// // 🔹 store
// const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [
//           FLUSH,
//           REHYDRATE,
//           PAUSE,
//           PERSIST,
//           PURGE,
//           REGISTER,
//         ],
//       },
//     }),
// });

// // 🔹 persistor
// export const persistor = persistStore(store);

// export default store;


