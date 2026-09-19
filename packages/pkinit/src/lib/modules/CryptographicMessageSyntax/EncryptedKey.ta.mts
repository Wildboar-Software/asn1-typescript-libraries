/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EncryptedKey
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EncryptedKey  ::=  OCTET STRING
 * ```
 */
export
type EncryptedKey = OCTET_STRING; // OctetStringType

let _cached_decoder_for_EncryptedKey: $.ASN1Decoder<EncryptedKey> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EncryptedKey
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EncryptedKey (el: _Element): EncryptedKey {
    if (!_cached_decoder_for_EncryptedKey) { _cached_decoder_for_EncryptedKey = $._decodeOctetString; }
    return _cached_decoder_for_EncryptedKey(el);
}

let _cached_encoder_for_EncryptedKey: $.ASN1Encoder<EncryptedKey> | null = null;

/**
 * @summary Encodes a(n) EncryptedKey into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EncryptedKey, encoded as an ASN.1 Element.
 */
export
function _encode_EncryptedKey (value: EncryptedKey, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EncryptedKey) { _cached_encoder_for_EncryptedKey = $._encodeOctetString; }
    return _cached_encoder_for_EncryptedKey(value, elGetter);
}


/* eslint-enable */
