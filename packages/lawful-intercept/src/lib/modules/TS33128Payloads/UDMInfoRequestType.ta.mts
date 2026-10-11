/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary UDMInfoRequestType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UDMInfoRequestType  ::=  ENUMERATED
 * {
 *     hSS(1),
 *     aUSF(2),
 *     other(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_UDMInfoRequestType {
    hSS = 1,
    aUSF = 2,
    other = 3,
}

/**
 * @summary UDMInfoRequestType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UDMInfoRequestType  ::=  ENUMERATED
 * {
 *     hSS(1),
 *     aUSF(2),
 *     other(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type UDMInfoRequestType = _enum_for_UDMInfoRequestType;

/**
 * @summary UDMInfoRequestType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UDMInfoRequestType  ::=  ENUMERATED
 * {
 *     hSS(1),
 *     aUSF(2),
 *     other(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const UDMInfoRequestType = _enum_for_UDMInfoRequestType;

/**
 * @summary UDMInfoRequestType_hSS
 * @constant
 * @type {number}
 */
export
const UDMInfoRequestType_hSS: UDMInfoRequestType = UDMInfoRequestType.hSS; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary hSS
 * @constant
 * @type {number}
 */
export
const hSS: UDMInfoRequestType = UDMInfoRequestType.hSS; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UDMInfoRequestType_aUSF
 * @constant
 * @type {number}
 */
export
const UDMInfoRequestType_aUSF: UDMInfoRequestType = UDMInfoRequestType.aUSF; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary aUSF
 * @constant
 * @type {number}
 */
export
const aUSF: UDMInfoRequestType = UDMInfoRequestType.aUSF; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UDMInfoRequestType_other
 * @constant
 * @type {number}
 */
export
const UDMInfoRequestType_other: UDMInfoRequestType = UDMInfoRequestType.other; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary other
 * @constant
 * @type {number}
 */
export
const other: UDMInfoRequestType = UDMInfoRequestType.other; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_UDMInfoRequestType: $.ASN1Decoder<UDMInfoRequestType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UDMInfoRequestType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UDMInfoRequestType (el: _Element): UDMInfoRequestType {
    if (!_cached_decoder_for_UDMInfoRequestType) { _cached_decoder_for_UDMInfoRequestType = $._decodeEnumerated; }
    return _cached_decoder_for_UDMInfoRequestType(el);
}

let _cached_encoder_for_UDMInfoRequestType: $.ASN1Encoder<UDMInfoRequestType> | null = null;

/**
 * @summary Encodes a(n) UDMInfoRequestType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UDMInfoRequestType, encoded as an ASN.1 Element.
 */
export
function _encode_UDMInfoRequestType (value: UDMInfoRequestType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UDMInfoRequestType) { _cached_encoder_for_UDMInfoRequestType = $._encodeEnumerated; }
    return _cached_encoder_for_UDMInfoRequestType(value, elGetter);
}


/* eslint-enable */
