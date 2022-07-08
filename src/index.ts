import { range, fromEvent } from "rxjs";
import { map } from "rxjs/operators";

// range(1, 5)
//   .pipe(map<number, number>(val => val * 10))
//   .subscribe(console.log);

// range(1, 5)
//   .pipe(map<number, string>(val => (val * 10).toString()))
//   .subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, "keyup");

// keyup$.subscribe(code => console.log("map: ", code));

const keyuoCode$ = keyup$.pipe(map(ev => ev.code));

keyuoCode$.subscribe(code => console.log(code));
