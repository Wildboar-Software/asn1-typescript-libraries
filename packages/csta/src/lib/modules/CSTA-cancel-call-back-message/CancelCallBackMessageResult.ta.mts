/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { NULL, ASN1Element as _Element } from "@wildboar/asn1";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary CancelCallBackMessageResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CancelCallBackMessageResult  ::=  CHOICE
 * {    extensions             CSTACommonArguments,
 *     noData                 NULL }
 * ```
 */
export
type CancelCallBackMessageResult =
    { extensions: CSTACommonArguments } /* CHOICE_ALT_ROOT */
    | { noData: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_CancelCallBackMessageResult: $.ASN1Decoder<CancelCallBackMessageResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CancelCallBackMessageResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CancelCallBackMessageResult (el: _Element): CancelCallBackMessageResult {
    if (!_cached_decoder_for_CancelCallBackMessageResult) { _cached_decoder_for_CancelCallBackMessageResult = $._decode_inextensible_choice<CancelCallBackMessageResult>({
    "APPLICATION 30": [ "extensions", _decode_CSTACommonArguments ],
    "UNIVERSAL 5": [ "noData", $._decodeNull ]
}); }
    return _cached_decoder_for_CancelCallBackMessageResult(el);
}

let _cached_encoder_for_CancelCallBackMessageResult: $.ASN1Encoder<CancelCallBackMessageResult> | null = null;

/**
 * @summary Encodes a(n) CancelCallBackMessageResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CancelCallBackMessageResult, encoded as an ASN.1 Element.
 */
export
function _encode_CancelCallBackMessageResult (value: CancelCallBackMessageResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CancelCallBackMessageResult) { _cached_encoder_for_CancelCallBackMessageResult = $._encode_choice<CancelCallBackMessageResult>({
    "extensions": _encode_CSTACommonArguments,
    "noData": $._encodeNull,
}, $.BER); }
    return _cached_encoder_for_CancelCallBackMessageResult(value, elGetter);
}


/* eslint-enable */
