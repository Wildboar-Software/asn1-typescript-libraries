/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { NULL, ASN1Element as _Element } from "@wildboar/asn1";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary ReconnectCallResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReconnectCallResult  ::=  CHOICE
 * {    extensions             CSTACommonArguments,
 *     noData                 NULL }
 * ```
 */
export
type ReconnectCallResult =
    { extensions: CSTACommonArguments } /* CHOICE_ALT_ROOT */
    | { noData: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ReconnectCallResult: $.ASN1Decoder<ReconnectCallResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReconnectCallResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ReconnectCallResult (el: _Element): ReconnectCallResult {
    if (!_cached_decoder_for_ReconnectCallResult) { _cached_decoder_for_ReconnectCallResult = $._decode_inextensible_choice<ReconnectCallResult>({
    "APPLICATION 30": [ "extensions", _decode_CSTACommonArguments ],
    "UNIVERSAL 5": [ "noData", $._decodeNull ]
}); }
    return _cached_decoder_for_ReconnectCallResult(el);
}

let _cached_encoder_for_ReconnectCallResult: $.ASN1Encoder<ReconnectCallResult> | null = null;

/**
 * @summary Encodes a(n) ReconnectCallResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReconnectCallResult, encoded as an ASN.1 Element.
 */
export
function _encode_ReconnectCallResult (value: ReconnectCallResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ReconnectCallResult) { _cached_encoder_for_ReconnectCallResult = $._encode_choice<ReconnectCallResult>({
    "extensions": _encode_CSTACommonArguments,
    "noData": $._encodeNull,
}, $.BER); }
    return _cached_encoder_for_ReconnectCallResult(value, elGetter);
}


/* eslint-enable */
