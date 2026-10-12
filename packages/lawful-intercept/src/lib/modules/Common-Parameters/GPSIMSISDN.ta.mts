/* eslint-disable */
import {
    ASN1Element as _Element,
    NumericString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary GPSIMSISDN
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GPSIMSISDN  ::=  NumericString (SIZE(1..15))
 * ```
 */
export
type GPSIMSISDN = NumericString; // NumericString

let _cached_decoder_for_GPSIMSISDN: $.ASN1Decoder<GPSIMSISDN> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GPSIMSISDN
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GPSIMSISDN (el: _Element): GPSIMSISDN {
    if (!_cached_decoder_for_GPSIMSISDN) { _cached_decoder_for_GPSIMSISDN = $._decodeNumericString; }
    return _cached_decoder_for_GPSIMSISDN(el);
}

let _cached_encoder_for_GPSIMSISDN: $.ASN1Encoder<GPSIMSISDN> | null = null;

/**
 * @summary Encodes a(n) GPSIMSISDN into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GPSIMSISDN, encoded as an ASN.1 Element.
 */
export
function _encode_GPSIMSISDN (value: GPSIMSISDN, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GPSIMSISDN) { _cached_encoder_for_GPSIMSISDN = $._encodeNumericString; }
    return _cached_encoder_for_GPSIMSISDN(value, elGetter);
}


/* eslint-enable */
