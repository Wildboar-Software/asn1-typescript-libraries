/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { NULL, ASN1Element as _Element } from "@wildboar/asn1";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary SetAutoAnswerResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SetAutoAnswerResult  ::=  CHOICE
 * {    extensions             CSTACommonArguments,
 *     noData                 NULL }
 * ```
 */
export
type SetAutoAnswerResult =
    { extensions: CSTACommonArguments } /* CHOICE_ALT_ROOT */
    | { noData: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_SetAutoAnswerResult: $.ASN1Decoder<SetAutoAnswerResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SetAutoAnswerResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SetAutoAnswerResult (el: _Element): SetAutoAnswerResult {
    if (!_cached_decoder_for_SetAutoAnswerResult) { _cached_decoder_for_SetAutoAnswerResult = $._decode_inextensible_choice<SetAutoAnswerResult>({
    "APPLICATION 30": [ "extensions", _decode_CSTACommonArguments ],
    "UNIVERSAL 5": [ "noData", $._decodeNull ]
}); }
    return _cached_decoder_for_SetAutoAnswerResult(el);
}

let _cached_encoder_for_SetAutoAnswerResult: $.ASN1Encoder<SetAutoAnswerResult> | null = null;

/**
 * @summary Encodes a(n) SetAutoAnswerResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SetAutoAnswerResult, encoded as an ASN.1 Element.
 */
export
function _encode_SetAutoAnswerResult (value: SetAutoAnswerResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SetAutoAnswerResult) { _cached_encoder_for_SetAutoAnswerResult = $._encode_choice<SetAutoAnswerResult>({
    "extensions": _encode_CSTACommonArguments,
    "noData": $._encodeNull,
}, $.BER); }
    return _cached_encoder_for_SetAutoAnswerResult(value, elGetter);
}


/* eslint-enable */
