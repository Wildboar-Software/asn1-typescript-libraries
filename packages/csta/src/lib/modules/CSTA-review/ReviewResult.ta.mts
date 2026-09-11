/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { NULL, ASN1Element as _Element } from "@wildboar/asn1";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary ReviewResult
 * @description
 *
 * Positive acknowledgement is `extensions` or empty `noData` (atomic
 * acknowledgement model). (ECMA-269 §26.1.12.2.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReviewResult  ::=  CHOICE
 * {    extensions            CSTACommonArguments,
 *     noData                NULL }
 * ```
 */
export
type ReviewResult =
    { extensions: CSTACommonArguments } /* CHOICE_ALT_ROOT */
    | { noData: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ReviewResult: $.ASN1Decoder<ReviewResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReviewResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ReviewResult (el: _Element): ReviewResult {
    if (!_cached_decoder_for_ReviewResult) { _cached_decoder_for_ReviewResult = $._decode_inextensible_choice<ReviewResult>({
    "APPLICATION 30": [ "extensions", _decode_CSTACommonArguments ],
    "UNIVERSAL 5": [ "noData", $._decodeNull ]
}); }
    return _cached_decoder_for_ReviewResult(el);
}

let _cached_encoder_for_ReviewResult: $.ASN1Encoder<ReviewResult> | null = null;

/**
 * @summary Encodes a(n) ReviewResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReviewResult, encoded as an ASN.1 Element.
 */
export
function _encode_ReviewResult (value: ReviewResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ReviewResult) { _cached_encoder_for_ReviewResult = $._encode_choice<ReviewResult>({
    "extensions": _encode_CSTACommonArguments,
    "noData": $._encodeNull,
}, $.BER); }
    return _cached_encoder_for_ReviewResult(value, elGetter);
}


/* eslint-enable */
