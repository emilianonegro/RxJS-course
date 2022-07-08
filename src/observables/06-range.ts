import { asyncScheduler, of, range } from "rxjs";

// const src$ = of(1,2,3,4,5);
//const src$ = range(5); //devuelve 0,1,2,3,4 porque el valor inicial es 0 y en este caso el 5 hace referencias al numero de repeticiones

const src$ = range(1, 5, asyncScheduler); // de esta forma lo hacemos asincrono

console.log("inicio");
src$.subscribe(console.log);
console.log("fin");
