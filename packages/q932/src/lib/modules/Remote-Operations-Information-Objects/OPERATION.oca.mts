/**
 * X.880 `OPERATION` class, reproduced by ITU-T Rec. Q.932 (1998) Amd.1
 * (06/2000) Table IV.1 bis. That table matches Appendix A of ITU-T Rec. X.880.
 * Bind and unbind are outside the scope of Q.932.
 *
 * The class fields select the argument and result types, whether each may be
 * omitted, whether a result is returned, the errors and linked operations, and
 * the operation code (`Code`, a local integer or a global object identifier).
 *
 * @see https://www.itu.int/rec/T-REC-Q.932
 */
export {
    type OPERATION,
} from "@wildboar/rose";
