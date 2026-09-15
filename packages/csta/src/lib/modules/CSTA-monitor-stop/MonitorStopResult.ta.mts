/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { NULL, ASN1Element as _Element } from "@wildboar/asn1";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary MonitorStopResult
 * @description
 *
 * Positive acknowledgement: `extensions` (security/privateData) or
 * `noData` when those are omitted.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MonitorStopResult  ::=  CHOICE
 * {    extensions             CSTACommonArguments,
 *     noData                 NULL }
 * ```
 */
export
type MonitorStopResult =
    { extensions: CSTACommonArguments } /* CHOICE_ALT_ROOT */
    | { noData: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_MonitorStopResult: $.ASN1Decoder<MonitorStopResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MonitorStopResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MonitorStopResult (el: _Element): MonitorStopResult {
    if (!_cached_decoder_for_MonitorStopResult) { _cached_decoder_for_MonitorStopResult = $._decode_inextensible_choice<MonitorStopResult>({
    "APPLICATION 30": [ "extensions", _decode_CSTACommonArguments ],
    "UNIVERSAL 5": [ "noData", $._decodeNull ]
}); }
    return _cached_decoder_for_MonitorStopResult(el);
}

let _cached_encoder_for_MonitorStopResult: $.ASN1Encoder<MonitorStopResult> | null = null;

/**
 * @summary Encodes a(n) MonitorStopResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MonitorStopResult, encoded as an ASN.1 Element.
 */
export
function _encode_MonitorStopResult (value: MonitorStopResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MonitorStopResult) { _cached_encoder_for_MonitorStopResult = $._encode_choice<MonitorStopResult>({
    "extensions": _encode_CSTACommonArguments,
    "noData": $._encodeNull,
}, $.BER); }
    return _cached_encoder_for_MonitorStopResult(value, elGetter);
}


/* eslint-enable */
