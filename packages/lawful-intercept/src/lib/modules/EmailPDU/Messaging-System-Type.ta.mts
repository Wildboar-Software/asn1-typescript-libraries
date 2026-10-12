/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_Messaging_System_Type {
    unified_messaging = 1,
}

/**
 * @summary Messaging_System_Type
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Messaging-System-Type  ::=  ENUMERATED
 * {
 *     unified-messaging(1),
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type Messaging_System_Type = _enum_for_Messaging_System_Type | ENUMERATED;

/**
 * @summary Messaging_System_Type_unified_messaging
 * @constant
 * @type {number}
 */
export
const Messaging_System_Type_unified_messaging: Messaging_System_Type = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unified_messaging
 * @constant
 * @type {number}
 */
export
const unified_messaging: Messaging_System_Type = Messaging_System_Type_unified_messaging; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_Messaging_System_Type: $.ASN1Decoder<Messaging_System_Type> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Messaging_System_Type
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Messaging_System_Type (el: _Element): Messaging_System_Type {
    if (!_cached_decoder_for_Messaging_System_Type) { _cached_decoder_for_Messaging_System_Type = $._decodeEnumerated; }
    return _cached_decoder_for_Messaging_System_Type(el);
}

let _cached_encoder_for_Messaging_System_Type: $.ASN1Encoder<Messaging_System_Type> | null = null;

/**
 * @summary Encodes a(n) Messaging_System_Type into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Messaging_System_Type, encoded as an ASN.1 Element.
 */
export
function _encode_Messaging_System_Type (value: Messaging_System_Type, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Messaging_System_Type) { _cached_encoder_for_Messaging_System_Type = $._encodeEnumerated; }
    return _cached_encoder_for_Messaging_System_Type(value, elGetter);
}


/* eslint-enable */
