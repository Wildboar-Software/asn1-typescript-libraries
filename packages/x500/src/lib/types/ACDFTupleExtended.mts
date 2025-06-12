import type ACDFTuple from "./ACDFTuple.mjs";

export
type ACDFTupleExtended = [ ...other: ACDFTuple, userClassSpecificity: number ];

export default ACDFTupleExtended;
