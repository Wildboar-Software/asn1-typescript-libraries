/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { NULL, ASN1Element as _Element } from "@wildboar/asn1";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary StopDataPathResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StopDataPathResult  ::=  CHOICE
 * {    extensions            CSTACommonArguments,
 *     noData                NULL }
 * ```
 */
export
type StopDataPathResult =
    { extensions: CSTACommonArguments } /* CHOICE_ALT_ROOT */
    | { noData: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_StopDataPathResult: $.ASN1Decoder<StopDataPathResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) StopDataPathResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_StopDataPathResult (el: _Element): StopDataPathResult {
    if (!_cached_decoder_for_StopDataPathResult) { _cached_decoder_for_StopDataPathResult = $._decode_inextensible_choice<StopDataPathResult>({
    "APPLICATION 30": [ "extensions", _decode_CSTACommonArguments ],
    "UNIVERSAL 5": [ "noData", $._decodeNull ]
}); }
    return _cached_decoder_for_StopDataPathResult(el);
}

let _cached_encoder_for_StopDataPathResult: $.ASN1Encoder<StopDataPathResult> | null = null;

/**
 * @summary Encodes a(n) StopDataPathResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The StopDataPathResult, encoded as an ASN.1 Element.
 */
export
function _encode_StopDataPathResult (value: StopDataPathResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_StopDataPathResult) { _cached_encoder_for_StopDataPathResult = $._encode_choice<StopDataPathResult>({
    "extensions": _encode_CSTACommonArguments,
    "noData": $._encodeNull,
}, $.BER); }
    return _cached_encoder_for_StopDataPathResult(value, elGetter);
}


/* eslint-enable */
