/**
 * Re-export of {@link CRLReason} from `@wildboar/pki-stub`.
 *
 * ENUMERATED; there is no value 7 (`removeFromCRL` is 8). `removeFromCRL`
 * is for delta CRLs only (pairs with `certificateHold`). Hold-instruction
 * extension applies only with `certificateHold`. `aACompromise` is ACRL-only.
 */
export type {
    CRLReason,
} from "@wildboar/pki-stub";
export {
    _decode_CRLReason,
    _encode_CRLReason,
    unspecified,
    keyCompromise,
    cACompromise,
    affiliationChanged,
    superseded,
    cessationOfOperation,
    certificateHold,
    removeFromCRL,
    privilegeWithdrawn,
    aACompromise,
    weakAlgorithmOrKey,
    CRLReason_unspecified,
    CRLReason_keyCompromise,
    CRLReason_cACompromise,
    CRLReason_affiliationChanged,
    CRLReason_superseded,
    CRLReason_cessationOfOperation,
    CRLReason_certificateHold,
    CRLReason_removeFromCRL,
    CRLReason_privilegeWithdrawn,
    CRLReason_aACompromise,
    CRLReason_weakAlgorithmOrKey,
    _enum_for_CRLReason,
} from "@wildboar/pki-stub";
