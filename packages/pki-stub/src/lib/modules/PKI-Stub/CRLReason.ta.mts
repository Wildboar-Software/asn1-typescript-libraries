/* eslint-disable */
import {
    ENUMERATED,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

export enum _enum_for_CRLReason {
    unspecified = 0,
    keyCompromise = 1,
    cACompromise = 2,
    affiliationChanged = 3,
    superseded = 4,
    cessationOfOperation = 5,
    certificateHold = 6,
    removeFromCRL = 8,
    privilegeWithdrawn = 9,
    aACompromise = 10,
    weakAlgorithmOrKey = 11,
}

/**
 * @summary CRLReason
 * @description
 * 
 * To quote ITU-T Recommendation X.509 (2019), Section 9.5.3.1, here are the
 * meanings of each of these values:
 * 
 * - `unspecified` can be used to revoke public-key certificates for reasons other
 *   than the specific codes.
 * - `keyCompromise` is used in revoking an end-entity public-key certificate; it
 *   indicates that it is known or suspected that the subject's private key, or
 *   other aspects of the subject validated in the public-key certificate, have
 *   been compromised.
 * - `cACompromise` is used in revoking a CA certificate; it indicates that it is
 *   known or suspected that the subject's private key, or other aspects of the
 *   subject validated in the CA certificate, have been compromised.
 * - `affiliationChanged` indicates that the subject's name or other information in
 *   the public-key certificate has been modified but there is no cause to suspect
 *   that the private key has been compromised.
 * - `superseded` indicates that the public-key certificate has been superseded but
 *   there is no cause to suspect that the private key has been compromised.
 * - `cessationOfOperation` indicates that the public-key certificate is no longer
 *   needed for the purpose for which it was issued but there is no cause to
 *   suspect that the private key has been compromised.
 * - `privilegeWithdrawn` indicates that a public-key certificate was revoked because
 *   a privilege contained within that public-key certificate has been withdrawn.
 * - `certificateHold` places the certificate on hold. The hold may later remain
 *   (treat as invalid), be replaced by a final revocation (revocation date is
 *   the hold date; hold-instruction extension shall be absent), or be released
 *   and the entry removed.
 * - `removeFromCRL` is for delta CRLs only: the corresponding base (or later)
 *   CRL has a `certificateHold` entry for the same certificate, and that hold
 *   is now released or the certificate has expired.
 * - `aACompromise` is only relevant for ACRL entries (see 17.2.3.1).
 * - `weakAlgorithmOrKey` indicates that the public-key certificate was revoked due to a
 *   weak cryptographic algorithm and/or key (e.g., due to short key length or
 *   unsafe key generation).
 *
 * There is no enumerated value 7.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CRLReason  ::=  ENUMERATED {
 *   unspecified          (0),
 *   keyCompromise        (1),
 *   cACompromise         (2),
 *   affiliationChanged   (3),
 *   superseded           (4),
 *   cessationOfOperation (5),
 *   certificateHold      (6),
 *   removeFromCRL        (8),
 *   privilegeWithdrawn   (9),
 *   aACompromise         (10),
 *   ...,
 *   weakAlgorithmOrKey   (11) }
 * ```
 *
 * @enum {number}
 */
export type CRLReason = _enum_for_CRLReason | ENUMERATED;

/**
 * @summary CRLReason_unspecified
 * @constant
 * @type {number}
 */
export const CRLReason_unspecified: CRLReason = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unspecified
 * @constant
 * @type {number}
 */
export const unspecified: CRLReason =
    CRLReason_unspecified; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CRLReason_keyCompromise
 * @constant
 * @type {number}
 */
export const CRLReason_keyCompromise: CRLReason = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary keyCompromise
 * @constant
 * @type {number}
 */
export const keyCompromise: CRLReason =
    CRLReason_keyCompromise; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CRLReason_cACompromise
 * @constant
 * @type {number}
 */
export const CRLReason_cACompromise: CRLReason = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cACompromise
 * @constant
 * @type {number}
 */
export const cACompromise: CRLReason =
    CRLReason_cACompromise; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CRLReason_affiliationChanged
 * @constant
 * @type {number}
 */
export const CRLReason_affiliationChanged: CRLReason = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary affiliationChanged
 * @constant
 * @type {number}
 */
export const affiliationChanged: CRLReason =
    CRLReason_affiliationChanged; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CRLReason_superseded
 * @constant
 * @type {number}
 */
export const CRLReason_superseded: CRLReason = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary superseded
 * @constant
 * @type {number}
 */
export const superseded: CRLReason =
    CRLReason_superseded; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CRLReason_cessationOfOperation
 * @constant
 * @type {number}
 */
export const CRLReason_cessationOfOperation: CRLReason = 5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cessationOfOperation
 * @constant
 * @type {number}
 */
export const cessationOfOperation: CRLReason =
    CRLReason_cessationOfOperation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CRLReason_certificateHold
 * @constant
 * @type {number}
 */
export const CRLReason_certificateHold: CRLReason = 6; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary certificateHold
 * @constant
 * @type {number}
 */
export const certificateHold: CRLReason =
    CRLReason_certificateHold; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CRLReason_removeFromCRL
 * @constant
 * @type {number}
 */
export const CRLReason_removeFromCRL: CRLReason = 8; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary removeFromCRL
 * @constant
 * @type {number}
 */
export const removeFromCRL: CRLReason =
    CRLReason_removeFromCRL; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CRLReason_privilegeWithdrawn
 * @constant
 * @type {number}
 */
export const CRLReason_privilegeWithdrawn: CRLReason = 9; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary privilegeWithdrawn
 * @constant
 * @type {number}
 */
export const privilegeWithdrawn: CRLReason =
    CRLReason_privilegeWithdrawn; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CRLReason_aACompromise
 * @constant
 * @type {number}
 */
export const CRLReason_aACompromise: CRLReason = 10; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary aACompromise
 * @constant
 * @type {number}
 */
export const aACompromise: CRLReason =
    CRLReason_aACompromise; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CRLReason_weakAlgorithmOrKey
 * @constant
 * @type {number}
 */
export const CRLReason_weakAlgorithmOrKey: CRLReason = 11; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary weakAlgorithmOrKey
 * @constant
 * @type {number}
 */
export const weakAlgorithmOrKey: CRLReason =
    CRLReason_weakAlgorithmOrKey; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) CRLReason
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CRLReason} The decoded data structure.
 */
export const _decode_CRLReason: $.ASN1Decoder<CRLReason> = $._decodeEnumerated;

/**
 * @summary Encodes a(n) CRLReason into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CRLReason, encoded as an ASN.1 Element.
 */
export const _encode_CRLReason: $.ASN1Encoder<CRLReason> = $._encodeEnumerated;


/* eslint-enable */
