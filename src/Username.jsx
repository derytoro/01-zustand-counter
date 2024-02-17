import { useAppStore } from "./app-store";
import { useShallow } from "zustand/react/shallow";

export default function Username() {
  // Cara 1 : Akan me re-render semua komponen apabila ada perubahan disalah satu state
  //   const store = useAppStore();

  /* Cara 2 : Fungsi selektor state, dengan ini hanya memilih state apa yg relevan terhadap perubahan, sehingga tidak me re-render semua komponen. Dengan ini maka ketika ada perubahan pada Count yang dirender hanya komponen Count saja. Komponen Username tidak ikut dirender */
  //   const username = useAppStore((state) => state.username);
  //   const updateUsername = useAppStore((state) => state.updateUsername);
  //   const resetUsername = useAppStore((state) => state.resetUsername);

  /* Cara 3 : Compare state value untuk debug */
  //   const username = useAppStore((state) => {
  //     console.log("executed username selector");
  //     return state.username;
  //   });

  /* Cara 4 : useShallow */
  const [username, updateUsername, resetUsername] = useAppStore(
    useShallow((state) => [
      state.username,
      state.updateUsername,
      state.resetUsername,
    ])
  );

  // console.log(store);
  console.log("Render username");

  return (
    <div>
      <p>Username: {username}</p>
      <input
        type="text"
        placeholder="New username"
        value={username}
        onChange={(event) => {
          const newUsername = event.target.value;
          updateUsername(newUsername);
        }}
      />
      <hr />
      <button onClick={resetUsername}>Reset username</button>
    </div>
  );
}
