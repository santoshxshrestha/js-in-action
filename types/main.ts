// function main<Input>(input: Input[], messsage: (input: Input) => void): void {
//   input.forEach(messsage);
// }
//
// let mero_array: string[] = ["mero", "array", "is", "here"];
//
// main(mero_array, (input: string) => {
//   console.log(input);
// });
//

// function main<Input>(first: Input[], second: Input[]): Input[] {
//   return first.concat(second);
// }
//
// let result = main<string | number>(
//   [1, 2, 3, 4],
//   ["mero", "array", "is", "here"],
// );
// console.log(`you got the following output ${result}`);

// function main(value?: number | undefined): void {
//   // this will also check for undefined values
//   if (value != null) {
//     console.log(`the value is ${value}`);
//   } else {
//     console.log("no value provided");
//   }
// }
//
// main(32);
//
// // these both are same case
// main();
// main(undefined);
// //
//
// function overLoaded(a: string, b: string): string;
// function overLoaded(a: number, b: number): number;
// function overLoaded(a: any, b: any) {
//   return a + b;
// }
//
// console.log(overLoaded(1, 2));
// console.log(overLoaded("hello", " world"));
