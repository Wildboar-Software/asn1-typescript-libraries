/**
 * @summary ClassList
 * @description
 *
 * Hierarchical classifications granted to a user or application:
 * unmarked(0), unclassified(1), restricted(2), confidential(3),
 * secret(4), topSecret(5). Several bits may be set. DEFAULT on
 * `Clearance` is `{unclassified}` (bit 1). A SPIF
 * `labelAndCertValue` is the bit index in this string. Re-exported
 * from `@wildboar/x500` (X.501). ITU-T Rec. X.841 (10/2000)
 * [§6.3](https://www.itu.int/rec/T-REC-X.841-200010-I).
 */
export {
    type ClassList,
    ClassList_unmarked,
    ClassList_unclassified,
    ClassList_restricted,
    ClassList_confidential,
    ClassList_secret,
    ClassList_topSecret,
    _decode_ClassList,
    _encode_ClassList,
} from "@wildboar/x500/EnhancedSecurity";
import {
    ClassList_unmarked,
    ClassList_unclassified,
    ClassList_restricted,
    ClassList_confidential,
    ClassList_secret,
    ClassList_topSecret,
} from "@wildboar/x500/EnhancedSecurity";

/** @summary unmarked @constant */
export const unmarked: number = ClassList_unmarked;
/** @summary unclassified @constant */
export const unclassified: number = ClassList_unclassified;
/** @summary restricted @constant */
export const restricted: number = ClassList_restricted;
/** @summary confidential @constant */
export const confidential: number = ClassList_confidential;
/** @summary secret @constant */
export const secret: number = ClassList_secret;
/** @summary topSecret @constant */
export const topSecret: number = ClassList_topSecret;
