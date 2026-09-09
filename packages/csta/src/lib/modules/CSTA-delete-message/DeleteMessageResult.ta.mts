/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { NULL, ASN1Element as _Element } from "@wildboar/asn1";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary DeleteMessageResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DeleteMessageResult  ::=     CHOICE
 * {    extensions            CSTACommonArguments,
 *     noData                NULL }
 * ```
 */
export
type DeleteMessageResult =
    { extensions: CSTACommonArguments } /* CHOICE_ALT_ROOT */
    | { noData: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_DeleteMessageResult: $.ASN1Decoder<DeleteMessageResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DeleteMessageResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DeleteMessageResult (el: _Element): DeleteMessageResult {
    if (!_cached_decoder_for_DeleteMessageResult) { _cached_decoder_for_DeleteMessageResult = $._decode_inextensible_choice<DeleteMessageResult>({
    "APPLICATION 30": [ "extensions", _decode_CSTACommonArguments ],
    "UNIVERSAL 5": [ "noData", $._decodeNull ]
}); }
    return _cached_decoder_for_DeleteMessageResult(el);
}

let _cached_encoder_for_DeleteMessageResult: $.ASN1Encoder<DeleteMessageResult> | null = null;

/**
 * @summary Encodes a(n) DeleteMessageResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeleteMessageResult, encoded as an ASN.1 Element.
 */
export
function _encode_DeleteMessageResult (value: DeleteMessageResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DeleteMessageResult) { _cached_encoder_for_DeleteMessageResult = $._encode_choice<DeleteMessageResult>({
    "extensions": _encode_CSTACommonArguments,
    "noData": $._encodeNull,
}, $.BER); }
    return _cached_encoder_for_DeleteMessageResult(value, elGetter);
}


/* eslint-enable */
