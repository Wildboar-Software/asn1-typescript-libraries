/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Microseconds
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Microseconds     ::=  INTEGER (0..999999)
 * ```
 */
export
type Microseconds = INTEGER;

let _cached_decoder_for_Microseconds: $.ASN1Decoder<Microseconds> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Microseconds
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Microseconds (el: _Element): Microseconds {
    if (!_cached_decoder_for_Microseconds) { _cached_decoder_for_Microseconds = $._decodeInteger; }
    return _cached_decoder_for_Microseconds(el);
}

let _cached_encoder_for_Microseconds: $.ASN1Encoder<Microseconds> | null = null;

/**
 * @summary Encodes a(n) Microseconds into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Microseconds, encoded as an ASN.1 Element.
 */
export
function _encode_Microseconds (value: Microseconds, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Microseconds) { _cached_encoder_for_Microseconds = $._encodeInteger; }
    return _cached_encoder_for_Microseconds(value, elGetter);
}


/* eslint-enable */
