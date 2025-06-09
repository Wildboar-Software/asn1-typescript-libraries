import type ACDFTuple from "./ACDFTuple.js";

export
type ACDFTupleExtended = [ ...other: ACDFTuple, userClassSpecificity: number ];

export default ACDFTupleExtended;
