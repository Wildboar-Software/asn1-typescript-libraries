/* eslint-disable */
import {
    ASN1Element as _Element,
    GeneralizedTime
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary KAFExpiryTime
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * KAFExpiryTime  ::=  GeneralizedTime
 * ```
 */
export
type KAFExpiryTime = GeneralizedTime; // GeneralizedTime

let _cached_decoder_for_KAFExpiryTime: $.ASN1Decoder<KAFExpiryTime> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) KAFExpiryTime
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_KAFExpiryTime (el: _Element): KAFExpiryTime {
    if (!_cached_decoder_for_KAFExpiryTime) { _cached_decoder_for_KAFExpiryTime = $._decodeGeneralizedTime; }
    return _cached_decoder_for_KAFExpiryTime(el);
}

let _cached_encoder_for_KAFExpiryTime: $.ASN1Encoder<KAFExpiryTime> | null = null;

/**
 * @summary Encodes a(n) KAFExpiryTime into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KAFExpiryTime, encoded as an ASN.1 Element.
 */
export
function _encode_KAFExpiryTime (value: KAFExpiryTime, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_KAFExpiryTime) { _cached_encoder_for_KAFExpiryTime = $._encodeGeneralizedTime; }
    return _cached_encoder_for_KAFExpiryTime(value, elGetter);
}


/* eslint-enable */
