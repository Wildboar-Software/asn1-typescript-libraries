/**
 * @summary SecurityCategory
 * @description
 *
 * Open-type category: `[0] type` OID selects a row of
 * `SecurityCategoriesTable`; `[1] EXPLICIT value` is that row's
 * `&Type`. On a SPIF, `type` must be consistent with `privilegeId`,
 * `rbacId`, and `optCatDataId`. Annex B (informative) shows
 * restrictive/permissive bit maps, enumerated attributes, ranges,
 * and free-form fields. Re-exported from `@wildboar/x500`.
 * ITU-T Rec. X.841 (10/2000)
 * [§6.1.2](https://www.itu.int/rec/T-REC-X.841-200010-I), §6.2.2.7,
 * Annex B.
 */
export {
    SecurityCategory,
    _decode_SecurityCategory,
    _encode_SecurityCategory,
} from "@wildboar/x500/EnhancedSecurity";
