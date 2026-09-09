/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { NULL, ASN1Element as _Element } from "@wildboar/asn1";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary SendUserInfoResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SendUserInfoResult  ::=  CHOICE
 * {    extensions            CSTACommonArguments,
 *     noData                NULL }
 * ```
 */
export
type SendUserInfoResult =
    { extensions: CSTACommonArguments } /* CHOICE_ALT_ROOT */
    | { noData: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_SendUserInfoResult: $.ASN1Decoder<SendUserInfoResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SendUserInfoResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SendUserInfoResult (el: _Element): SendUserInfoResult {
    if (!_cached_decoder_for_SendUserInfoResult) { _cached_decoder_for_SendUserInfoResult = $._decode_inextensible_choice<SendUserInfoResult>({
    "APPLICATION 30": [ "extensions", _decode_CSTACommonArguments ],
    "UNIVERSAL 5": [ "noData", $._decodeNull ]
}); }
    return _cached_decoder_for_SendUserInfoResult(el);
}

let _cached_encoder_for_SendUserInfoResult: $.ASN1Encoder<SendUserInfoResult> | null = null;

/**
 * @summary Encodes a(n) SendUserInfoResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SendUserInfoResult, encoded as an ASN.1 Element.
 */
export
function _encode_SendUserInfoResult (value: SendUserInfoResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SendUserInfoResult) { _cached_encoder_for_SendUserInfoResult = $._encode_choice<SendUserInfoResult>({
    "extensions": _encode_CSTACommonArguments,
    "noData": $._encodeNull,
}, $.BER); }
    return _cached_encoder_for_SendUserInfoResult(value, elGetter);
}


/* eslint-enable */
