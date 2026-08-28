/**
 * @summary SecurityPolicyIdentifier
 * @description
 *
 * OID of the security policy that interprets a confidentiality
 * label's classification and categories. Compared with clearance
 * `policyId` and with the SPIF `securityPolicyIdData`. Re-exported
 * from `@wildboar/x500`. ITU-T Rec. X.841 (10/2000)
 * [§6.1.2](https://www.itu.int/rec/T-REC-X.841-200010-I).
 */
export {
    type SecurityPolicyIdentifier,
    _decode_SecurityPolicyIdentifier,
    _encode_SecurityPolicyIdentifier,
} from "@wildboar/x500/EnhancedSecurity";
