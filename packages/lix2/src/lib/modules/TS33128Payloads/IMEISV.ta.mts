/* eslint-disable */
import {
    ASN1Element as _Element,
    NumericString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IMEISV
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IMEISV  ::=  NumericString (SIZE(16))
 * ```
 */
export
type IMEISV = NumericString; // NumericString

let _cached_decoder_for_IMEISV: $.ASN1Decoder<IMEISV> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IMEISV
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IMEISV (el: _Element): IMEISV {
    if (!_cached_decoder_for_IMEISV) { _cached_decoder_for_IMEISV = $._decodeNumericString; }
    return _cached_decoder_for_IMEISV(el);
}

let _cached_encoder_for_IMEISV: $.ASN1Encoder<IMEISV> | null = null;

/**
 * @summary Encodes a(n) IMEISV into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IMEISV, encoded as an ASN.1 Element.
 */
export
function _encode_IMEISV (value: IMEISV, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IMEISV) { _cached_encoder_for_IMEISV = $._encodeNumericString; }
    return _cached_encoder_for_IMEISV(value, elGetter);
}


/* eslint-enable */
