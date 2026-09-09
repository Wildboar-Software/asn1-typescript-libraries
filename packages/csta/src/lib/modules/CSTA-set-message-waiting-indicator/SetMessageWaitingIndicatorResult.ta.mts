/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { NULL, ASN1Element as _Element } from "@wildboar/asn1";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary SetMessageWaitingIndicatorResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SetMessageWaitingIndicatorResult  ::=  CHOICE
 * {    extensions             CSTACommonArguments,
 *     noData                 NULL }
 * ```
 */
export
type SetMessageWaitingIndicatorResult =
    { extensions: CSTACommonArguments } /* CHOICE_ALT_ROOT */
    | { noData: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_SetMessageWaitingIndicatorResult: $.ASN1Decoder<SetMessageWaitingIndicatorResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SetMessageWaitingIndicatorResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SetMessageWaitingIndicatorResult (el: _Element): SetMessageWaitingIndicatorResult {
    if (!_cached_decoder_for_SetMessageWaitingIndicatorResult) { _cached_decoder_for_SetMessageWaitingIndicatorResult = $._decode_inextensible_choice<SetMessageWaitingIndicatorResult>({
    "APPLICATION 30": [ "extensions", _decode_CSTACommonArguments ],
    "UNIVERSAL 5": [ "noData", $._decodeNull ]
}); }
    return _cached_decoder_for_SetMessageWaitingIndicatorResult(el);
}

let _cached_encoder_for_SetMessageWaitingIndicatorResult: $.ASN1Encoder<SetMessageWaitingIndicatorResult> | null = null;

/**
 * @summary Encodes a(n) SetMessageWaitingIndicatorResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SetMessageWaitingIndicatorResult, encoded as an ASN.1 Element.
 */
export
function _encode_SetMessageWaitingIndicatorResult (value: SetMessageWaitingIndicatorResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SetMessageWaitingIndicatorResult) { _cached_encoder_for_SetMessageWaitingIndicatorResult = $._encode_choice<SetMessageWaitingIndicatorResult>({
    "extensions": _encode_CSTACommonArguments,
    "noData": $._encodeNull,
}, $.BER); }
    return _cached_encoder_for_SetMessageWaitingIndicatorResult(value, elGetter);
}


/* eslint-enable */
