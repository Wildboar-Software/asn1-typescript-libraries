/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { NULL, ASN1Element as _Element } from "@wildboar/asn1";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary SetMicrophoneGainResult
 * @description
 *
 * Positive ack. `noData` if only the ROSE result is needed; `extensions`
 * carries `security`/`privateData`. ECMA-269 §21.1.19.2.1.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SetMicrophoneGainResult  ::=  CHOICE
 * {    extensions             CSTACommonArguments,
 *     noData                 NULL }
 * ```
 */
export
type SetMicrophoneGainResult =
    { extensions: CSTACommonArguments } /* CHOICE_ALT_ROOT */
    | { noData: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_SetMicrophoneGainResult: $.ASN1Decoder<SetMicrophoneGainResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SetMicrophoneGainResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SetMicrophoneGainResult (el: _Element): SetMicrophoneGainResult {
    if (!_cached_decoder_for_SetMicrophoneGainResult) { _cached_decoder_for_SetMicrophoneGainResult = $._decode_inextensible_choice<SetMicrophoneGainResult>({
    "APPLICATION 30": [ "extensions", _decode_CSTACommonArguments ],
    "UNIVERSAL 5": [ "noData", $._decodeNull ]
}); }
    return _cached_decoder_for_SetMicrophoneGainResult(el);
}

let _cached_encoder_for_SetMicrophoneGainResult: $.ASN1Encoder<SetMicrophoneGainResult> | null = null;

/**
 * @summary Encodes a(n) SetMicrophoneGainResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SetMicrophoneGainResult, encoded as an ASN.1 Element.
 */
export
function _encode_SetMicrophoneGainResult (value: SetMicrophoneGainResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SetMicrophoneGainResult) { _cached_encoder_for_SetMicrophoneGainResult = $._encode_choice<SetMicrophoneGainResult>({
    "extensions": _encode_CSTACommonArguments,
    "noData": $._encodeNull,
}, $.BER); }
    return _cached_encoder_for_SetMicrophoneGainResult(value, elGetter);
}


/* eslint-enable */
