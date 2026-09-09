/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { NULL, ASN1Element as _Element } from "@wildboar/asn1";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary GenerateDigitsResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GenerateDigitsResult  ::=  CHOICE
 * {    extensions            CSTACommonArguments,
 *     noData                NULL }
 * ```
 */
export
type GenerateDigitsResult =
    { extensions: CSTACommonArguments } /* CHOICE_ALT_ROOT */
    | { noData: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_GenerateDigitsResult: $.ASN1Decoder<GenerateDigitsResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GenerateDigitsResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GenerateDigitsResult (el: _Element): GenerateDigitsResult {
    if (!_cached_decoder_for_GenerateDigitsResult) { _cached_decoder_for_GenerateDigitsResult = $._decode_inextensible_choice<GenerateDigitsResult>({
    "APPLICATION 30": [ "extensions", _decode_CSTACommonArguments ],
    "UNIVERSAL 5": [ "noData", $._decodeNull ]
}); }
    return _cached_decoder_for_GenerateDigitsResult(el);
}

let _cached_encoder_for_GenerateDigitsResult: $.ASN1Encoder<GenerateDigitsResult> | null = null;

/**
 * @summary Encodes a(n) GenerateDigitsResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GenerateDigitsResult, encoded as an ASN.1 Element.
 */
export
function _encode_GenerateDigitsResult (value: GenerateDigitsResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GenerateDigitsResult) { _cached_encoder_for_GenerateDigitsResult = $._encode_choice<GenerateDigitsResult>({
    "extensions": _encode_CSTACommonArguments,
    "noData": $._encodeNull,
}, $.BER); }
    return _cached_encoder_for_GenerateDigitsResult(value, elGetter);
}


/* eslint-enable */
