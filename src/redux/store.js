import { configureStore } from "@reduxjs/toolkit";
import GeneralSlice from "./features/general/generalSlice";

export const store = configureStore({
    reducer: {
        general: GeneralSlice,
    },
});



// if (!matchesCreatedDate && !matchesDueDate && !withinAmountRange && !matchesSelectedType) {
//     return null
//   }
//   // 2. Only matchesCreatedDate is true
//   if (matchesCreatedDate && !matchesDueDate && !withinAmountRange && !matchesSelectedType) {
//     return matchesCreatedDate
//   }
//   // 3. Only matchesDueDate is true
//   if (!matchesCreatedDate && matchesDueDate && !withinAmountRange && !matchesSelectedType) {
//     return matchesDueDate
//   }
//   // 4. Only withinAmountRange is true
//   if (!matchesCreatedDate && !matchesDueDate && withinAmountRange && !matchesSelectedType) {
//     return withinAmountRange
//   }
//   // 5. Only matchesSelectedType is true
//   if (!matchesCreatedDate && !matchesDueDate && !withinAmountRange && matchesSelectedType) {
//     return matchesSelectedType
//   }
//   // 6. matchesCreatedDate and matchesDueDate are true
//   if (matchesCreatedDate && matchesDueDate && !withinAmountRange && !matchesSelectedType) {
//     return matchesCreatedDate && matchesDueDate
//   }
//   // 7. matchesCreatedDate and withinAmountRange are true
//   if (matchesCreatedDate && !matchesDueDate && withinAmountRange && !matchesSelectedType) {
//     return matchesCreatedDate && withinAmountRange
//   }
//   // 8. matchesCreatedDate and matchesSelectedType are true
//   if (matchesCreatedDate && !matchesDueDate && !withinAmountRange && matchesSelectedType) {
//     return matchesCreatedDate && matchesSelectedType
//   }
//   // 9. matchesDueDate and withinAmountRange are true
//   if (!matchesCreatedDate && matchesDueDate && withinAmountRange && !matchesSelectedType) {
//     return matchesDueDate && withinAmountRange
//   }
//   // 10. matchesDueDate and matchesSelectedType are true
//   if (!matchesCreatedDate && matchesDueDate && !withinAmountRange && matchesSelectedType) {
//     return matchesDueDate && matchesSelectedType
//   }
//   // 11. withinAmountRange and matchesSelectedType are true
//   if (!matchesCreatedDate && !matchesDueDate && withinAmountRange && matchesSelectedType) {
//     console.log('hi')
//     return withinAmountRange && matchesSelectedType
//   }
//   // 12. matchesCreatedDate, matchesDueDate, and withinAmountRange are true
//   if (matchesCreatedDate && matchesDueDate && withinAmountRange && !matchesSelectedType) {
//     return matchesCreatedDate && matchesDueDate && withinAmountRange
//   }
//   // 13. matchesCreatedDate, matchesDueDate, and matchesSelectedType are true
//   if (matchesCreatedDate && matchesDueDate && !withinAmountRange && matchesSelectedType) {
//     return matchesCreatedDate && matchesDueDate && matchesSelectedType
//   }
//   // 14. matchesCreatedDate, withinAmountRange, and matchesSelectedType are true
//   if (matchesCreatedDate && !matchesDueDate && withinAmountRange && matchesSelectedType) {
//     return matchesCreatedDate && withinAmountRange && matchesSelectedType
//   }
//   // 15. matchesDueDate, withinAmountRange, and matchesSelectedType are true
//   if (!matchesCreatedDate && matchesDueDate && withinAmountRange && matchesSelectedType) {
//     return matchesDueDate && withinAmountRange && matchesSelectedType
//   }
//   // 16. All are true
//   if (matchesCreatedDate && matchesDueDate && withinAmountRange && matchesSelectedType) {
//     return matchesDueDate && withinAmountRange && matchesSelectedType && matchesCreatedDate
//   }