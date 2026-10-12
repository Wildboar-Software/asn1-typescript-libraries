/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PTCSessionType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCSessionType   ::=  ENUMERATED
 * {
 *     ondemand(1),
 *     preEstablished(2),
 *     adhoc(3),
 *     prearranged(4),
 *     groupSession(5)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_PTCSessionType {
    ondemand = 1,
    preEstablished = 2,
    adhoc = 3,
    prearranged = 4,
    groupSession = 5,
}

/**
 * @summary PTCSessionType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCSessionType   ::=  ENUMERATED
 * {
 *     ondemand(1),
 *     preEstablished(2),
 *     adhoc(3),
 *     prearranged(4),
 *     groupSession(5)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type PTCSessionType = _enum_for_PTCSessionType;

/**
 * @summary PTCSessionType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCSessionType   ::=  ENUMERATED
 * {
 *     ondemand(1),
 *     preEstablished(2),
 *     adhoc(3),
 *     prearranged(4),
 *     groupSession(5)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const PTCSessionType = _enum_for_PTCSessionType;

/**
 * @summary PTCSessionType_ondemand
 * @constant
 * @type {number}
 */
export
const PTCSessionType_ondemand: PTCSessionType = PTCSessionType.ondemand; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ondemand
 * @constant
 * @type {number}
 */
export
const ondemand: PTCSessionType = PTCSessionType.ondemand; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCSessionType_preEstablished
 * @constant
 * @type {number}
 */
export
const PTCSessionType_preEstablished: PTCSessionType = PTCSessionType.preEstablished; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary preEstablished
 * @constant
 * @type {number}
 */
export
const preEstablished: PTCSessionType = PTCSessionType.preEstablished; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCSessionType_adhoc
 * @constant
 * @type {number}
 */
export
const PTCSessionType_adhoc: PTCSessionType = PTCSessionType.adhoc; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary adhoc
 * @constant
 * @type {number}
 */
export
const adhoc: PTCSessionType = PTCSessionType.adhoc; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCSessionType_prearranged
 * @constant
 * @type {number}
 */
export
const PTCSessionType_prearranged: PTCSessionType = PTCSessionType.prearranged; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary prearranged
 * @constant
 * @type {number}
 */
export
const prearranged: PTCSessionType = PTCSessionType.prearranged; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCSessionType_groupSession
 * @constant
 * @type {number}
 */
export
const PTCSessionType_groupSession: PTCSessionType = PTCSessionType.groupSession; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary groupSession
 * @constant
 * @type {number}
 */
export
const groupSession: PTCSessionType = PTCSessionType.groupSession; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_PTCSessionType: $.ASN1Decoder<PTCSessionType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PTCSessionType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PTCSessionType (el: _Element): PTCSessionType {
    if (!_cached_decoder_for_PTCSessionType) { _cached_decoder_for_PTCSessionType = $._decodeEnumerated; }
    return _cached_decoder_for_PTCSessionType(el);
}

let _cached_encoder_for_PTCSessionType: $.ASN1Encoder<PTCSessionType> | null = null;

/**
 * @summary Encodes a(n) PTCSessionType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PTCSessionType, encoded as an ASN.1 Element.
 */
export
function _encode_PTCSessionType (value: PTCSessionType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PTCSessionType) { _cached_encoder_for_PTCSessionType = $._encodeEnumerated; }
    return _cached_encoder_for_PTCSessionType(value, elGetter);
}


/* eslint-enable */
