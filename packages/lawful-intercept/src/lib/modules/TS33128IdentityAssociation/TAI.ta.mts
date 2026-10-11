/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TAI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TAI  ::=  OCTET STRING (SIZE(6))
 * ```
 */
export
type TAI = OCTET_STRING; // OctetStringType

let _cached_decoder_for_TAI: $.ASN1Decoder<TAI> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TAI
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TAI (el: _Element): TAI {
    if (!_cached_decoder_for_TAI) { _cached_decoder_for_TAI = $._decodeOctetString; }
    return _cached_decoder_for_TAI(el);
}

let _cached_encoder_for_TAI: $.ASN1Encoder<TAI> | null = null;

/**
 * @summary Encodes a(n) TAI into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TAI, encoded as an ASN.1 Element.
 */
export
function _encode_TAI (value: TAI, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TAI) { _cached_encoder_for_TAI = $._encodeOctetString; }
    return _cached_encoder_for_TAI(value, elGetter);
}


/* eslint-enable */
