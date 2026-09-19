/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary UserKeyingMaterial
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UserKeyingMaterial  ::=  OCTET STRING
 * ```
 */
export
type UserKeyingMaterial = OCTET_STRING; // OctetStringType

let _cached_decoder_for_UserKeyingMaterial: $.ASN1Decoder<UserKeyingMaterial> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UserKeyingMaterial
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UserKeyingMaterial (el: _Element): UserKeyingMaterial {
    if (!_cached_decoder_for_UserKeyingMaterial) { _cached_decoder_for_UserKeyingMaterial = $._decodeOctetString; }
    return _cached_decoder_for_UserKeyingMaterial(el);
}

let _cached_encoder_for_UserKeyingMaterial: $.ASN1Encoder<UserKeyingMaterial> | null = null;

/**
 * @summary Encodes a(n) UserKeyingMaterial into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UserKeyingMaterial, encoded as an ASN.1 Element.
 */
export
function _encode_UserKeyingMaterial (value: UserKeyingMaterial, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UserKeyingMaterial) { _cached_encoder_for_UserKeyingMaterial = $._encodeOctetString; }
    return _cached_encoder_for_UserKeyingMaterial(value, elGetter);
}


/* eslint-enable */
