/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { NULL, ASN1Element as _Element } from "@wildboar/asn1";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary ClearCallResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ClearCallResult  ::=  CHOICE
 * {    extensions             CSTACommonArguments,
 *     noData                 NULL }
 * ```
 */
export
type ClearCallResult =
    { extensions: CSTACommonArguments } /* CHOICE_ALT_ROOT */
    | { noData: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ClearCallResult: $.ASN1Decoder<ClearCallResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ClearCallResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ClearCallResult (el: _Element): ClearCallResult {
    if (!_cached_decoder_for_ClearCallResult) { _cached_decoder_for_ClearCallResult = $._decode_inextensible_choice<ClearCallResult>({
    "APPLICATION 30": [ "extensions", _decode_CSTACommonArguments ],
    "UNIVERSAL 5": [ "noData", $._decodeNull ]
}); }
    return _cached_decoder_for_ClearCallResult(el);
}

let _cached_encoder_for_ClearCallResult: $.ASN1Encoder<ClearCallResult> | null = null;

/**
 * @summary Encodes a(n) ClearCallResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ClearCallResult, encoded as an ASN.1 Element.
 */
export
function _encode_ClearCallResult (value: ClearCallResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ClearCallResult) { _cached_encoder_for_ClearCallResult = $._encode_choice<ClearCallResult>({
    "extensions": _encode_CSTACommonArguments,
    "noData": $._encodeNull,
}, $.BER); }
    return _cached_encoder_for_ClearCallResult(value, elGetter);
}


/* eslint-enable */
