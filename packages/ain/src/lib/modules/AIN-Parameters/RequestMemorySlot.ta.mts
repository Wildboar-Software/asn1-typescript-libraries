/* eslint-disable */
import {
    ASN1Element as _Element,
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RequestMemorySlot
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RequestMemorySlot  ::=  BIT STRING{
 *         incoming(0),
 *         outgoing(1)
 *     }
 * ```
 */
export
type RequestMemorySlot = BIT_STRING;

/**
 * @summary RequestMemorySlot_incoming
 * @constant
 */
export
const RequestMemorySlot_incoming: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary incoming
 * @constant
 */
export
const incoming: number = RequestMemorySlot_incoming; /* SHORT_NAMED_BIT */

/**
 * @summary RequestMemorySlot_outgoing
 * @constant
 */
export
const RequestMemorySlot_outgoing: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary outgoing
 * @constant
 */
export
const outgoing: number = RequestMemorySlot_outgoing; /* SHORT_NAMED_BIT */

let _cached_decoder_for_RequestMemorySlot: $.ASN1Decoder<RequestMemorySlot> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RequestMemorySlot
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RequestMemorySlot (el: _Element): RequestMemorySlot {
    if (!_cached_decoder_for_RequestMemorySlot) { _cached_decoder_for_RequestMemorySlot = $._decodeBitString; }
    return _cached_decoder_for_RequestMemorySlot(el);
}

let _cached_encoder_for_RequestMemorySlot: $.ASN1Encoder<RequestMemorySlot> | null = null;

/**
 * @summary Encodes a(n) RequestMemorySlot into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RequestMemorySlot, encoded as an ASN.1 Element.
 */
export
function _encode_RequestMemorySlot (value: RequestMemorySlot, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RequestMemorySlot) { _cached_encoder_for_RequestMemorySlot = $._encodeBitString; }
    return _cached_encoder_for_RequestMemorySlot(value, elGetter);
}


/* eslint-enable */
