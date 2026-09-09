/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { NULL, ASN1Element as _Element } from "@wildboar/asn1";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary DetachMediaServiceResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DetachMediaServiceResult  ::=  CHOICE
 * {    extensions             CSTACommonArguments,
 *     noData                 NULL }
 * ```
 */
export
type DetachMediaServiceResult =
    { extensions: CSTACommonArguments } /* CHOICE_ALT_ROOT */
    | { noData: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_DetachMediaServiceResult: $.ASN1Decoder<DetachMediaServiceResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DetachMediaServiceResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DetachMediaServiceResult (el: _Element): DetachMediaServiceResult {
    if (!_cached_decoder_for_DetachMediaServiceResult) { _cached_decoder_for_DetachMediaServiceResult = $._decode_inextensible_choice<DetachMediaServiceResult>({
    "APPLICATION 30": [ "extensions", _decode_CSTACommonArguments ],
    "UNIVERSAL 5": [ "noData", $._decodeNull ]
}); }
    return _cached_decoder_for_DetachMediaServiceResult(el);
}

let _cached_encoder_for_DetachMediaServiceResult: $.ASN1Encoder<DetachMediaServiceResult> | null = null;

/**
 * @summary Encodes a(n) DetachMediaServiceResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DetachMediaServiceResult, encoded as an ASN.1 Element.
 */
export
function _encode_DetachMediaServiceResult (value: DetachMediaServiceResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DetachMediaServiceResult) { _cached_encoder_for_DetachMediaServiceResult = $._encode_choice<DetachMediaServiceResult>({
    "extensions": _encode_CSTACommonArguments,
    "noData": $._encodeNull,
}, $.BER); }
    return _cached_encoder_for_DetachMediaServiceResult(value, elGetter);
}


/* eslint-enable */
