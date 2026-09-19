/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Currency
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Currency  ::=  INTEGER (1..999)
 * ```
 */
export
type Currency = INTEGER;

let _cached_decoder_for_Currency: $.ASN1Decoder<Currency> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Currency
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Currency (el: _Element): Currency {
    if (!_cached_decoder_for_Currency) { _cached_decoder_for_Currency = $._decodeInteger; }
    return _cached_decoder_for_Currency(el);
}

let _cached_encoder_for_Currency: $.ASN1Encoder<Currency> | null = null;

/**
 * @summary Encodes a(n) Currency into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Currency, encoded as an ASN.1 Element.
 */
export
function _encode_Currency (value: Currency, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Currency) { _cached_encoder_for_Currency = $._encodeInteger; }
    return _cached_encoder_for_Currency(value, elGetter);
}


/* eslint-enable */
