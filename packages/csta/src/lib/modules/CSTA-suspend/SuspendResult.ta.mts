/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { NULL, ASN1Element as _Element } from "@wildboar/asn1";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary SuspendResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SuspendResult  ::=  CHOICE
 * {    extensions            CSTACommonArguments,
 *     noData                NULL }
 * ```
 */
export
type SuspendResult =
    { extensions: CSTACommonArguments } /* CHOICE_ALT_ROOT */
    | { noData: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_SuspendResult: $.ASN1Decoder<SuspendResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SuspendResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SuspendResult (el: _Element): SuspendResult {
    if (!_cached_decoder_for_SuspendResult) { _cached_decoder_for_SuspendResult = $._decode_inextensible_choice<SuspendResult>({
    "APPLICATION 30": [ "extensions", _decode_CSTACommonArguments ],
    "UNIVERSAL 5": [ "noData", $._decodeNull ]
}); }
    return _cached_decoder_for_SuspendResult(el);
}

let _cached_encoder_for_SuspendResult: $.ASN1Encoder<SuspendResult> | null = null;

/**
 * @summary Encodes a(n) SuspendResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SuspendResult, encoded as an ASN.1 Element.
 */
export
function _encode_SuspendResult (value: SuspendResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SuspendResult) { _cached_encoder_for_SuspendResult = $._encode_choice<SuspendResult>({
    "extensions": _encode_CSTACommonArguments,
    "noData": $._encodeNull,
}, $.BER); }
    return _cached_encoder_for_SuspendResult(value, elGetter);
}


/* eslint-enable */
