/* eslint-disable */
import {
    ASN1Element as _Element,
    NumericString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IMEI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IMEI  ::=  NumericString (SIZE(14))
 * ```
 */
export
type IMEI = NumericString; // NumericString

let _cached_decoder_for_IMEI: $.ASN1Decoder<IMEI> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IMEI
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IMEI (el: _Element): IMEI {
    if (!_cached_decoder_for_IMEI) { _cached_decoder_for_IMEI = $._decodeNumericString; }
    return _cached_decoder_for_IMEI(el);
}

let _cached_encoder_for_IMEI: $.ASN1Encoder<IMEI> | null = null;

/**
 * @summary Encodes a(n) IMEI into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IMEI, encoded as an ASN.1 Element.
 */
export
function _encode_IMEI (value: IMEI, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IMEI) { _cached_encoder_for_IMEI = $._encodeNumericString; }
    return _cached_encoder_for_IMEI(value, elGetter);
}


/* eslint-enable */
