/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PrimaryAuthenticationType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PrimaryAuthenticationType  ::=  ENUMERATED
 * {
 *     eAPAKAPrime(1),
 *     fiveGAKA(2),
 *     eAPTLS(3),
 *     none(4),
 *     ePSAKA(5),
 *     eAPAKA(6),
 *     iMSAKA(7),
 *     gBAAKA(8),
 *     uMTSAKA(9)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_PrimaryAuthenticationType {
    eAPAKAPrime = 1,
    fiveGAKA = 2,
    eAPTLS = 3,
    none = 4,
    ePSAKA = 5,
    eAPAKA = 6,
    iMSAKA = 7,
    gBAAKA = 8,
    uMTSAKA = 9,
}

/**
 * @summary PrimaryAuthenticationType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PrimaryAuthenticationType  ::=  ENUMERATED
 * {
 *     eAPAKAPrime(1),
 *     fiveGAKA(2),
 *     eAPTLS(3),
 *     none(4),
 *     ePSAKA(5),
 *     eAPAKA(6),
 *     iMSAKA(7),
 *     gBAAKA(8),
 *     uMTSAKA(9)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type PrimaryAuthenticationType = _enum_for_PrimaryAuthenticationType;

/**
 * @summary PrimaryAuthenticationType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PrimaryAuthenticationType  ::=  ENUMERATED
 * {
 *     eAPAKAPrime(1),
 *     fiveGAKA(2),
 *     eAPTLS(3),
 *     none(4),
 *     ePSAKA(5),
 *     eAPAKA(6),
 *     iMSAKA(7),
 *     gBAAKA(8),
 *     uMTSAKA(9)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const PrimaryAuthenticationType = _enum_for_PrimaryAuthenticationType;

/**
 * @summary PrimaryAuthenticationType_eAPAKAPrime
 * @constant
 * @type {number}
 */
export
const PrimaryAuthenticationType_eAPAKAPrime: PrimaryAuthenticationType = PrimaryAuthenticationType.eAPAKAPrime; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary eAPAKAPrime
 * @constant
 * @type {number}
 */
export
const eAPAKAPrime: PrimaryAuthenticationType = PrimaryAuthenticationType.eAPAKAPrime; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PrimaryAuthenticationType_fiveGAKA
 * @constant
 * @type {number}
 */
export
const PrimaryAuthenticationType_fiveGAKA: PrimaryAuthenticationType = PrimaryAuthenticationType.fiveGAKA; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary fiveGAKA
 * @constant
 * @type {number}
 */
export
const fiveGAKA: PrimaryAuthenticationType = PrimaryAuthenticationType.fiveGAKA; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PrimaryAuthenticationType_eAPTLS
 * @constant
 * @type {number}
 */
export
const PrimaryAuthenticationType_eAPTLS: PrimaryAuthenticationType = PrimaryAuthenticationType.eAPTLS; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary eAPTLS
 * @constant
 * @type {number}
 */
export
const eAPTLS: PrimaryAuthenticationType = PrimaryAuthenticationType.eAPTLS; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PrimaryAuthenticationType_none
 * @constant
 * @type {number}
 */
export
const PrimaryAuthenticationType_none: PrimaryAuthenticationType = PrimaryAuthenticationType.none; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary none
 * @constant
 * @type {number}
 */
export
const none: PrimaryAuthenticationType = PrimaryAuthenticationType.none; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PrimaryAuthenticationType_ePSAKA
 * @constant
 * @type {number}
 */
export
const PrimaryAuthenticationType_ePSAKA: PrimaryAuthenticationType = PrimaryAuthenticationType.ePSAKA; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ePSAKA
 * @constant
 * @type {number}
 */
export
const ePSAKA: PrimaryAuthenticationType = PrimaryAuthenticationType.ePSAKA; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PrimaryAuthenticationType_eAPAKA
 * @constant
 * @type {number}
 */
export
const PrimaryAuthenticationType_eAPAKA: PrimaryAuthenticationType = PrimaryAuthenticationType.eAPAKA; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary eAPAKA
 * @constant
 * @type {number}
 */
export
const eAPAKA: PrimaryAuthenticationType = PrimaryAuthenticationType.eAPAKA; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PrimaryAuthenticationType_iMSAKA
 * @constant
 * @type {number}
 */
export
const PrimaryAuthenticationType_iMSAKA: PrimaryAuthenticationType = PrimaryAuthenticationType.iMSAKA; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iMSAKA
 * @constant
 * @type {number}
 */
export
const iMSAKA: PrimaryAuthenticationType = PrimaryAuthenticationType.iMSAKA; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PrimaryAuthenticationType_gBAAKA
 * @constant
 * @type {number}
 */
export
const PrimaryAuthenticationType_gBAAKA: PrimaryAuthenticationType = PrimaryAuthenticationType.gBAAKA; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary gBAAKA
 * @constant
 * @type {number}
 */
export
const gBAAKA: PrimaryAuthenticationType = PrimaryAuthenticationType.gBAAKA; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PrimaryAuthenticationType_uMTSAKA
 * @constant
 * @type {number}
 */
export
const PrimaryAuthenticationType_uMTSAKA: PrimaryAuthenticationType = PrimaryAuthenticationType.uMTSAKA; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uMTSAKA
 * @constant
 * @type {number}
 */
export
const uMTSAKA: PrimaryAuthenticationType = PrimaryAuthenticationType.uMTSAKA; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_PrimaryAuthenticationType: $.ASN1Decoder<PrimaryAuthenticationType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PrimaryAuthenticationType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PrimaryAuthenticationType (el: _Element): PrimaryAuthenticationType {
    if (!_cached_decoder_for_PrimaryAuthenticationType) { _cached_decoder_for_PrimaryAuthenticationType = $._decodeEnumerated; }
    return _cached_decoder_for_PrimaryAuthenticationType(el);
}

let _cached_encoder_for_PrimaryAuthenticationType: $.ASN1Encoder<PrimaryAuthenticationType> | null = null;

/**
 * @summary Encodes a(n) PrimaryAuthenticationType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PrimaryAuthenticationType, encoded as an ASN.1 Element.
 */
export
function _encode_PrimaryAuthenticationType (value: PrimaryAuthenticationType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PrimaryAuthenticationType) { _cached_encoder_for_PrimaryAuthenticationType = $._encodeEnumerated; }
    return _cached_encoder_for_PrimaryAuthenticationType(value, elGetter);
}


/* eslint-enable */
