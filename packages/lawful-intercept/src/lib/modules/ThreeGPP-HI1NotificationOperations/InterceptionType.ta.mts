/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_InterceptionType {
    voiceIriCc = 0,
    voiceIriOnly = 1,
    dataIriCc = 2,
    dataIriOnly = 3,
    voiceAndDataIriCc = 4,
    voiceAndDataIriOnly = 5,
}

/**
 * @summary InterceptionType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InterceptionType  ::=  ENUMERATED
 * {
 *       voiceIriCc(0),
 *       voiceIriOnly(1),
 *       dataIriCc(2),
 *       dataIriOnly(3),
 *       voiceAndDataIriCc(4),
 *       voiceAndDataIriOnly(5),
 * ...}
 * ```
 * 
 * @enum {number}
 */
export
type InterceptionType = _enum_for_InterceptionType | ENUMERATED;

/**
 * @summary InterceptionType_voiceIriCc
 * @constant
 * @type {number}
 */
export
const InterceptionType_voiceIriCc: InterceptionType = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary voiceIriCc
 * @constant
 * @type {number}
 */
export
const voiceIriCc: InterceptionType = InterceptionType_voiceIriCc; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary InterceptionType_voiceIriOnly
 * @constant
 * @type {number}
 */
export
const InterceptionType_voiceIriOnly: InterceptionType = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary voiceIriOnly
 * @constant
 * @type {number}
 */
export
const voiceIriOnly: InterceptionType = InterceptionType_voiceIriOnly; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary InterceptionType_dataIriCc
 * @constant
 * @type {number}
 */
export
const InterceptionType_dataIriCc: InterceptionType = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dataIriCc
 * @constant
 * @type {number}
 */
export
const dataIriCc: InterceptionType = InterceptionType_dataIriCc; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary InterceptionType_dataIriOnly
 * @constant
 * @type {number}
 */
export
const InterceptionType_dataIriOnly: InterceptionType = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dataIriOnly
 * @constant
 * @type {number}
 */
export
const dataIriOnly: InterceptionType = InterceptionType_dataIriOnly; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary InterceptionType_voiceAndDataIriCc
 * @constant
 * @type {number}
 */
export
const InterceptionType_voiceAndDataIriCc: InterceptionType = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary voiceAndDataIriCc
 * @constant
 * @type {number}
 */
export
const voiceAndDataIriCc: InterceptionType = InterceptionType_voiceAndDataIriCc; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary InterceptionType_voiceAndDataIriOnly
 * @constant
 * @type {number}
 */
export
const InterceptionType_voiceAndDataIriOnly: InterceptionType = 5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary voiceAndDataIriOnly
 * @constant
 * @type {number}
 */
export
const voiceAndDataIriOnly: InterceptionType = InterceptionType_voiceAndDataIriOnly; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_InterceptionType: $.ASN1Decoder<InterceptionType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) InterceptionType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_InterceptionType (el: _Element): InterceptionType {
    if (!_cached_decoder_for_InterceptionType) { _cached_decoder_for_InterceptionType = $._decodeEnumerated; }
    return _cached_decoder_for_InterceptionType(el);
}

let _cached_encoder_for_InterceptionType: $.ASN1Encoder<InterceptionType> | null = null;

/**
 * @summary Encodes a(n) InterceptionType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InterceptionType, encoded as an ASN.1 Element.
 */
export
function _encode_InterceptionType (value: InterceptionType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_InterceptionType) { _cached_encoder_for_InterceptionType = $._encodeEnumerated; }
    return _cached_encoder_for_InterceptionType(value, elGetter);
}


/* eslint-enable */
