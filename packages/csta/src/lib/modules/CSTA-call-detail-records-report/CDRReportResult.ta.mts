/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { NULL, ASN1Element as _Element } from "@wildboar/asn1";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary CDRReportResult
 * @description
 *
 * Positive acknowledgement is `extensions` or empty `noData` (atomic
 * acknowledgement model). (ECMA-269 §27.1.2.2.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CDRReportResult  ::=  CHOICE
 * {    extensions            CSTACommonArguments,
 *     noData                NULL }
 * ```
 */
export
type CDRReportResult =
    { extensions: CSTACommonArguments } /* CHOICE_ALT_ROOT */
    | { noData: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_CDRReportResult: $.ASN1Decoder<CDRReportResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CDRReportResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CDRReportResult (el: _Element): CDRReportResult {
    if (!_cached_decoder_for_CDRReportResult) { _cached_decoder_for_CDRReportResult = $._decode_inextensible_choice<CDRReportResult>({
    "APPLICATION 30": [ "extensions", _decode_CSTACommonArguments ],
    "UNIVERSAL 5": [ "noData", $._decodeNull ]
}); }
    return _cached_decoder_for_CDRReportResult(el);
}

let _cached_encoder_for_CDRReportResult: $.ASN1Encoder<CDRReportResult> | null = null;

/**
 * @summary Encodes a(n) CDRReportResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CDRReportResult, encoded as an ASN.1 Element.
 */
export
function _encode_CDRReportResult (value: CDRReportResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CDRReportResult) { _cached_encoder_for_CDRReportResult = $._encode_choice<CDRReportResult>({
    "extensions": _encode_CSTACommonArguments,
    "noData": $._encodeNull,
}, $.BER); }
    return _cached_encoder_for_CDRReportResult(value, elGetter);
}


/* eslint-enable */
