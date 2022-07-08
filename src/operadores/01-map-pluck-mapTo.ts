import { range, fromEvent } from "rxjs";
import { map, mapTo, pluck } from "rxjs/operators";

// range(1, 5)
//   .pipe(map<number, number>(val => val * 10))
//   .subscribe(console.log);

// range(1, 5)
//   .pipe(map<number, string>(val => (val * 10).toString()))
//   .subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, "keyup");

// keyup$.subscribe(code => console.log("map: ", code));

const keyuoCode$ = keyup$.pipe(map(ev => ev.code));

const keyupPluck$ = keyup$.pipe(pluck("key"));
const keyupPluck2$ = keyup$.pipe(pluck("target", "baseURI"));
const keyupMapTo$ = keyup$.pipe(mapTo("tecla presionada"));

keyuoCode$.subscribe(code => console.log("map", code));
keyupPluck$.subscribe(code => console.log("pluck", code));
keyupPluck2$.subscribe(code => console.log("pluck2", code));
keyupMapTo$.subscribe(code => console.log("MapTo", code));
