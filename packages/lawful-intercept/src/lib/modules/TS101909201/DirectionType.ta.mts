/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DirectionType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DirectionType  ::=  ENUMERATED {
 *     toTarget,
 *     fromTarget,
 *     unknown
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_DirectionType {
    toTarget = 0,
    fromTarget = 1,
    unknown = 2,
}

/**
 * @summary DirectionType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DirectionType  ::=  ENUMERATED {
 *     toTarget,
 *     fromTarget,
 *     unknown
 * }
 * ```
 * 
 * @enum {number}
 */
export
type DirectionType = _enum_for_DirectionType;

/**
 * @summary DirectionType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DirectionType  ::=  ENUMERATED {
 *     toTarget,
 *     fromTarget,
 *     unknown
 * }
 * ```
 * 
 * @enum {number}
 */
export
const DirectionType = _enum_for_DirectionType;

/**
 * @summary DirectionType_toTarget
 * @constant
 * @type {number}
 */
export
const DirectionType_toTarget: DirectionType = DirectionType.toTarget; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary toTarget
 * @constant
 * @type {number}
 */
export
const toTarget: DirectionType = DirectionType.toTarget; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DirectionType_fromTarget
 * @constant
 * @type {number}
 */
export
const DirectionType_fromTarget: DirectionType = DirectionType.fromTarget; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary fromTarget
 * @constant
 * @type {number}
 */
export
const fromTarget: DirectionType = DirectionType.fromTarget; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DirectionType_unknown
 * @constant
 * @type {number}
 */
export
const DirectionType_unknown: DirectionType = DirectionType.unknown; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknown
 * @constant
 * @type {number}
 */
export
const unknown: DirectionType = DirectionType.unknown; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_DirectionType: $.ASN1Decoder<DirectionType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DirectionType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DirectionType (el: _Element): DirectionType {
    if (!_cached_decoder_for_DirectionType) { _cached_decoder_for_DirectionType = $._decodeEnumerated; }
    return _cached_decoder_for_DirectionType(el);
}

let _cached_encoder_for_DirectionType: $.ASN1Encoder<DirectionType> | null = null;

/**
 * @summary Encodes a(n) DirectionType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DirectionType, encoded as an ASN.1 Element.
 */
export
function _encode_DirectionType (value: DirectionType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DirectionType) { _cached_encoder_for_DirectionType = $._encodeEnumerated; }
    return _cached_encoder_for_DirectionType(value, elGetter);
}


/* eslint-enable */
