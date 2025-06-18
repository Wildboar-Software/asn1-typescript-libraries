import type ACDFTuple from "./ACDFTuple.mjs";

/**
 * The Access Control Decision Function (ACDF) tuple type documented in
 * ITU Recommendation X.501 (2016), Section 18.8.2, but including the user
 * class specificity as the last element.
 */
export
type ACDFTupleExtended = [ ...other: ACDFTuple, userClassSpecificity: number ];

export default ACDFTupleExtended;
