/**
 * @summary SecurityCategories
 * @description
 *
 * SET SIZE (1..MAX) OF `SecurityCategory` on a confidentiality
 * label or clearance. Empty is invalid. Restrictive, permissive,
 * and enumerated categories assigned to the data or the user.
 * Re-exported from `@wildboar/x500`. ITU-T Rec. X.841 (10/2000)
 * [§6.1.2](https://www.itu.int/rec/T-REC-X.841-200010-I), §6.3.1.
 */
export {
    type SecurityCategories,
    _decode_SecurityCategories,
    _encode_SecurityCategories,
} from "@wildboar/x500/EnhancedSecurity";
