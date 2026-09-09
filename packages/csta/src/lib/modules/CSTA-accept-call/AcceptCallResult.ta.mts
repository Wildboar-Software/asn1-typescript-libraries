/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { NULL, ASN1Element as _Element } from "@wildboar/asn1";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary AcceptCallResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AcceptCallResult  ::=  CHOICE
 * {     extensions             CSTACommonArguments,
 *     noData                 NULL }
 * ```
 */
export
type AcceptCallResult =
    { extensions: CSTACommonArguments } /* CHOICE_ALT_ROOT */
    | { noData: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_AcceptCallResult: $.ASN1Decoder<AcceptCallResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AcceptCallResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AcceptCallResult (el: _Element): AcceptCallResult {
    if (!_cached_decoder_for_AcceptCallResult) { _cached_decoder_for_AcceptCallResult = $._decode_inextensible_choice<AcceptCallResult>({
    "APPLICATION 30": [ "extensions", _decode_CSTACommonArguments ],
    "UNIVERSAL 5": [ "noData", $._decodeNull ]
}); }
    return _cached_decoder_for_AcceptCallResult(el);
}

let _cached_encoder_for_AcceptCallResult: $.ASN1Encoder<AcceptCallResult> | null = null;

/**
 * @summary Encodes a(n) AcceptCallResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AcceptCallResult, encoded as an ASN.1 Element.
 */
export
function _encode_AcceptCallResult (value: AcceptCallResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AcceptCallResult) { _cached_encoder_for_AcceptCallResult = $._encode_choice<AcceptCallResult>({
    "extensions": _encode_CSTACommonArguments,
    "noData": $._encodeNull,
}, $.BER); }
    return _cached_encoder_for_AcceptCallResult(value, elGetter);
}


/* eslint-enable */
