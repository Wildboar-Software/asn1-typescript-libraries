/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AES_IV
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AES-IV  ::=  OCTET STRING (SIZE(16))
 * ```
 */
export
type AES_IV = OCTET_STRING; // OctetStringType

let _cached_decoder_for_AES_IV: $.ASN1Decoder<AES_IV> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AES_IV
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AES_IV (el: _Element): AES_IV {
    if (!_cached_decoder_for_AES_IV) { _cached_decoder_for_AES_IV = $._decodeOctetString; }
    return _cached_decoder_for_AES_IV(el);
}

let _cached_encoder_for_AES_IV: $.ASN1Encoder<AES_IV> | null = null;

/**
 * @summary Encodes a(n) AES_IV into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AES_IV, encoded as an ASN.1 Element.
 */
export
function _encode_AES_IV (value: AES_IV, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AES_IV) { _cached_encoder_for_AES_IV = $._encodeOctetString; }
    return _cached_encoder_for_AES_IV(value, elGetter);
}


/* eslint-enable */
