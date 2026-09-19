/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CurrencyFactor
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CurrencyFactor  ::=  INTEGER (0..999999)
 * ```
 */
export
type CurrencyFactor = INTEGER;

let _cached_decoder_for_CurrencyFactor: $.ASN1Decoder<CurrencyFactor> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CurrencyFactor
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CurrencyFactor (el: _Element): CurrencyFactor {
    if (!_cached_decoder_for_CurrencyFactor) { _cached_decoder_for_CurrencyFactor = $._decodeInteger; }
    return _cached_decoder_for_CurrencyFactor(el);
}

let _cached_encoder_for_CurrencyFactor: $.ASN1Encoder<CurrencyFactor> | null = null;

/**
 * @summary Encodes a(n) CurrencyFactor into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CurrencyFactor, encoded as an ASN.1 Element.
 */
export
function _encode_CurrencyFactor (value: CurrencyFactor, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CurrencyFactor) { _cached_encoder_for_CurrencyFactor = $._encodeInteger; }
    return _cached_encoder_for_CurrencyFactor(value, elGetter);
}


/* eslint-enable */
