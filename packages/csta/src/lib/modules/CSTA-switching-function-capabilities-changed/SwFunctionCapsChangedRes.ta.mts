/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { NULL, ASN1Element as _Element } from "@wildboar/asn1";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary SwFunctionCapsChangedRes
 * @description
 *
 * Positive ack (Table 14-15). Typically only extensions.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SwFunctionCapsChangedRes  ::=  CHOICE
 * {     extensions             CSTACommonArguments,
 *     noData                 NULL }
 * ```
 */
export
type SwFunctionCapsChangedRes =
    { extensions: CSTACommonArguments } /* CHOICE_ALT_ROOT */
    | { noData: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_SwFunctionCapsChangedRes: $.ASN1Decoder<SwFunctionCapsChangedRes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SwFunctionCapsChangedRes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SwFunctionCapsChangedRes (el: _Element): SwFunctionCapsChangedRes {
    if (!_cached_decoder_for_SwFunctionCapsChangedRes) { _cached_decoder_for_SwFunctionCapsChangedRes = $._decode_inextensible_choice<SwFunctionCapsChangedRes>({
    "APPLICATION 30": [ "extensions", _decode_CSTACommonArguments ],
    "UNIVERSAL 5": [ "noData", $._decodeNull ]
}); }
    return _cached_decoder_for_SwFunctionCapsChangedRes(el);
}

let _cached_encoder_for_SwFunctionCapsChangedRes: $.ASN1Encoder<SwFunctionCapsChangedRes> | null = null;

/**
 * @summary Encodes a(n) SwFunctionCapsChangedRes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SwFunctionCapsChangedRes, encoded as an ASN.1 Element.
 */
export
function _encode_SwFunctionCapsChangedRes (value: SwFunctionCapsChangedRes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SwFunctionCapsChangedRes) { _cached_encoder_for_SwFunctionCapsChangedRes = $._encode_choice<SwFunctionCapsChangedRes>({
    "extensions": _encode_CSTACommonArguments,
    "noData": $._encodeNull,
}, $.BER); }
    return _cached_encoder_for_SwFunctionCapsChangedRes(value, elGetter);
}


/* eslint-enable */
