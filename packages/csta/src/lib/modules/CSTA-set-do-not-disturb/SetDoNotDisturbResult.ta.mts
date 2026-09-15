/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { NULL, ASN1Element as _Element } from "@wildboar/asn1";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary SetDoNotDisturbResult
 * @description
 *
 * Positive ack. `noData` if only the ROSE result is needed; `extensions`
 * carries `security`/`privateData`. ECMA-269 §22.1.19.2.1.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SetDoNotDisturbResult   ::=  CHOICE
 * {    extensions             CSTACommonArguments,
 *     noData                 NULL }
 * ```
 */
export
type SetDoNotDisturbResult =
    { extensions: CSTACommonArguments } /* CHOICE_ALT_ROOT */
    | { noData: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_SetDoNotDisturbResult: $.ASN1Decoder<SetDoNotDisturbResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SetDoNotDisturbResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SetDoNotDisturbResult (el: _Element): SetDoNotDisturbResult {
    if (!_cached_decoder_for_SetDoNotDisturbResult) { _cached_decoder_for_SetDoNotDisturbResult = $._decode_inextensible_choice<SetDoNotDisturbResult>({
    "APPLICATION 30": [ "extensions", _decode_CSTACommonArguments ],
    "UNIVERSAL 5": [ "noData", $._decodeNull ]
}); }
    return _cached_decoder_for_SetDoNotDisturbResult(el);
}

let _cached_encoder_for_SetDoNotDisturbResult: $.ASN1Encoder<SetDoNotDisturbResult> | null = null;

/**
 * @summary Encodes a(n) SetDoNotDisturbResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SetDoNotDisturbResult, encoded as an ASN.1 Element.
 */
export
function _encode_SetDoNotDisturbResult (value: SetDoNotDisturbResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SetDoNotDisturbResult) { _cached_encoder_for_SetDoNotDisturbResult = $._encode_choice<SetDoNotDisturbResult>({
    "extensions": _encode_CSTACommonArguments,
    "noData": $._encodeNull,
}, $.BER); }
    return _cached_encoder_for_SetDoNotDisturbResult(value, elGetter);
}


/* eslint-enable */
