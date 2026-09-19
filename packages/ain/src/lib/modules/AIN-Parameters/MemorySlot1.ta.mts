/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MemorySlot1
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MemorySlot1  ::=  ENUMERATED{
 *         incoming(0)
 *     }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_MemorySlot1 {
    incoming = 0,
}

/**
 * @summary MemorySlot1
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MemorySlot1  ::=  ENUMERATED{
 *         incoming(0)
 *     }
 * ```
 * 
 * @enum {number}
 */
export
type MemorySlot1 = _enum_for_MemorySlot1;

/**
 * @summary MemorySlot1
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MemorySlot1  ::=  ENUMERATED{
 *         incoming(0)
 *     }
 * ```
 * 
 * @enum {number}
 */
export
const MemorySlot1 = _enum_for_MemorySlot1;

/**
 * @summary MemorySlot1_incoming
 * @constant
 * @type {number}
 */
export
const MemorySlot1_incoming: MemorySlot1 = MemorySlot1.incoming; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary incoming
 * @constant
 * @type {number}
 */
export
const incoming: MemorySlot1 = MemorySlot1.incoming; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_MemorySlot1: $.ASN1Decoder<MemorySlot1> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MemorySlot1
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MemorySlot1 (el: _Element): MemorySlot1 {
    if (!_cached_decoder_for_MemorySlot1) { _cached_decoder_for_MemorySlot1 = $._decodeEnumerated; }
    return _cached_decoder_for_MemorySlot1(el);
}

let _cached_encoder_for_MemorySlot1: $.ASN1Encoder<MemorySlot1> | null = null;

/**
 * @summary Encodes a(n) MemorySlot1 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MemorySlot1, encoded as an ASN.1 Element.
 */
export
function _encode_MemorySlot1 (value: MemorySlot1, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MemorySlot1) { _cached_encoder_for_MemorySlot1 = $._encodeEnumerated; }
    return _cached_encoder_for_MemorySlot1(value, elGetter);
}


/* eslint-enable */
