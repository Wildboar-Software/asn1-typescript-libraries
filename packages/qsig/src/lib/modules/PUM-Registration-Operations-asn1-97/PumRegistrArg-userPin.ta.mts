/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { UserPin, _decode_UserPin, _encode_UserPin } from "../PUM-Registration-Operations-asn1-97/UserPin.ta.mjs";
// export { UserPin, _decode_UserPin, _encode_UserPin } from "../PUM-Registration-Operations-asn1-97/UserPin.ta.mjs";


/**
 * @summary PumRegistrArg_userPin
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PumRegistrArg-userPin ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type PumRegistrArg_userPin =
    { pumUserPin: UserPin } /* CHOICE_ALT_ROOT */
    | { activatingUserPin: UserPin } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_PumRegistrArg_userPin: $.ASN1Decoder<PumRegistrArg_userPin> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PumRegistrArg_userPin
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PumRegistrArg_userPin (el: _Element): PumRegistrArg_userPin {
    if (!_cached_decoder_for_PumRegistrArg_userPin) { _cached_decoder_for_PumRegistrArg_userPin = $._decode_inextensible_choice<PumRegistrArg_userPin>({
    "CONTEXT 6": [ "pumUserPin", $._decode_implicit<UserPin>(() => _decode_UserPin) ],
    "CONTEXT 7": [ "activatingUserPin", $._decode_implicit<UserPin>(() => _decode_UserPin) ]
}); }
    return _cached_decoder_for_PumRegistrArg_userPin(el);
}

let _cached_encoder_for_PumRegistrArg_userPin: $.ASN1Encoder<PumRegistrArg_userPin> | null = null;

/**
 * @summary Encodes a(n) PumRegistrArg_userPin into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PumRegistrArg_userPin, encoded as an ASN.1 Element.
 */
export
function _encode_PumRegistrArg_userPin (value: PumRegistrArg_userPin, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PumRegistrArg_userPin) { _cached_encoder_for_PumRegistrArg_userPin = $._encode_choice<PumRegistrArg_userPin>({
    "pumUserPin": $._encode_implicit(_TagClass.context, 6, () => _encode_UserPin, $.BER),
    "activatingUserPin": $._encode_implicit(_TagClass.context, 7, () => _encode_UserPin, $.BER),
}, $.BER); }
    return _cached_encoder_for_PumRegistrArg_userPin(value, elGetter);
}


/* eslint-enable */
