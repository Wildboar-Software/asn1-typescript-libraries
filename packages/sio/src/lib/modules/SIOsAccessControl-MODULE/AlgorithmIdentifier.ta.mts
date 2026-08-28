/**
 * @summary AlgorithmIdentifier
 * @description
 *
 * Algorithm OID plus optional parameters for `SIGNED`. Used to
 * identify the signature algorithm on a
 * `SecurityPolicyInformationFile`. Re-exported from
 * `@wildboar/x500`. ITU-T Rec. X.841 (10/2000) Annex A.
 */
export {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "@wildboar/x500/AuthenticationFramework";
