import { useAppStore } from "./app-store";
// import { shallow } from "zustand/shallow";
import { useShallow } from "zustand/react/shallow";

export default function Count() {
  // Cara 1 : Akan me re-render semua komponen apabila ada perubahan disalah satu state
  // const store = useAppStore();

  /* Cara 2 : Fungsi selektor state, dengan ini hanya memilih state apa yg relevan terhadap perubahan, sehingga tidak me re-render semua komponen. Dengan ini maka ketika ada perubahan pada Count yang dirender hanya komponen Count saja. Komponen Username tidak ikut dirender */
  // const count = useAppStore((state) => state.count);
  // const increase = useAppStore((state) => state.increase);
  // const decrease = useAppStore((state) => state.decrease);

  /* Cara 2 : Cara penulisan alternatif, namun dengan cara ini akan me re-render semua komponen yang tidak mengalami perubahan state */
  // const [count, increase, decrease] = useAppStore((state) => [
  //   state.count,
  //   state.increase,
  //   state.decrease,
  // ]);

  /* Cara 3 : Compare state value untuk debug */
  // const [count, increase, decrease] = useAppStore((state) => {
  //   console.log("executed count selector");
  //   return [state.count, state.increase, state.decrease];
  // }, shallow);

  /* Cara 4 : useShallow 
  Dalam pemanggilan state bisa ditulis state.count atau AppStore.count karena const AppStore adalah nama variable yg juga disebut state
  
  */
  const [count, increase, decrease] = useAppStore(
    useShallow((AppStore) => [
      AppStore.count,
      AppStore.increase,
      AppStore.decrease,
    ])
  );

  // console.log(store);
  console.log("Render count");

  return (
    <div>
      <button type="button" onClick={decrease}>
        -
      </button>
      <span>Count: {count}</span>
      <button type="button" onClick={increase}>
        +
      </button>
    </div>
  );
}
