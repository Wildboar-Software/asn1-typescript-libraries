/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CRLReason
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CRLReason  ::=  ENUMERATED {
 *      unspecified             (0),
 *      keyCompromise           (1),
 *      cACompromise            (2),
 *      affiliationChanged      (3),
 *      superseded              (4),
 *      cessationOfOperation    (5),
 *      certificateHold         (6),
 *      removeFromCRL           (8),
 *      privilegeWithdrawn      (9),
 *      aACompromise           (10) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_CRLReason {
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
}

/**
 * @summary CRLReason
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CRLReason  ::=  ENUMERATED {
 *      unspecified             (0),
 *      keyCompromise           (1),
 *      cACompromise            (2),
 *      affiliationChanged      (3),
 *      superseded              (4),
 *      cessationOfOperation    (5),
 *      certificateHold         (6),
 *      removeFromCRL           (8),
 *      privilegeWithdrawn      (9),
 *      aACompromise           (10) }
 * ```
 * 
 * @enum {number}
 */
export
type CRLReason = _enum_for_CRLReason;

/**
 * @summary CRLReason
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CRLReason  ::=  ENUMERATED {
 *      unspecified             (0),
 *      keyCompromise           (1),
 *      cACompromise            (2),
 *      affiliationChanged      (3),
 *      superseded              (4),
 *      cessationOfOperation    (5),
 *      certificateHold         (6),
 *      removeFromCRL           (8),
 *      privilegeWithdrawn      (9),
 *      aACompromise           (10) }
 * ```
 * 
 * @enum {number}
 */
export
const CRLReason = _enum_for_CRLReason;

/**
 * @summary CRLReason_unspecified
 * @constant
 * @type {number}
 */
export
const CRLReason_unspecified: CRLReason = CRLReason.unspecified; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unspecified
 * @constant
 * @type {number}
 */
export
const unspecified: CRLReason = CRLReason.unspecified; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CRLReason_keyCompromise
 * @constant
 * @type {number}
 */
export
const CRLReason_keyCompromise: CRLReason = CRLReason.keyCompromise; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary keyCompromise
 * @constant
 * @type {number}
 */
export
const keyCompromise: CRLReason = CRLReason.keyCompromise; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CRLReason_cACompromise
 * @constant
 * @type {number}
 */
export
const CRLReason_cACompromise: CRLReason = CRLReason.cACompromise; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cACompromise
 * @constant
 * @type {number}
 */
export
const cACompromise: CRLReason = CRLReason.cACompromise; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CRLReason_affiliationChanged
 * @constant
 * @type {number}
 */
export
const CRLReason_affiliationChanged: CRLReason = CRLReason.affiliationChanged; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary affiliationChanged
 * @constant
 * @type {number}
 */
export
const affiliationChanged: CRLReason = CRLReason.affiliationChanged; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CRLReason_superseded
 * @constant
 * @type {number}
 */
export
const CRLReason_superseded: CRLReason = CRLReason.superseded; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary superseded
 * @constant
 * @type {number}
 */
export
const superseded: CRLReason = CRLReason.superseded; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CRLReason_cessationOfOperation
 * @constant
 * @type {number}
 */
export
const CRLReason_cessationOfOperation: CRLReason = CRLReason.cessationOfOperation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cessationOfOperation
 * @constant
 * @type {number}
 */
export
const cessationOfOperation: CRLReason = CRLReason.cessationOfOperation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CRLReason_certificateHold
 * @constant
 * @type {number}
 */
export
const CRLReason_certificateHold: CRLReason = CRLReason.certificateHold; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary certificateHold
 * @constant
 * @type {number}
 */
export
const certificateHold: CRLReason = CRLReason.certificateHold; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CRLReason_removeFromCRL
 * @constant
 * @type {number}
 */
export
const CRLReason_removeFromCRL: CRLReason = CRLReason.removeFromCRL; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary removeFromCRL
 * @constant
 * @type {number}
 */
export
const removeFromCRL: CRLReason = CRLReason.removeFromCRL; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CRLReason_privilegeWithdrawn
 * @constant
 * @type {number}
 */
export
const CRLReason_privilegeWithdrawn: CRLReason = CRLReason.privilegeWithdrawn; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary privilegeWithdrawn
 * @constant
 * @type {number}
 */
export
const privilegeWithdrawn: CRLReason = CRLReason.privilegeWithdrawn; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CRLReason_aACompromise
 * @constant
 * @type {number}
 */
export
const CRLReason_aACompromise: CRLReason = CRLReason.aACompromise; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary aACompromise
 * @constant
 * @type {number}
 */
export
const aACompromise: CRLReason = CRLReason.aACompromise; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_CRLReason: $.ASN1Decoder<CRLReason> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CRLReason
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CRLReason (el: _Element): CRLReason {
    if (!_cached_decoder_for_CRLReason) { _cached_decoder_for_CRLReason = $._decodeEnumerated; }
    return _cached_decoder_for_CRLReason(el);
}

let _cached_encoder_for_CRLReason: $.ASN1Encoder<CRLReason> | null = null;

/**
 * @summary Encodes a(n) CRLReason into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CRLReason, encoded as an ASN.1 Element.
 */
export
function _encode_CRLReason (value: CRLReason, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CRLReason) { _cached_encoder_for_CRLReason = $._encodeEnumerated; }
    return _cached_encoder_for_CRLReason(value, elGetter);
}


/* eslint-enable */
