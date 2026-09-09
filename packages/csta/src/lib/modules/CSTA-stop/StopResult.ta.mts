/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { NULL, ASN1Element as _Element } from "@wildboar/asn1";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary StopResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StopResult  ::=  CHOICE
 * {    extensions            CSTACommonArguments,
 *     noData                NULL }
 * ```
 */
export
type StopResult =
    { extensions: CSTACommonArguments } /* CHOICE_ALT_ROOT */
    | { noData: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_StopResult: $.ASN1Decoder<StopResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) StopResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_StopResult (el: _Element): StopResult {
    if (!_cached_decoder_for_StopResult) { _cached_decoder_for_StopResult = $._decode_inextensible_choice<StopResult>({
    "APPLICATION 30": [ "extensions", _decode_CSTACommonArguments ],
    "UNIVERSAL 5": [ "noData", $._decodeNull ]
}); }
    return _cached_decoder_for_StopResult(el);
}

let _cached_encoder_for_StopResult: $.ASN1Encoder<StopResult> | null = null;

/**
 * @summary Encodes a(n) StopResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The StopResult, encoded as an ASN.1 Element.
 */
export
function _encode_StopResult (value: StopResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_StopResult) { _cached_encoder_for_StopResult = $._encode_choice<StopResult>({
    "extensions": _encode_CSTACommonArguments,
    "noData": $._encodeNull,
}, $.BER); }
    return _cached_encoder_for_StopResult(value, elGetter);
}


/* eslint-enable */
