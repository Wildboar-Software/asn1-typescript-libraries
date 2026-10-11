/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MCServiceSessionType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MCServiceSessionType  ::=  ENUMERATED
 * {
 *     private(1),
 *     group(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_MCServiceSessionType {
    private_ = 1,
    group = 2,
}

/**
 * @summary MCServiceSessionType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MCServiceSessionType  ::=  ENUMERATED
 * {
 *     private(1),
 *     group(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type MCServiceSessionType = _enum_for_MCServiceSessionType;

/**
 * @summary MCServiceSessionType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MCServiceSessionType  ::=  ENUMERATED
 * {
 *     private(1),
 *     group(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const MCServiceSessionType = _enum_for_MCServiceSessionType;

/**
 * @summary MCServiceSessionType_private_
 * @constant
 * @type {number}
 */
export
const MCServiceSessionType_private_: MCServiceSessionType = MCServiceSessionType.private_; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary private_
 * @constant
 * @type {number}
 */
export
const private_: MCServiceSessionType = MCServiceSessionType.private_; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MCServiceSessionType_group
 * @constant
 * @type {number}
 */
export
const MCServiceSessionType_group: MCServiceSessionType = MCServiceSessionType.group; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary group
 * @constant
 * @type {number}
 */
export
const group: MCServiceSessionType = MCServiceSessionType.group; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_MCServiceSessionType: $.ASN1Decoder<MCServiceSessionType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MCServiceSessionType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MCServiceSessionType (el: _Element): MCServiceSessionType {
    if (!_cached_decoder_for_MCServiceSessionType) { _cached_decoder_for_MCServiceSessionType = $._decodeEnumerated; }
    return _cached_decoder_for_MCServiceSessionType(el);
}

let _cached_encoder_for_MCServiceSessionType: $.ASN1Encoder<MCServiceSessionType> | null = null;

/**
 * @summary Encodes a(n) MCServiceSessionType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MCServiceSessionType, encoded as an ASN.1 Element.
 */
export
function _encode_MCServiceSessionType (value: MCServiceSessionType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MCServiceSessionType) { _cached_encoder_for_MCServiceSessionType = $._encodeEnumerated; }
    return _cached_encoder_for_MCServiceSessionType(value, elGetter);
}


/* eslint-enable */
