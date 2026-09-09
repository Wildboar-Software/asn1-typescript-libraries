/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { NULL, ASN1Element as _Element } from "@wildboar/asn1";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary DialDigitsResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DialDigitsResult  ::=  CHOICE
 * {    extensions             CSTACommonArguments,
 *     noData                 NULL }
 * ```
 */
export
type DialDigitsResult =
    { extensions: CSTACommonArguments } /* CHOICE_ALT_ROOT */
    | { noData: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_DialDigitsResult: $.ASN1Decoder<DialDigitsResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DialDigitsResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DialDigitsResult (el: _Element): DialDigitsResult {
    if (!_cached_decoder_for_DialDigitsResult) { _cached_decoder_for_DialDigitsResult = $._decode_inextensible_choice<DialDigitsResult>({
    "APPLICATION 30": [ "extensions", _decode_CSTACommonArguments ],
    "UNIVERSAL 5": [ "noData", $._decodeNull ]
}); }
    return _cached_decoder_for_DialDigitsResult(el);
}

let _cached_encoder_for_DialDigitsResult: $.ASN1Encoder<DialDigitsResult> | null = null;

/**
 * @summary Encodes a(n) DialDigitsResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DialDigitsResult, encoded as an ASN.1 Element.
 */
export
function _encode_DialDigitsResult (value: DialDigitsResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DialDigitsResult) { _cached_encoder_for_DialDigitsResult = $._encode_choice<DialDigitsResult>({
    "extensions": _encode_CSTACommonArguments,
    "noData": $._encodeNull,
}, $.BER); }
    return _cached_encoder_for_DialDigitsResult(value, elGetter);
}


/* eslint-enable */
