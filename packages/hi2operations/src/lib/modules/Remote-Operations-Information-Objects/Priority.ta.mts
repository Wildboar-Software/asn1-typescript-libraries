/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Priority
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Priority  ::=  INTEGER(0..MAX)
 * ```
 */
export
type Priority = INTEGER;

let _cached_decoder_for_Priority: $.ASN1Decoder<Priority> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Priority
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Priority (el: _Element): Priority {
    if (!_cached_decoder_for_Priority) { _cached_decoder_for_Priority = $._decodeInteger; }
    return _cached_decoder_for_Priority(el);
}

let _cached_encoder_for_Priority: $.ASN1Encoder<Priority> | null = null;

/**
 * @summary Encodes a(n) Priority into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Priority, encoded as an ASN.1 Element.
 */
export
function _encode_Priority (value: Priority, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Priority) { _cached_encoder_for_Priority = $._encodeInteger; }
    return _cached_encoder_for_Priority(value, elGetter);
}


/* eslint-enable */
