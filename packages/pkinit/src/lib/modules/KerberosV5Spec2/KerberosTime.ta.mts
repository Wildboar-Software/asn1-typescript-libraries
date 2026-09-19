/* eslint-disable */
import {
    ASN1Element as _Element,
    GeneralizedTime
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary KerberosTime
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * KerberosTime     ::=  GeneralizedTime
 * ```
 */
export
type KerberosTime = GeneralizedTime; // GeneralizedTime

let _cached_decoder_for_KerberosTime: $.ASN1Decoder<KerberosTime> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) KerberosTime
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_KerberosTime (el: _Element): KerberosTime {
    if (!_cached_decoder_for_KerberosTime) { _cached_decoder_for_KerberosTime = $._decodeGeneralizedTime; }
    return _cached_decoder_for_KerberosTime(el);
}

let _cached_encoder_for_KerberosTime: $.ASN1Encoder<KerberosTime> | null = null;

/**
 * @summary Encodes a(n) KerberosTime into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KerberosTime, encoded as an ASN.1 Element.
 */
export
function _encode_KerberosTime (value: KerberosTime, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_KerberosTime) { _cached_encoder_for_KerberosTime = $._encodeGeneralizedTime; }
    return _cached_encoder_for_KerberosTime(value, elGetter);
}


/* eslint-enable */
