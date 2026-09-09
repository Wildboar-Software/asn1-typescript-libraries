/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { NULL, ASN1Element as _Element } from "@wildboar/asn1";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary ResumeDataPathResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ResumeDataPathResult  ::=  CHOICE
 * {    extensions            CSTACommonArguments,
 *     noData                NULL }
 * ```
 */
export
type ResumeDataPathResult =
    { extensions: CSTACommonArguments } /* CHOICE_ALT_ROOT */
    | { noData: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ResumeDataPathResult: $.ASN1Decoder<ResumeDataPathResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ResumeDataPathResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ResumeDataPathResult (el: _Element): ResumeDataPathResult {
    if (!_cached_decoder_for_ResumeDataPathResult) { _cached_decoder_for_ResumeDataPathResult = $._decode_inextensible_choice<ResumeDataPathResult>({
    "APPLICATION 30": [ "extensions", _decode_CSTACommonArguments ],
    "UNIVERSAL 5": [ "noData", $._decodeNull ]
}); }
    return _cached_decoder_for_ResumeDataPathResult(el);
}

let _cached_encoder_for_ResumeDataPathResult: $.ASN1Encoder<ResumeDataPathResult> | null = null;

/**
 * @summary Encodes a(n) ResumeDataPathResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ResumeDataPathResult, encoded as an ASN.1 Element.
 */
export
function _encode_ResumeDataPathResult (value: ResumeDataPathResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ResumeDataPathResult) { _cached_encoder_for_ResumeDataPathResult = $._encode_choice<ResumeDataPathResult>({
    "extensions": _encode_CSTACommonArguments,
    "noData": $._encodeNull,
}, $.BER); }
    return _cached_encoder_for_ResumeDataPathResult(value, elGetter);
}


/* eslint-enable */
