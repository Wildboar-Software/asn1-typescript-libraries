/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { P_AbortCause, _decode_P_AbortCause, _encode_P_AbortCause } from "../Dialog-Service-Pdus-asn1-97/P-AbortCause.ta.mjs";
// export { P_AbortCause, _decode_P_AbortCause, _encode_P_AbortCause } from "../Dialog-Service-Pdus-asn1-97/P-AbortCause.ta.mjs";
import { UserAbortInformation, _decode_UserAbortInformation, _encode_UserAbortInformation } from "../Dialog-Service-Pdus-asn1-97/UserAbortInformation.ta.mjs";
// export { UserAbortInformation, _decode_UserAbortInformation, _encode_UserAbortInformation } from "../Dialog-Service-Pdus-asn1-97/UserAbortInformation.ta.mjs";


/**
 * @summary DialogAbortPDU_abortChoice
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DialogAbortPDU-abortChoice ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type DialogAbortPDU_abortChoice =
    { p_AbortCause: P_AbortCause } /* CHOICE_ALT_ROOT */
    | { userAbortInformation: UserAbortInformation } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_DialogAbortPDU_abortChoice: $.ASN1Decoder<DialogAbortPDU_abortChoice> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DialogAbortPDU_abortChoice
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DialogAbortPDU_abortChoice (el: _Element): DialogAbortPDU_abortChoice {
    if (!_cached_decoder_for_DialogAbortPDU_abortChoice) { _cached_decoder_for_DialogAbortPDU_abortChoice = $._decode_inextensible_choice<DialogAbortPDU_abortChoice>({
    "CONTEXT 2": [ "p_AbortCause", _decode_P_AbortCause ],
    "CONTEXT 3": [ "userAbortInformation", _decode_UserAbortInformation ]
}); }
    return _cached_decoder_for_DialogAbortPDU_abortChoice(el);
}

let _cached_encoder_for_DialogAbortPDU_abortChoice: $.ASN1Encoder<DialogAbortPDU_abortChoice> | null = null;

/**
 * @summary Encodes a(n) DialogAbortPDU_abortChoice into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DialogAbortPDU_abortChoice, encoded as an ASN.1 Element.
 */
export
function _encode_DialogAbortPDU_abortChoice (value: DialogAbortPDU_abortChoice, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DialogAbortPDU_abortChoice) { _cached_encoder_for_DialogAbortPDU_abortChoice = $._encode_choice<DialogAbortPDU_abortChoice>({
    "p_AbortCause": $._encode_implicit(_TagClass.context, 2, () => _encode_P_AbortCause, $.BER),
    "userAbortInformation": $._encode_implicit(_TagClass.context, 3, () => _encode_UserAbortInformation, $.BER),
}, $.BER); }
    return _cached_encoder_for_DialogAbortPDU_abortChoice(value, elGetter);
}


/* eslint-enable */
