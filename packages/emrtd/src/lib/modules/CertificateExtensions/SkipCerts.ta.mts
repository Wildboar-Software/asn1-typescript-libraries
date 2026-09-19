/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SkipCerts
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SkipCerts  ::=  INTEGER(0..MAX)
 * ```
 */
export
type SkipCerts = INTEGER;

let _cached_decoder_for_SkipCerts: $.ASN1Decoder<SkipCerts> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SkipCerts
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SkipCerts (el: _Element): SkipCerts {
    if (!_cached_decoder_for_SkipCerts) { _cached_decoder_for_SkipCerts = $._decodeInteger; }
    return _cached_decoder_for_SkipCerts(el);
}

let _cached_encoder_for_SkipCerts: $.ASN1Encoder<SkipCerts> | null = null;

/**
 * @summary Encodes a(n) SkipCerts into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SkipCerts, encoded as an ASN.1 Element.
 */
export
function _encode_SkipCerts (value: SkipCerts, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SkipCerts) { _cached_encoder_for_SkipCerts = $._encodeInteger; }
    return _cached_encoder_for_SkipCerts(value, elGetter);
}


/* eslint-enable */
