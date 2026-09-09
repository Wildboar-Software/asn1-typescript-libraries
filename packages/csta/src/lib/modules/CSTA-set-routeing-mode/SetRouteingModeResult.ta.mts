/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { NULL, ASN1Element as _Element } from "@wildboar/asn1";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary SetRouteingModeResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SetRouteingModeResult   ::=  CHOICE
 * {    extensions             CSTACommonArguments,
 *     noData                 NULL }
 * ```
 */
export
type SetRouteingModeResult =
    { extensions: CSTACommonArguments } /* CHOICE_ALT_ROOT */
    | { noData: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_SetRouteingModeResult: $.ASN1Decoder<SetRouteingModeResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SetRouteingModeResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SetRouteingModeResult (el: _Element): SetRouteingModeResult {
    if (!_cached_decoder_for_SetRouteingModeResult) { _cached_decoder_for_SetRouteingModeResult = $._decode_inextensible_choice<SetRouteingModeResult>({
    "APPLICATION 30": [ "extensions", _decode_CSTACommonArguments ],
    "UNIVERSAL 5": [ "noData", $._decodeNull ]
}); }
    return _cached_decoder_for_SetRouteingModeResult(el);
}

let _cached_encoder_for_SetRouteingModeResult: $.ASN1Encoder<SetRouteingModeResult> | null = null;

/**
 * @summary Encodes a(n) SetRouteingModeResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SetRouteingModeResult, encoded as an ASN.1 Element.
 */
export
function _encode_SetRouteingModeResult (value: SetRouteingModeResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SetRouteingModeResult) { _cached_encoder_for_SetRouteingModeResult = $._encode_choice<SetRouteingModeResult>({
    "extensions": _encode_CSTACommonArguments,
    "noData": $._encodeNull,
}, $.BER); }
    return _cached_encoder_for_SetRouteingModeResult(value, elGetter);
}


/* eslint-enable */
