/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Octet16
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Octet16  ::=  OCTET STRING (SIZE(16))
 * ```
 */
export
type Octet16 = OCTET_STRING; // OctetStringType

let _cached_decoder_for_Octet16: $.ASN1Decoder<Octet16> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Octet16
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Octet16 (el: _Element): Octet16 {
    if (!_cached_decoder_for_Octet16) { _cached_decoder_for_Octet16 = $._decodeOctetString; }
    return _cached_decoder_for_Octet16(el);
}

let _cached_encoder_for_Octet16: $.ASN1Encoder<Octet16> | null = null;

/**
 * @summary Encodes a(n) Octet16 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Octet16, encoded as an ASN.1 Element.
 */
export
function _encode_Octet16 (value: Octet16, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Octet16) { _cached_encoder_for_Octet16 = $._encodeOctetString; }
    return _cached_encoder_for_Octet16(value, elGetter);
}


/* eslint-enable */
