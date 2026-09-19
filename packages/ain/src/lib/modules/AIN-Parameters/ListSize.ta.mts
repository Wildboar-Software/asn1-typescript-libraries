/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ListSize
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ListSize  ::=  INTEGER(1..32)
 * ```
 */
export
type ListSize = INTEGER;

let _cached_decoder_for_ListSize: $.ASN1Decoder<ListSize> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ListSize
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ListSize (el: _Element): ListSize {
    if (!_cached_decoder_for_ListSize) { _cached_decoder_for_ListSize = $._decodeInteger; }
    return _cached_decoder_for_ListSize(el);
}

let _cached_encoder_for_ListSize: $.ASN1Encoder<ListSize> | null = null;

/**
 * @summary Encodes a(n) ListSize into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ListSize, encoded as an ASN.1 Element.
 */
export
function _encode_ListSize (value: ListSize, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ListSize) { _cached_encoder_for_ListSize = $._encodeInteger; }
    return _cached_encoder_for_ListSize(value, elGetter);
}


/* eslint-enable */
