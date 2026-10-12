/* eslint-disable */
import {
    ASN1Element as _Element,
    NumericString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MMEC
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMEC  ::=  NumericString
 * ```
 */
export
type MMEC = NumericString; // NumericString

let _cached_decoder_for_MMEC: $.ASN1Decoder<MMEC> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MMEC
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MMEC (el: _Element): MMEC {
    if (!_cached_decoder_for_MMEC) { _cached_decoder_for_MMEC = $._decodeNumericString; }
    return _cached_decoder_for_MMEC(el);
}

let _cached_encoder_for_MMEC: $.ASN1Encoder<MMEC> | null = null;

/**
 * @summary Encodes a(n) MMEC into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMEC, encoded as an ASN.1 Element.
 */
export
function _encode_MMEC (value: MMEC, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MMEC) { _cached_encoder_for_MMEC = $._encodeNumericString; }
    return _cached_encoder_for_MMEC(value, elGetter);
}


/* eslint-enable */
