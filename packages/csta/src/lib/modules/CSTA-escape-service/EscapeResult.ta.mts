/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { NULL, ASN1Element as _Element } from "@wildboar/asn1";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary EscapeResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EscapeResult   ::=  CHOICE
 * {    extensions            CSTACommonArguments,
 *     noData                NULL }
 * ```
 */
export
type EscapeResult =
    { extensions: CSTACommonArguments } /* CHOICE_ALT_ROOT */
    | { noData: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_EscapeResult: $.ASN1Decoder<EscapeResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EscapeResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EscapeResult (el: _Element): EscapeResult {
    if (!_cached_decoder_for_EscapeResult) { _cached_decoder_for_EscapeResult = $._decode_inextensible_choice<EscapeResult>({
    "APPLICATION 30": [ "extensions", _decode_CSTACommonArguments ],
    "UNIVERSAL 5": [ "noData", $._decodeNull ]
}); }
    return _cached_decoder_for_EscapeResult(el);
}

let _cached_encoder_for_EscapeResult: $.ASN1Encoder<EscapeResult> | null = null;

/**
 * @summary Encodes a(n) EscapeResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EscapeResult, encoded as an ASN.1 Element.
 */
export
function _encode_EscapeResult (value: EscapeResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EscapeResult) { _cached_encoder_for_EscapeResult = $._encode_choice<EscapeResult>({
    "extensions": _encode_CSTACommonArguments,
    "noData": $._encodeNull,
}, $.BER); }
    return _cached_encoder_for_EscapeResult(value, elGetter);
}


/* eslint-enable */
