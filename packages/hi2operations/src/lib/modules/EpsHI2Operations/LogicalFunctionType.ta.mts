/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_LogicalFunctionType {
    pDNGW = 0,
    mME = 1,
    sGW = 2,
    ePDG = 3,
    hSS = 4,
}

/**
 * @summary LogicalFunctionType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LogicalFunctionType  ::=  ENUMERATED
 * {
 *  pDNGW (0),
 *  mME (1),
 *  sGW (2),
 *  ePDG (3),
 *  hSS (4),
 * ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type LogicalFunctionType = _enum_for_LogicalFunctionType | ENUMERATED;

/**
 * @summary LogicalFunctionType_pDNGW
 * @constant
 * @type {number}
 */
export
const LogicalFunctionType_pDNGW: LogicalFunctionType = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pDNGW
 * @constant
 * @type {number}
 */
export
const pDNGW: LogicalFunctionType = LogicalFunctionType_pDNGW; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LogicalFunctionType_mME
 * @constant
 * @type {number}
 */
export
const LogicalFunctionType_mME: LogicalFunctionType = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mME
 * @constant
 * @type {number}
 */
export
const mME: LogicalFunctionType = LogicalFunctionType_mME; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LogicalFunctionType_sGW
 * @constant
 * @type {number}
 */
export
const LogicalFunctionType_sGW: LogicalFunctionType = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sGW
 * @constant
 * @type {number}
 */
export
const sGW: LogicalFunctionType = LogicalFunctionType_sGW; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LogicalFunctionType_ePDG
 * @constant
 * @type {number}
 */
export
const LogicalFunctionType_ePDG: LogicalFunctionType = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ePDG
 * @constant
 * @type {number}
 */
export
const ePDG: LogicalFunctionType = LogicalFunctionType_ePDG; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LogicalFunctionType_hSS
 * @constant
 * @type {number}
 */
export
const LogicalFunctionType_hSS: LogicalFunctionType = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary hSS
 * @constant
 * @type {number}
 */
export
const hSS: LogicalFunctionType = LogicalFunctionType_hSS; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_LogicalFunctionType: $.ASN1Decoder<LogicalFunctionType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LogicalFunctionType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LogicalFunctionType (el: _Element): LogicalFunctionType {
    if (!_cached_decoder_for_LogicalFunctionType) { _cached_decoder_for_LogicalFunctionType = $._decodeEnumerated; }
    return _cached_decoder_for_LogicalFunctionType(el);
}

let _cached_encoder_for_LogicalFunctionType: $.ASN1Encoder<LogicalFunctionType> | null = null;

/**
 * @summary Encodes a(n) LogicalFunctionType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LogicalFunctionType, encoded as an ASN.1 Element.
 */
export
function _encode_LogicalFunctionType (value: LogicalFunctionType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LogicalFunctionType) { _cached_encoder_for_LogicalFunctionType = $._encodeEnumerated; }
    return _cached_encoder_for_LogicalFunctionType(value, elGetter);
}


/* eslint-enable */
