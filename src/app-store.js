/* Didalam store kita bisa membuat variable state ataupun funcion/action state. Zustand akan mengembalikan store dalam bentuk hook, penggunnaan nama menggunakn use...
 */

import { create } from "zustand";
import { persist } from "zustand/middleware";

// Menyimpam state/store dan action dalam variable terpisah untuk digunakan dalam persist middleware
const AppStore = (set) => ({
  count: 0,

  increase: () => {
    set((state) => ({
      count: state.count + 1,
    }));
  },

  decrease: () => {
    set((state) => ({
      count: state.count - 1,
    }));
  },

  username: "Dery Sis",
  updateUsername: (username) => set({ username }),
  resetUsername: () => set({ username: "" }),

  user: {},
  getUser: async (username) => {
    // console.log("Fetch", username);
    const response = await fetch(`https://api.github.com/users/${username}`);
    const user = await response.json();
    // console.log(user);

    set({ user: user }); // atau karena namanya sama bisa ditulis set({user})
  },
  logoutUser: () => set({ user: {} }),
});

// Create store
export const useAppStore = create(
  persist(AppStore, {
    name: "app-store",
  })
);
