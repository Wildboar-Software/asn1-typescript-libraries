/**
 * @summary Clearance
 * @description
 *
 * Authorizations granted a user or application: `policyId`,
 * hierarchical `classList`, and optional `securityCategories`
 * (restrictive, permissive, and enumerated). May be a subset of
 * the organization's policy or the whole policy. `policyId`
 * identifies which optional components must be present. Access
 * is permitted when these authorizations suffice for the target
 * label. Permissive tags: at least one matching authorization;
 * restrictive: all; enumerated: e.g. nationality.
 *
 * This package re-exports the X.501 type (universal tags, with
 * `...`). X.841 Annex A applies automatic tags (`[0]`/`[1]`/`[2]`)
 * and has no extension marker. ITU-T Rec. X.841 (10/2000)
 * [§6.3](https://www.itu.int/rec/T-REC-X.841-200010-I), §7.2.
 */
export {
    Clearance,
    _decode_Clearance,
    _encode_Clearance,
} from "@wildboar/x500/EnhancedSecurity";
