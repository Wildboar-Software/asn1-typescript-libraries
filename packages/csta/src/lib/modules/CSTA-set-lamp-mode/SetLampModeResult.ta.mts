/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { NULL, ASN1Element as _Element } from "@wildboar/asn1";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary SetLampModeResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SetLampModeResult  ::=  CHOICE
 * {    extensions             CSTACommonArguments,
 *     noData                 NULL }
 * ```
 */
export
type SetLampModeResult =
    { extensions: CSTACommonArguments } /* CHOICE_ALT_ROOT */
    | { noData: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_SetLampModeResult: $.ASN1Decoder<SetLampModeResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SetLampModeResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SetLampModeResult (el: _Element): SetLampModeResult {
    if (!_cached_decoder_for_SetLampModeResult) { _cached_decoder_for_SetLampModeResult = $._decode_inextensible_choice<SetLampModeResult>({
    "APPLICATION 30": [ "extensions", _decode_CSTACommonArguments ],
    "UNIVERSAL 5": [ "noData", $._decodeNull ]
}); }
    return _cached_decoder_for_SetLampModeResult(el);
}

let _cached_encoder_for_SetLampModeResult: $.ASN1Encoder<SetLampModeResult> | null = null;

/**
 * @summary Encodes a(n) SetLampModeResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SetLampModeResult, encoded as an ASN.1 Element.
 */
export
function _encode_SetLampModeResult (value: SetLampModeResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SetLampModeResult) { _cached_encoder_for_SetLampModeResult = $._encode_choice<SetLampModeResult>({
    "extensions": _encode_CSTACommonArguments,
    "noData": $._encodeNull,
}, $.BER); }
    return _cached_encoder_for_SetLampModeResult(value, elGetter);
}


/* eslint-enable */
