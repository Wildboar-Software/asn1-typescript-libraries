/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { NULL, ASN1Element as _Element } from "@wildboar/asn1";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary RepositionResult
 * @description
 *
 * Positive acknowledgement is `extensions` or empty `noData` (atomic
 * acknowledgement model). (ECMA-269 §26.1.10.2.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RepositionResult  ::=  CHOICE
 * {    extensions            CSTACommonArguments,
 *     noData                NULL }
 * ```
 */
export
type RepositionResult =
    { extensions: CSTACommonArguments } /* CHOICE_ALT_ROOT */
    | { noData: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_RepositionResult: $.ASN1Decoder<RepositionResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RepositionResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RepositionResult (el: _Element): RepositionResult {
    if (!_cached_decoder_for_RepositionResult) { _cached_decoder_for_RepositionResult = $._decode_inextensible_choice<RepositionResult>({
    "APPLICATION 30": [ "extensions", _decode_CSTACommonArguments ],
    "UNIVERSAL 5": [ "noData", $._decodeNull ]
}); }
    return _cached_decoder_for_RepositionResult(el);
}

let _cached_encoder_for_RepositionResult: $.ASN1Encoder<RepositionResult> | null = null;

/**
 * @summary Encodes a(n) RepositionResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RepositionResult, encoded as an ASN.1 Element.
 */
export
function _encode_RepositionResult (value: RepositionResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RepositionResult) { _cached_encoder_for_RepositionResult = $._encode_choice<RepositionResult>({
    "extensions": _encode_CSTACommonArguments,
    "noData": $._encodeNull,
}, $.BER); }
    return _cached_encoder_for_RepositionResult(value, elGetter);
}


/* eslint-enable */
