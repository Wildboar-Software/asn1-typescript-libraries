/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { NULL, ASN1Element as _Element } from "@wildboar/asn1";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary SetCallerIDStatusResult
 * @description
 *
 * Positive ack. `noData` if only the ROSE result is needed; `extensions`
 * carries `security`/`privateData`. ECMA-269 §22.1.18.2.1.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SetCallerIDStatusResult   ::=  CHOICE
 * {    extensions             CSTACommonArguments,
 *     noData                 NULL }
 * ```
 */
export
type SetCallerIDStatusResult =
    { extensions: CSTACommonArguments } /* CHOICE_ALT_ROOT */
    | { noData: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_SetCallerIDStatusResult: $.ASN1Decoder<SetCallerIDStatusResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SetCallerIDStatusResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SetCallerIDStatusResult (el: _Element): SetCallerIDStatusResult {
    if (!_cached_decoder_for_SetCallerIDStatusResult) { _cached_decoder_for_SetCallerIDStatusResult = $._decode_inextensible_choice<SetCallerIDStatusResult>({
    "APPLICATION 30": [ "extensions", _decode_CSTACommonArguments ],
    "UNIVERSAL 5": [ "noData", $._decodeNull ]
}); }
    return _cached_decoder_for_SetCallerIDStatusResult(el);
}

let _cached_encoder_for_SetCallerIDStatusResult: $.ASN1Encoder<SetCallerIDStatusResult> | null = null;

/**
 * @summary Encodes a(n) SetCallerIDStatusResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SetCallerIDStatusResult, encoded as an ASN.1 Element.
 */
export
function _encode_SetCallerIDStatusResult (value: SetCallerIDStatusResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SetCallerIDStatusResult) { _cached_encoder_for_SetCallerIDStatusResult = $._encode_choice<SetCallerIDStatusResult>({
    "extensions": _encode_CSTACommonArguments,
    "noData": $._encodeNull,
}, $.BER); }
    return _cached_encoder_for_SetCallerIDStatusResult(value, elGetter);
}


/* eslint-enable */
