/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { NULL, ASN1Element as _Element } from "@wildboar/asn1";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary ClearConnectionResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ClearConnectionResult  ::=  CHOICE
 * {    extensions             CSTACommonArguments,
 *     noData                 NULL }
 * ```
 */
export
type ClearConnectionResult =
    { extensions: CSTACommonArguments } /* CHOICE_ALT_ROOT */
    | { noData: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ClearConnectionResult: $.ASN1Decoder<ClearConnectionResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ClearConnectionResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ClearConnectionResult (el: _Element): ClearConnectionResult {
    if (!_cached_decoder_for_ClearConnectionResult) { _cached_decoder_for_ClearConnectionResult = $._decode_inextensible_choice<ClearConnectionResult>({
    "APPLICATION 30": [ "extensions", _decode_CSTACommonArguments ],
    "UNIVERSAL 5": [ "noData", $._decodeNull ]
}); }
    return _cached_decoder_for_ClearConnectionResult(el);
}

let _cached_encoder_for_ClearConnectionResult: $.ASN1Encoder<ClearConnectionResult> | null = null;

/**
 * @summary Encodes a(n) ClearConnectionResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ClearConnectionResult, encoded as an ASN.1 Element.
 */
export
function _encode_ClearConnectionResult (value: ClearConnectionResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ClearConnectionResult) { _cached_encoder_for_ClearConnectionResult = $._encode_choice<ClearConnectionResult>({
    "extensions": _encode_CSTACommonArguments,
    "noData": $._encodeNull,
}, $.BER); }
    return _cached_encoder_for_ClearConnectionResult(value, elGetter);
}


/* eslint-enable */
