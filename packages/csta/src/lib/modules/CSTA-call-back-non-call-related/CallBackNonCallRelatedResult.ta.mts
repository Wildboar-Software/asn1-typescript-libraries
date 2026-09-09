/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { NULL, ASN1Element as _Element } from "@wildboar/asn1";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary CallBackNonCallRelatedResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallBackNonCallRelatedResult  ::=  CHOICE
 * {    extensions             CSTACommonArguments,
 *     noData                 NULL }
 * ```
 */
export
type CallBackNonCallRelatedResult =
    { extensions: CSTACommonArguments } /* CHOICE_ALT_ROOT */
    | { noData: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_CallBackNonCallRelatedResult: $.ASN1Decoder<CallBackNonCallRelatedResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CallBackNonCallRelatedResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CallBackNonCallRelatedResult (el: _Element): CallBackNonCallRelatedResult {
    if (!_cached_decoder_for_CallBackNonCallRelatedResult) { _cached_decoder_for_CallBackNonCallRelatedResult = $._decode_inextensible_choice<CallBackNonCallRelatedResult>({
    "APPLICATION 30": [ "extensions", _decode_CSTACommonArguments ],
    "UNIVERSAL 5": [ "noData", $._decodeNull ]
}); }
    return _cached_decoder_for_CallBackNonCallRelatedResult(el);
}

let _cached_encoder_for_CallBackNonCallRelatedResult: $.ASN1Encoder<CallBackNonCallRelatedResult> | null = null;

/**
 * @summary Encodes a(n) CallBackNonCallRelatedResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CallBackNonCallRelatedResult, encoded as an ASN.1 Element.
 */
export
function _encode_CallBackNonCallRelatedResult (value: CallBackNonCallRelatedResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CallBackNonCallRelatedResult) { _cached_encoder_for_CallBackNonCallRelatedResult = $._encode_choice<CallBackNonCallRelatedResult>({
    "extensions": _encode_CSTACommonArguments,
    "noData": $._encodeNull,
}, $.BER); }
    return _cached_encoder_for_CallBackNonCallRelatedResult(value, elGetter);
}


/* eslint-enable */
