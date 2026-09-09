/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { OCTET_STRING, NULL, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary SecurityInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SecurityInfo  ::=  CHOICE
 * {     string             OCTET STRING,
 *     private         NULL }
 * ```
 */
export
type SecurityInfo =
    { string_: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { private_: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_SecurityInfo: $.ASN1Decoder<SecurityInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SecurityInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SecurityInfo (el: _Element): SecurityInfo {
    if (!_cached_decoder_for_SecurityInfo) { _cached_decoder_for_SecurityInfo = $._decode_inextensible_choice<SecurityInfo>({
    "UNIVERSAL 4": [ "string_", $._decodeOctetString ],
    "UNIVERSAL 5": [ "private_", $._decodeNull ]
}); }
    return _cached_decoder_for_SecurityInfo(el);
}

let _cached_encoder_for_SecurityInfo: $.ASN1Encoder<SecurityInfo> | null = null;

/**
 * @summary Encodes a(n) SecurityInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SecurityInfo, encoded as an ASN.1 Element.
 */
export
function _encode_SecurityInfo (value: SecurityInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SecurityInfo) { _cached_encoder_for_SecurityInfo = $._encode_choice<SecurityInfo>({
    "string_": $._encodeOctetString,
    "private_": $._encodeNull,
}, $.BER); }
    return _cached_encoder_for_SecurityInfo(value, elGetter);
}


/* eslint-enable */
