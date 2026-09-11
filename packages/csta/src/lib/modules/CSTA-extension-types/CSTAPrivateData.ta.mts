/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { OCTET_STRING, NULL, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary CSTAPrivateData
 * @description
 *
 * Non-standard parameters in CSTA messages (ECMA-269 §12.2.11;
 * ECMA-285 §9.8). Max string length from capabilities exchange.
 *
 * - `string_`: opaque octet string.
 * - `private_`: ASN.1 `NULL` placeholder; an implementation replaces
 *   it with another valid ASN.1 type.
 *
 * If unrecognised, discard this parameter and process the rest of
 * the message (ECMA-285 §5.5).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CSTAPrivateData  ::=  CHOICE
 * {     string             OCTET STRING,
 *     private         NULL }
 * ```
 */
export
type CSTAPrivateData =
    { string_: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { private_: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_CSTAPrivateData: $.ASN1Decoder<CSTAPrivateData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CSTAPrivateData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CSTAPrivateData (el: _Element): CSTAPrivateData {
    if (!_cached_decoder_for_CSTAPrivateData) { _cached_decoder_for_CSTAPrivateData = $._decode_inextensible_choice<CSTAPrivateData>({
    "UNIVERSAL 4": [ "string_", $._decodeOctetString ],
    "UNIVERSAL 5": [ "private_", $._decodeNull ]
}); }
    return _cached_decoder_for_CSTAPrivateData(el);
}

let _cached_encoder_for_CSTAPrivateData: $.ASN1Encoder<CSTAPrivateData> | null = null;

/**
 * @summary Encodes a(n) CSTAPrivateData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CSTAPrivateData, encoded as an ASN.1 Element.
 */
export
function _encode_CSTAPrivateData (value: CSTAPrivateData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CSTAPrivateData) { _cached_encoder_for_CSTAPrivateData = $._encode_choice<CSTAPrivateData>({
    "string_": $._encodeOctetString,
    "private_": $._encodeNull,
}, $.BER); }
    return _cached_encoder_for_CSTAPrivateData(value, elGetter);
}


/* eslint-enable */
