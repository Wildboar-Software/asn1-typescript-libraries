/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { NULL, ASN1Element as _Element } from "@wildboar/asn1";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary StopCDRTransmissionResult
 * @description
 *
 * Positive acknowledgement is `extensions` or empty `noData` (atomic
 * acknowledgement model). (ECMA-269 §27.1.5.2.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StopCDRTransmissionResult  ::=  CHOICE
 * {    extensions            CSTACommonArguments,
 *     noData                NULL }
 * ```
 */
export
type StopCDRTransmissionResult =
    { extensions: CSTACommonArguments } /* CHOICE_ALT_ROOT */
    | { noData: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_StopCDRTransmissionResult: $.ASN1Decoder<StopCDRTransmissionResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) StopCDRTransmissionResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_StopCDRTransmissionResult (el: _Element): StopCDRTransmissionResult {
    if (!_cached_decoder_for_StopCDRTransmissionResult) { _cached_decoder_for_StopCDRTransmissionResult = $._decode_inextensible_choice<StopCDRTransmissionResult>({
    "APPLICATION 30": [ "extensions", _decode_CSTACommonArguments ],
    "UNIVERSAL 5": [ "noData", $._decodeNull ]
}); }
    return _cached_decoder_for_StopCDRTransmissionResult(el);
}

let _cached_encoder_for_StopCDRTransmissionResult: $.ASN1Encoder<StopCDRTransmissionResult> | null = null;

/**
 * @summary Encodes a(n) StopCDRTransmissionResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The StopCDRTransmissionResult, encoded as an ASN.1 Element.
 */
export
function _encode_StopCDRTransmissionResult (value: StopCDRTransmissionResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_StopCDRTransmissionResult) { _cached_encoder_for_StopCDRTransmissionResult = $._encode_choice<StopCDRTransmissionResult>({
    "extensions": _encode_CSTACommonArguments,
    "noData": $._encodeNull,
}, $.BER); }
    return _cached_encoder_for_StopCDRTransmissionResult(value, elGetter);
}


/* eslint-enable */
