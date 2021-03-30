// file to export all action creators
// groups all the exports from separate files
// we can then point to this file to import something from any of the separate files
export {
    add,
    subtract,
    increment,
    decrement
} from './counter';
export {
    storeResult,
    deleteResult
} from './result';