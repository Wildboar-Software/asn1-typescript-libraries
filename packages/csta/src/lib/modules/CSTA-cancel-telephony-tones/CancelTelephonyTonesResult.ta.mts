/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { NULL, ASN1Element as _Element } from "@wildboar/asn1";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary CancelTelephonyTonesResult
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
 * CancelTelephonyTonesResult  ::=  CHOICE
 * {    extensions            CSTACommonArguments,
 *     noData                NULL }
 * ```
 */
export
type CancelTelephonyTonesResult =
    { extensions: CSTACommonArguments } /* CHOICE_ALT_ROOT */
    | { noData: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_CancelTelephonyTonesResult: $.ASN1Decoder<CancelTelephonyTonesResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CancelTelephonyTonesResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CancelTelephonyTonesResult (el: _Element): CancelTelephonyTonesResult {
    if (!_cached_decoder_for_CancelTelephonyTonesResult) { _cached_decoder_for_CancelTelephonyTonesResult = $._decode_inextensible_choice<CancelTelephonyTonesResult>({
    "APPLICATION 30": [ "extensions", _decode_CSTACommonArguments ],
    "UNIVERSAL 5": [ "noData", $._decodeNull ]
}); }
    return _cached_decoder_for_CancelTelephonyTonesResult(el);
}

let _cached_encoder_for_CancelTelephonyTonesResult: $.ASN1Encoder<CancelTelephonyTonesResult> | null = null;

/**
 * @summary Encodes a(n) CancelTelephonyTonesResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CancelTelephonyTonesResult, encoded as an ASN.1 Element.
 */
export
function _encode_CancelTelephonyTonesResult (value: CancelTelephonyTonesResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CancelTelephonyTonesResult) { _cached_encoder_for_CancelTelephonyTonesResult = $._encode_choice<CancelTelephonyTonesResult>({
    "extensions": _encode_CSTACommonArguments,
    "noData": $._encodeNull,
}, $.BER); }
    return _cached_encoder_for_CancelTelephonyTonesResult(value, elGetter);
}


/* eslint-enable */
