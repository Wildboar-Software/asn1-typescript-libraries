/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { NULL, ASN1Element as _Element } from "@wildboar/asn1";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary RetrieveCallResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RetrieveCallResult  ::=  CHOICE
 * {    extensions             CSTACommonArguments,
 *     noData                 NULL }
 * ```
 */
export
type RetrieveCallResult =
    { extensions: CSTACommonArguments } /* CHOICE_ALT_ROOT */
    | { noData: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_RetrieveCallResult: $.ASN1Decoder<RetrieveCallResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RetrieveCallResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RetrieveCallResult (el: _Element): RetrieveCallResult {
    if (!_cached_decoder_for_RetrieveCallResult) { _cached_decoder_for_RetrieveCallResult = $._decode_inextensible_choice<RetrieveCallResult>({
    "APPLICATION 30": [ "extensions", _decode_CSTACommonArguments ],
    "UNIVERSAL 5": [ "noData", $._decodeNull ]
}); }
    return _cached_decoder_for_RetrieveCallResult(el);
}

let _cached_encoder_for_RetrieveCallResult: $.ASN1Encoder<RetrieveCallResult> | null = null;

/**
 * @summary Encodes a(n) RetrieveCallResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RetrieveCallResult, encoded as an ASN.1 Element.
 */
export
function _encode_RetrieveCallResult (value: RetrieveCallResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RetrieveCallResult) { _cached_encoder_for_RetrieveCallResult = $._encode_choice<RetrieveCallResult>({
    "extensions": _encode_CSTACommonArguments,
    "noData": $._encodeNull,
}, $.BER); }
    return _cached_encoder_for_RetrieveCallResult(value, elGetter);
}


/* eslint-enable */
