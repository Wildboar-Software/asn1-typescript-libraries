/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { NULL, ASN1Element as _Element } from "@wildboar/asn1";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary HoldCallResult
 * @description
 *
 * Positive acknowledgement: `extensions` for security/private
 * data, or `noData` (NULL) when none are returned. Atomic vs
 * multi-step acknowledgement is advertised via capability
 * exchange (ECMA-269 §17.1.15 / ECMA-285 §15.1.15).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * HoldCallResult  ::=  CHOICE
 * {    extensions             CSTACommonArguments,
 *     noData                 NULL }
 * ```
 */
export
type HoldCallResult =
    { extensions: CSTACommonArguments } /* CHOICE_ALT_ROOT */
    | { noData: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_HoldCallResult: $.ASN1Decoder<HoldCallResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) HoldCallResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_HoldCallResult (el: _Element): HoldCallResult {
    if (!_cached_decoder_for_HoldCallResult) { _cached_decoder_for_HoldCallResult = $._decode_inextensible_choice<HoldCallResult>({
    "APPLICATION 30": [ "extensions", _decode_CSTACommonArguments ],
    "UNIVERSAL 5": [ "noData", $._decodeNull ]
}); }
    return _cached_decoder_for_HoldCallResult(el);
}

let _cached_encoder_for_HoldCallResult: $.ASN1Encoder<HoldCallResult> | null = null;

/**
 * @summary Encodes a(n) HoldCallResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HoldCallResult, encoded as an ASN.1 Element.
 */
export
function _encode_HoldCallResult (value: HoldCallResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_HoldCallResult) { _cached_encoder_for_HoldCallResult = $._encode_choice<HoldCallResult>({
    "extensions": _encode_CSTACommonArguments,
    "noData": $._encodeNull,
}, $.BER); }
    return _cached_encoder_for_HoldCallResult(value, elGetter);
}


/* eslint-enable */
