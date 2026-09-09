/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { NULL, ASN1Element as _Element } from "@wildboar/asn1";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary CamponCallResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CamponCallResult  ::=  CHOICE
 * {     extensions             CSTACommonArguments,
 *     noData                 NULL }
 * ```
 */
export
type CamponCallResult =
    { extensions: CSTACommonArguments } /* CHOICE_ALT_ROOT */
    | { noData: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_CamponCallResult: $.ASN1Decoder<CamponCallResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CamponCallResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CamponCallResult (el: _Element): CamponCallResult {
    if (!_cached_decoder_for_CamponCallResult) { _cached_decoder_for_CamponCallResult = $._decode_inextensible_choice<CamponCallResult>({
    "APPLICATION 30": [ "extensions", _decode_CSTACommonArguments ],
    "UNIVERSAL 5": [ "noData", $._decodeNull ]
}); }
    return _cached_decoder_for_CamponCallResult(el);
}

let _cached_encoder_for_CamponCallResult: $.ASN1Encoder<CamponCallResult> | null = null;

/**
 * @summary Encodes a(n) CamponCallResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CamponCallResult, encoded as an ASN.1 Element.
 */
export
function _encode_CamponCallResult (value: CamponCallResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CamponCallResult) { _cached_encoder_for_CamponCallResult = $._encode_choice<CamponCallResult>({
    "extensions": _encode_CSTACommonArguments,
    "noData": $._encodeNull,
}, $.BER); }
    return _cached_encoder_for_CamponCallResult(value, elGetter);
}


/* eslint-enable */
