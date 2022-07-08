import { asyncScheduler } from "rxjs";

const saludar = () => console.log("Hola mundo");
const saludar2 = nombre => console.log(`Hola ${nombre}`);

// asyncScheduler.schedule(saludar, 3000);
//esto es como un setTimeout
// asyncScheduler.schedule(saludar2, 3000, "Emiliano");

//esto como un setInterval, periodicamente en un lapso de tiempo
const subs = asyncScheduler.schedule(
  function (state) {
    console.log("state", state);

    this.schedule(state + 1, 1000);
  },
  3000,
  0 //estado inicial
);

// setTimeout(() => {
//   subs.unsubscribe();
// }, 6000);

asyncScheduler.schedule(() => subs.unsubscribe(), 6000);
