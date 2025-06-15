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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

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
 * ```@enum {number}
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
export function _decode_CRLReason(el: _Element) {
    return $._decodeEnumerated(el);
}

/**
 * @summary Encodes a(n) CRLReason into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CRLReason, encoded as an ASN.1 Element.
 */
export function _encode_CRLReason(
    value: CRLReason,
    elGetter: $.ASN1Encoder<CRLReason>
) {
    return $._encodeEnumerated(value, elGetter);
}


/* eslint-enable */
