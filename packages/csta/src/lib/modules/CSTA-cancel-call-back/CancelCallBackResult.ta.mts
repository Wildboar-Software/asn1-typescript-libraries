/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { NULL, ASN1Element as _Element } from "@wildboar/asn1";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary CancelCallBackResult
 * @description
 *
 * Positive ack. `noData` if only the ROSE result is needed; `extensions`
 * carries `security`/`privateData`. ECMA-269 §22.1.3.2.1.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CancelCallBackResult  ::=  CHOICE
 * {    extensions             CSTACommonArguments,
 *     noData                 NULL }
 * ```
 */
export
type CancelCallBackResult =
    { extensions: CSTACommonArguments } /* CHOICE_ALT_ROOT */
    | { noData: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_CancelCallBackResult: $.ASN1Decoder<CancelCallBackResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CancelCallBackResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CancelCallBackResult (el: _Element): CancelCallBackResult {
    if (!_cached_decoder_for_CancelCallBackResult) { _cached_decoder_for_CancelCallBackResult = $._decode_inextensible_choice<CancelCallBackResult>({
    "APPLICATION 30": [ "extensions", _decode_CSTACommonArguments ],
    "UNIVERSAL 5": [ "noData", $._decodeNull ]
}); }
    return _cached_decoder_for_CancelCallBackResult(el);
}

let _cached_encoder_for_CancelCallBackResult: $.ASN1Encoder<CancelCallBackResult> | null = null;

/**
 * @summary Encodes a(n) CancelCallBackResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CancelCallBackResult, encoded as an ASN.1 Element.
 */
export
function _encode_CancelCallBackResult (value: CancelCallBackResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CancelCallBackResult) { _cached_encoder_for_CancelCallBackResult = $._encode_choice<CancelCallBackResult>({
    "extensions": _encode_CSTACommonArguments,
    "noData": $._encodeNull,
}, $.BER); }
    return _cached_encoder_for_CancelCallBackResult(value, elGetter);
}


/* eslint-enable */
