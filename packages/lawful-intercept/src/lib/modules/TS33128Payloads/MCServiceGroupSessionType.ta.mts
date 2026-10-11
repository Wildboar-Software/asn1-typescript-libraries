/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MCServiceGroupSessionType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MCServiceGroupSessionType  ::=  ENUMERATED
 * {
 *     chat(1),
 *     preArranged(2),
 *     adHoc(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_MCServiceGroupSessionType {
    chat = 1,
    preArranged = 2,
    adHoc = 3,
}

/**
 * @summary MCServiceGroupSessionType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MCServiceGroupSessionType  ::=  ENUMERATED
 * {
 *     chat(1),
 *     preArranged(2),
 *     adHoc(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type MCServiceGroupSessionType = _enum_for_MCServiceGroupSessionType;

/**
 * @summary MCServiceGroupSessionType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MCServiceGroupSessionType  ::=  ENUMERATED
 * {
 *     chat(1),
 *     preArranged(2),
 *     adHoc(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const MCServiceGroupSessionType = _enum_for_MCServiceGroupSessionType;

/**
 * @summary MCServiceGroupSessionType_chat
 * @constant
 * @type {number}
 */
export
const MCServiceGroupSessionType_chat: MCServiceGroupSessionType = MCServiceGroupSessionType.chat; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary chat
 * @constant
 * @type {number}
 */
export
const chat: MCServiceGroupSessionType = MCServiceGroupSessionType.chat; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MCServiceGroupSessionType_preArranged
 * @constant
 * @type {number}
 */
export
const MCServiceGroupSessionType_preArranged: MCServiceGroupSessionType = MCServiceGroupSessionType.preArranged; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary preArranged
 * @constant
 * @type {number}
 */
export
const preArranged: MCServiceGroupSessionType = MCServiceGroupSessionType.preArranged; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MCServiceGroupSessionType_adHoc
 * @constant
 * @type {number}
 */
export
const MCServiceGroupSessionType_adHoc: MCServiceGroupSessionType = MCServiceGroupSessionType.adHoc; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary adHoc
 * @constant
 * @type {number}
 */
export
const adHoc: MCServiceGroupSessionType = MCServiceGroupSessionType.adHoc; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_MCServiceGroupSessionType: $.ASN1Decoder<MCServiceGroupSessionType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MCServiceGroupSessionType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MCServiceGroupSessionType (el: _Element): MCServiceGroupSessionType {
    if (!_cached_decoder_for_MCServiceGroupSessionType) { _cached_decoder_for_MCServiceGroupSessionType = $._decodeEnumerated; }
    return _cached_decoder_for_MCServiceGroupSessionType(el);
}

let _cached_encoder_for_MCServiceGroupSessionType: $.ASN1Encoder<MCServiceGroupSessionType> | null = null;

/**
 * @summary Encodes a(n) MCServiceGroupSessionType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MCServiceGroupSessionType, encoded as an ASN.1 Element.
 */
export
function _encode_MCServiceGroupSessionType (value: MCServiceGroupSessionType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MCServiceGroupSessionType) { _cached_encoder_for_MCServiceGroupSessionType = $._encodeEnumerated; }
    return _cached_encoder_for_MCServiceGroupSessionType(value, elGetter);
}


/* eslint-enable */
