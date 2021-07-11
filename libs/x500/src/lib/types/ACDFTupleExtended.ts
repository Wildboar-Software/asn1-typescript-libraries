import type ACDFTuple from "./ACDFTuple";

export
type ACDFTupleExtended = [ ...other: ACDFTuple, userClassSpecificity: number ];

export default ACDFTupleExtended;
