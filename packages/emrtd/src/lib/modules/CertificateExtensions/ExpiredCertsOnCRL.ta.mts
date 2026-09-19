/* eslint-disable */
import {
    ASN1Element as _Element,
    GeneralizedTime
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ExpiredCertsOnCRL
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ExpiredCertsOnCRL  ::=  GeneralizedTime
 * ```
 */
export
type ExpiredCertsOnCRL = GeneralizedTime; // GeneralizedTime

let _cached_decoder_for_ExpiredCertsOnCRL: $.ASN1Decoder<ExpiredCertsOnCRL> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ExpiredCertsOnCRL
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ExpiredCertsOnCRL (el: _Element): ExpiredCertsOnCRL {
    if (!_cached_decoder_for_ExpiredCertsOnCRL) { _cached_decoder_for_ExpiredCertsOnCRL = $._decodeGeneralizedTime; }
    return _cached_decoder_for_ExpiredCertsOnCRL(el);
}

let _cached_encoder_for_ExpiredCertsOnCRL: $.ASN1Encoder<ExpiredCertsOnCRL> | null = null;

/**
 * @summary Encodes a(n) ExpiredCertsOnCRL into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExpiredCertsOnCRL, encoded as an ASN.1 Element.
 */
export
function _encode_ExpiredCertsOnCRL (value: ExpiredCertsOnCRL, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ExpiredCertsOnCRL) { _cached_encoder_for_ExpiredCertsOnCRL = $._encodeGeneralizedTime; }
    return _cached_encoder_for_ExpiredCertsOnCRL(value, elGetter);
}


/* eslint-enable */
