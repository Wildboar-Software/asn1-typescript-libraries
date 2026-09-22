/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Octet4
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Octet4  ::=  OCTET STRING (SIZE(4))
 * ```
 */
export
type Octet4 = OCTET_STRING; // OctetStringType

let _cached_decoder_for_Octet4: $.ASN1Decoder<Octet4> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Octet4
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Octet4 (el: _Element): Octet4 {
    if (!_cached_decoder_for_Octet4) { _cached_decoder_for_Octet4 = $._decodeOctetString; }
    return _cached_decoder_for_Octet4(el);
}

let _cached_encoder_for_Octet4: $.ASN1Encoder<Octet4> | null = null;

/**
 * @summary Encodes a(n) Octet4 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Octet4, encoded as an ASN.1 Element.
 */
export
function _encode_Octet4 (value: Octet4, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Octet4) { _cached_encoder_for_Octet4 = $._encodeOctetString; }
    return _cached_encoder_for_Octet4(value, elGetter);
}


/* eslint-enable */
