// export default function createIteratorObject(report) {
//   let allEmployees = [];
//   for (const item of Object.values(report.allEmployees)) {
//     allEmployees = [
//       ...allEmployees,
//       ...item,
//     ];
//   }
//   return allEmployees;
// }





export default function createIteratorObject(report) {
  const myarray = [];
  for (const item of Object.values(report.allEmployees)) {
    myarray.push(...item);
  }

  return myarray;
}
