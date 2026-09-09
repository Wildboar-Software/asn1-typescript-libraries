/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { NULL, ASN1Element as _Element } from "@wildboar/asn1";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary ResumeResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ResumeResult  ::=  CHOICE
 * {    extensions            CSTACommonArguments,
 *     noData                NULL }
 * ```
 */
export
type ResumeResult =
    { extensions: CSTACommonArguments } /* CHOICE_ALT_ROOT */
    | { noData: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ResumeResult: $.ASN1Decoder<ResumeResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ResumeResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ResumeResult (el: _Element): ResumeResult {
    if (!_cached_decoder_for_ResumeResult) { _cached_decoder_for_ResumeResult = $._decode_inextensible_choice<ResumeResult>({
    "APPLICATION 30": [ "extensions", _decode_CSTACommonArguments ],
    "UNIVERSAL 5": [ "noData", $._decodeNull ]
}); }
    return _cached_decoder_for_ResumeResult(el);
}

let _cached_encoder_for_ResumeResult: $.ASN1Encoder<ResumeResult> | null = null;

/**
 * @summary Encodes a(n) ResumeResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ResumeResult, encoded as an ASN.1 Element.
 */
export
function _encode_ResumeResult (value: ResumeResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ResumeResult) { _cached_encoder_for_ResumeResult = $._encode_choice<ResumeResult>({
    "extensions": _encode_CSTACommonArguments,
    "noData": $._encodeNull,
}, $.BER); }
    return _cached_encoder_for_ResumeResult(value, elGetter);
}


/* eslint-enable */
