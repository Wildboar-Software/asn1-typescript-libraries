/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { NULL, ASN1Element as _Element } from "@wildboar/asn1";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary AnswerCallResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AnswerCallResult  ::=  CHOICE
 * {    extensions             CSTACommonArguments,
 *     noData                 NULL }
 * ```
 */
export
type AnswerCallResult =
    { extensions: CSTACommonArguments } /* CHOICE_ALT_ROOT */
    | { noData: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_AnswerCallResult: $.ASN1Decoder<AnswerCallResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AnswerCallResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AnswerCallResult (el: _Element): AnswerCallResult {
    if (!_cached_decoder_for_AnswerCallResult) { _cached_decoder_for_AnswerCallResult = $._decode_inextensible_choice<AnswerCallResult>({
    "APPLICATION 30": [ "extensions", _decode_CSTACommonArguments ],
    "UNIVERSAL 5": [ "noData", $._decodeNull ]
}); }
    return _cached_decoder_for_AnswerCallResult(el);
}

let _cached_encoder_for_AnswerCallResult: $.ASN1Encoder<AnswerCallResult> | null = null;

/**
 * @summary Encodes a(n) AnswerCallResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AnswerCallResult, encoded as an ASN.1 Element.
 */
export
function _encode_AnswerCallResult (value: AnswerCallResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AnswerCallResult) { _cached_encoder_for_AnswerCallResult = $._encode_choice<AnswerCallResult>({
    "extensions": _encode_CSTACommonArguments,
    "noData": $._encodeNull,
}, $.BER); }
    return _cached_encoder_for_AnswerCallResult(value, elGetter);
}


/* eslint-enable */
