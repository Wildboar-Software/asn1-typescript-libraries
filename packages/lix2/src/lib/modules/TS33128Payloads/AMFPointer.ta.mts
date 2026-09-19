/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AMFPointer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AMFPointer  ::=  INTEGER (0..63)
 * ```
 */
export
type AMFPointer = INTEGER;

let _cached_decoder_for_AMFPointer: $.ASN1Decoder<AMFPointer> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AMFPointer
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AMFPointer (el: _Element): AMFPointer {
    if (!_cached_decoder_for_AMFPointer) { _cached_decoder_for_AMFPointer = $._decodeInteger; }
    return _cached_decoder_for_AMFPointer(el);
}

let _cached_encoder_for_AMFPointer: $.ASN1Encoder<AMFPointer> | null = null;

/**
 * @summary Encodes a(n) AMFPointer into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AMFPointer, encoded as an ASN.1 Element.
 */
export
function _encode_AMFPointer (value: AMFPointer, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AMFPointer) { _cached_encoder_for_AMFPointer = $._encodeInteger; }
    return _cached_encoder_for_AMFPointer(value, elGetter);
}


/* eslint-enable */
