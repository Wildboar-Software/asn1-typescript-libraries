/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { NULL, ASN1Element as _Element } from "@wildboar/asn1";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary SetSpeakerVolumeResult
 * @description
 *
 * Positive ack. `noData` if only the ROSE result is needed; `extensions`
 * carries `security`/`privateData`. ECMA-269 §21.1.23.2.1.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SetSpeakerVolumeResult  ::=  CHOICE
 * {    extensions             CSTACommonArguments,
 *     noData                 NULL }
 * ```
 */
export
type SetSpeakerVolumeResult =
    { extensions: CSTACommonArguments } /* CHOICE_ALT_ROOT */
    | { noData: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_SetSpeakerVolumeResult: $.ASN1Decoder<SetSpeakerVolumeResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SetSpeakerVolumeResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SetSpeakerVolumeResult (el: _Element): SetSpeakerVolumeResult {
    if (!_cached_decoder_for_SetSpeakerVolumeResult) { _cached_decoder_for_SetSpeakerVolumeResult = $._decode_inextensible_choice<SetSpeakerVolumeResult>({
    "APPLICATION 30": [ "extensions", _decode_CSTACommonArguments ],
    "UNIVERSAL 5": [ "noData", $._decodeNull ]
}); }
    return _cached_decoder_for_SetSpeakerVolumeResult(el);
}

let _cached_encoder_for_SetSpeakerVolumeResult: $.ASN1Encoder<SetSpeakerVolumeResult> | null = null;

/**
 * @summary Encodes a(n) SetSpeakerVolumeResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SetSpeakerVolumeResult, encoded as an ASN.1 Element.
 */
export
function _encode_SetSpeakerVolumeResult (value: SetSpeakerVolumeResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SetSpeakerVolumeResult) { _cached_encoder_for_SetSpeakerVolumeResult = $._encode_choice<SetSpeakerVolumeResult>({
    "extensions": _encode_CSTACommonArguments,
    "noData": $._encodeNull,
}, $.BER); }
    return _cached_encoder_for_SetSpeakerVolumeResult(value, elGetter);
}


/* eslint-enable */
