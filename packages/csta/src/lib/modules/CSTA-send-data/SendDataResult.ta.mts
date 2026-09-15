/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { NULL, ASN1Element as _Element } from "@wildboar/asn1";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary SendDataResult
 * @description
 *
 * Positive acknowledgement is `extensions` or empty `noData` (atomic
 * acknowledgement model). (ECMA-269 §24.2.6.2.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SendDataResult  ::=  CHOICE
 * {    extensions            CSTACommonArguments,
 *     noData                NULL }
 * ```
 */
export
type SendDataResult =
    { extensions: CSTACommonArguments } /* CHOICE_ALT_ROOT */
    | { noData: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_SendDataResult: $.ASN1Decoder<SendDataResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SendDataResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SendDataResult (el: _Element): SendDataResult {
    if (!_cached_decoder_for_SendDataResult) { _cached_decoder_for_SendDataResult = $._decode_inextensible_choice<SendDataResult>({
    "APPLICATION 30": [ "extensions", _decode_CSTACommonArguments ],
    "UNIVERSAL 5": [ "noData", $._decodeNull ]
}); }
    return _cached_decoder_for_SendDataResult(el);
}

let _cached_encoder_for_SendDataResult: $.ASN1Encoder<SendDataResult> | null = null;

/**
 * @summary Encodes a(n) SendDataResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SendDataResult, encoded as an ASN.1 Element.
 */
export
function _encode_SendDataResult (value: SendDataResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SendDataResult) { _cached_encoder_for_SendDataResult = $._encode_choice<SendDataResult>({
    "extensions": _encode_CSTACommonArguments,
    "noData": $._encodeNull,
}, $.BER); }
    return _cached_encoder_for_SendDataResult(value, elGetter);
}


/* eslint-enable */
