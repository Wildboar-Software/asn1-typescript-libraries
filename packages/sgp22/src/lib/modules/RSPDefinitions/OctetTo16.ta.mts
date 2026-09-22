/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary OctetTo16
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OctetTo16  ::=  OCTET STRING (SIZE(1..16))
 * ```
 */
export
type OctetTo16 = OCTET_STRING; // OctetStringType

let _cached_decoder_for_OctetTo16: $.ASN1Decoder<OctetTo16> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OctetTo16
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_OctetTo16 (el: _Element): OctetTo16 {
    if (!_cached_decoder_for_OctetTo16) { _cached_decoder_for_OctetTo16 = $._decodeOctetString; }
    return _cached_decoder_for_OctetTo16(el);
}

let _cached_encoder_for_OctetTo16: $.ASN1Encoder<OctetTo16> | null = null;

/**
 * @summary Encodes a(n) OctetTo16 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OctetTo16, encoded as an ASN.1 Element.
 */
export
function _encode_OctetTo16 (value: OctetTo16, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_OctetTo16) { _cached_encoder_for_OctetTo16 = $._encodeOctetString; }
    return _cached_encoder_for_OctetTo16(value, elGetter);
}


/* eslint-enable */
