/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { NULL, ASN1Element as _Element } from "@wildboar/asn1";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary SetSpeakerMuteResult
 * @description
 *
 * Positive ack. `noData` if only the ROSE result is needed; `extensions`
 * carries `security`/`privateData`. ECMA-269 §21.1.22.2.1.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SetSpeakerMuteResult  ::=  CHOICE
 * {    extensions             CSTACommonArguments,
 *     noData                 NULL }
 * ```
 */
export
type SetSpeakerMuteResult =
    { extensions: CSTACommonArguments } /* CHOICE_ALT_ROOT */
    | { noData: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_SetSpeakerMuteResult: $.ASN1Decoder<SetSpeakerMuteResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SetSpeakerMuteResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SetSpeakerMuteResult (el: _Element): SetSpeakerMuteResult {
    if (!_cached_decoder_for_SetSpeakerMuteResult) { _cached_decoder_for_SetSpeakerMuteResult = $._decode_inextensible_choice<SetSpeakerMuteResult>({
    "APPLICATION 30": [ "extensions", _decode_CSTACommonArguments ],
    "UNIVERSAL 5": [ "noData", $._decodeNull ]
}); }
    return _cached_decoder_for_SetSpeakerMuteResult(el);
}

let _cached_encoder_for_SetSpeakerMuteResult: $.ASN1Encoder<SetSpeakerMuteResult> | null = null;

/**
 * @summary Encodes a(n) SetSpeakerMuteResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SetSpeakerMuteResult, encoded as an ASN.1 Element.
 */
export
function _encode_SetSpeakerMuteResult (value: SetSpeakerMuteResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SetSpeakerMuteResult) { _cached_encoder_for_SetSpeakerMuteResult = $._encode_choice<SetSpeakerMuteResult>({
    "extensions": _encode_CSTACommonArguments,
    "noData": $._encodeNull,
}, $.BER); }
    return _cached_encoder_for_SetSpeakerMuteResult(value, elGetter);
}


/* eslint-enable */
