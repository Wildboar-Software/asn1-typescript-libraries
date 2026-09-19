/* eslint-disable */
import {
    ASN1Element as _Element,
    NumericString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IMSI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IMSI  ::=  NumericString (SIZE(6..15))
 * ```
 */
export
type IMSI = NumericString; // NumericString

let _cached_decoder_for_IMSI: $.ASN1Decoder<IMSI> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IMSI
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IMSI (el: _Element): IMSI {
    if (!_cached_decoder_for_IMSI) { _cached_decoder_for_IMSI = $._decodeNumericString; }
    return _cached_decoder_for_IMSI(el);
}

let _cached_encoder_for_IMSI: $.ASN1Encoder<IMSI> | null = null;

/**
 * @summary Encodes a(n) IMSI into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IMSI, encoded as an ASN.1 Element.
 */
export
function _encode_IMSI (value: IMSI, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IMSI) { _cached_encoder_for_IMSI = $._encodeNumericString; }
    return _cached_encoder_for_IMSI(value, elGetter);
}


/* eslint-enable */
