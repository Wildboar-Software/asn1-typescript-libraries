/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { NULL, ASN1Element as _Element } from "@wildboar/asn1";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary SendMulticastDataResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SendMulticastDataResult  ::=  CHOICE
 * {    extensions            CSTACommonArguments,
 *     noData                NULL }
 * ```
 */
export
type SendMulticastDataResult =
    { extensions: CSTACommonArguments } /* CHOICE_ALT_ROOT */
    | { noData: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_SendMulticastDataResult: $.ASN1Decoder<SendMulticastDataResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SendMulticastDataResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SendMulticastDataResult (el: _Element): SendMulticastDataResult {
    if (!_cached_decoder_for_SendMulticastDataResult) { _cached_decoder_for_SendMulticastDataResult = $._decode_inextensible_choice<SendMulticastDataResult>({
    "APPLICATION 30": [ "extensions", _decode_CSTACommonArguments ],
    "UNIVERSAL 5": [ "noData", $._decodeNull ]
}); }
    return _cached_decoder_for_SendMulticastDataResult(el);
}

let _cached_encoder_for_SendMulticastDataResult: $.ASN1Encoder<SendMulticastDataResult> | null = null;

/**
 * @summary Encodes a(n) SendMulticastDataResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SendMulticastDataResult, encoded as an ASN.1 Element.
 */
export
function _encode_SendMulticastDataResult (value: SendMulticastDataResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SendMulticastDataResult) { _cached_encoder_for_SendMulticastDataResult = $._encode_choice<SendMulticastDataResult>({
    "extensions": _encode_CSTACommonArguments,
    "noData": $._encodeNull,
}, $.BER); }
    return _cached_encoder_for_SendMulticastDataResult(value, elGetter);
}


/* eslint-enable */
