/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { NULL, ASN1Element as _Element } from "@wildboar/asn1";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary GenerateTelephonyTonesResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GenerateTelephonyTonesResult  ::=  CHOICE
 * {    extensions            CSTACommonArguments,
 *     noData                NULL }
 * ```
 */
export
type GenerateTelephonyTonesResult =
    { extensions: CSTACommonArguments } /* CHOICE_ALT_ROOT */
    | { noData: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_GenerateTelephonyTonesResult: $.ASN1Decoder<GenerateTelephonyTonesResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GenerateTelephonyTonesResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GenerateTelephonyTonesResult (el: _Element): GenerateTelephonyTonesResult {
    if (!_cached_decoder_for_GenerateTelephonyTonesResult) { _cached_decoder_for_GenerateTelephonyTonesResult = $._decode_inextensible_choice<GenerateTelephonyTonesResult>({
    "APPLICATION 30": [ "extensions", _decode_CSTACommonArguments ],
    "UNIVERSAL 5": [ "noData", $._decodeNull ]
}); }
    return _cached_decoder_for_GenerateTelephonyTonesResult(el);
}

let _cached_encoder_for_GenerateTelephonyTonesResult: $.ASN1Encoder<GenerateTelephonyTonesResult> | null = null;

/**
 * @summary Encodes a(n) GenerateTelephonyTonesResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GenerateTelephonyTonesResult, encoded as an ASN.1 Element.
 */
export
function _encode_GenerateTelephonyTonesResult (value: GenerateTelephonyTonesResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GenerateTelephonyTonesResult) { _cached_encoder_for_GenerateTelephonyTonesResult = $._encode_choice<GenerateTelephonyTonesResult>({
    "extensions": _encode_CSTACommonArguments,
    "noData": $._encodeNull,
}, $.BER); }
    return _cached_encoder_for_GenerateTelephonyTonesResult(value, elGetter);
}


/* eslint-enable */
