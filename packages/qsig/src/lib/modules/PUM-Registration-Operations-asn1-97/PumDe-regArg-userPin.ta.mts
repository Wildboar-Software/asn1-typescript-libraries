/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type UserPin, _decode_UserPin, _encode_UserPin } from "../PUM-Registration-Operations-asn1-97/UserPin.ta.mjs";

/**
 * @summary PumDe_regArg_userPin
 * @description
 *
 * PIN on `pumDe-reg` (ECMA-282 §6.3.1). `activatingUserPin` is the PIN supplied
 * by the activating user (§6.6.1.1 and §6.6.4.1, which call the element
 * activatingUserPIN). `pumUserPin` is the PUM user's PIN. §6.6 is silent on
 * when that alternative is sent. The octet encoding is not specified.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-282/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PumDe-regArg-userPin ::= CHOICE {
 *     pumUserPin [6] IMPLICIT UserPin,
 *     activatingUserPin [7] IMPLICIT UserPin
 * }
 * ```
 */
export
type PumDe_regArg_userPin =
    { pumUserPin: UserPin } /* CHOICE_ALT_ROOT */
    | { activatingUserPin: UserPin } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_PumDe_regArg_userPin: $.ASN1Decoder<PumDe_regArg_userPin> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PumDe_regArg_userPin
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PumDe_regArg_userPin (el: _Element): PumDe_regArg_userPin {
    if (!_cached_decoder_for_PumDe_regArg_userPin) { _cached_decoder_for_PumDe_regArg_userPin = $._decode_inextensible_choice<PumDe_regArg_userPin>({
    "CONTEXT 6": [ "pumUserPin", $._decode_implicit<UserPin>(() => _decode_UserPin) ],
    "CONTEXT 7": [ "activatingUserPin", $._decode_implicit<UserPin>(() => _decode_UserPin) ]
}); }
    return _cached_decoder_for_PumDe_regArg_userPin(el);
}

let _cached_encoder_for_PumDe_regArg_userPin: $.ASN1Encoder<PumDe_regArg_userPin> | null = null;

/**
 * @summary Encodes a(n) PumDe_regArg_userPin into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PumDe_regArg_userPin, encoded as an ASN.1 Element.
 */
export
function _encode_PumDe_regArg_userPin (value: PumDe_regArg_userPin, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PumDe_regArg_userPin) { _cached_encoder_for_PumDe_regArg_userPin = $._encode_choice<PumDe_regArg_userPin>({
    "pumUserPin": $._encode_implicit(_TagClass.context, 6, () => _encode_UserPin, $.BER),
    "activatingUserPin": $._encode_implicit(_TagClass.context, 7, () => _encode_UserPin, $.BER),
}, $.BER); }
    return _cached_encoder_for_PumDe_regArg_userPin(value, elGetter);
}

/* eslint-enable */
