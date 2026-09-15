/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { NULL, ASN1Element as _Element } from "@wildboar/asn1";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary SetVoiceAttributeResult
 * @description
 *
 * Positive acknowledgement is `extensions` or empty `noData` (atomic
 * acknowledgement model). (ECMA-269 §26.1.13.2.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SetVoiceAttributeResult  ::=  CHOICE
 * {    extensions            CSTACommonArguments,
 *     noData                NULL }
 * ```
 */
export
type SetVoiceAttributeResult =
    { extensions: CSTACommonArguments } /* CHOICE_ALT_ROOT */
    | { noData: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_SetVoiceAttributeResult: $.ASN1Decoder<SetVoiceAttributeResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SetVoiceAttributeResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SetVoiceAttributeResult (el: _Element): SetVoiceAttributeResult {
    if (!_cached_decoder_for_SetVoiceAttributeResult) { _cached_decoder_for_SetVoiceAttributeResult = $._decode_inextensible_choice<SetVoiceAttributeResult>({
    "APPLICATION 30": [ "extensions", _decode_CSTACommonArguments ],
    "UNIVERSAL 5": [ "noData", $._decodeNull ]
}); }
    return _cached_decoder_for_SetVoiceAttributeResult(el);
}

let _cached_encoder_for_SetVoiceAttributeResult: $.ASN1Encoder<SetVoiceAttributeResult> | null = null;

/**
 * @summary Encodes a(n) SetVoiceAttributeResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SetVoiceAttributeResult, encoded as an ASN.1 Element.
 */
export
function _encode_SetVoiceAttributeResult (value: SetVoiceAttributeResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SetVoiceAttributeResult) { _cached_encoder_for_SetVoiceAttributeResult = $._encode_choice<SetVoiceAttributeResult>({
    "extensions": _encode_CSTACommonArguments,
    "noData": $._encodeNull,
}, $.BER); }
    return _cached_encoder_for_SetVoiceAttributeResult(value, elGetter);
}


/* eslint-enable */
