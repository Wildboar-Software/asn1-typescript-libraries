/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { NULL, ASN1Element as _Element } from "@wildboar/asn1";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary DeflectCallResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DeflectCallResult  ::=  CHOICE
 * {    extensions             CSTACommonArguments,
 *     noData                 NULL }
 * ```
 */
export
type DeflectCallResult =
    { extensions: CSTACommonArguments } /* CHOICE_ALT_ROOT */
    | { noData: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_DeflectCallResult: $.ASN1Decoder<DeflectCallResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DeflectCallResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DeflectCallResult (el: _Element): DeflectCallResult {
    if (!_cached_decoder_for_DeflectCallResult) { _cached_decoder_for_DeflectCallResult = $._decode_inextensible_choice<DeflectCallResult>({
    "APPLICATION 30": [ "extensions", _decode_CSTACommonArguments ],
    "UNIVERSAL 5": [ "noData", $._decodeNull ]
}); }
    return _cached_decoder_for_DeflectCallResult(el);
}

let _cached_encoder_for_DeflectCallResult: $.ASN1Encoder<DeflectCallResult> | null = null;

/**
 * @summary Encodes a(n) DeflectCallResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeflectCallResult, encoded as an ASN.1 Element.
 */
export
function _encode_DeflectCallResult (value: DeflectCallResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DeflectCallResult) { _cached_encoder_for_DeflectCallResult = $._encode_choice<DeflectCallResult>({
    "extensions": _encode_CSTACommonArguments,
    "noData": $._encodeNull,
}, $.BER); }
    return _cached_encoder_for_DeflectCallResult(value, elGetter);
}


/* eslint-enable */
