/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type PartyNumber, _decode_PartyNumber, _encode_PartyNumber } from "../Addressing-Data-Elements-asn1-97/PartyNumber.ta.mjs";
import { type AlternativeId, _decode_AlternativeId, _encode_AlternativeId } from "../Private-User-Mobility-Call-Handling-Operations-asn1-97/AlternativeId.ta.mjs";
import { PumIdentity_both, _decode_PumIdentity_both, _encode_PumIdentity_both } from "../Private-User-Mobility-Call-Handling-Operations-asn1-97/PumIdentity-both.ta.mjs";

/**
 * @summary PumIdentity
 * @description
 *
 * PISN number and/or alternative identifier of the PUM user (ECMA-284 §6.3.1,
 * §4.2). `pisnNumber` alone, `alternativeId` alone, or `both`. In a
 * `pumiEnquiry` result a PISN number is a complete number even when the enquiry
 * number was not (§6.5.3.1). On `pumoCall`, `alternativeId` is how the
 * Originating PINX identifies the user when the Calling party number does not
 * carry the PUM number (§7.5.1.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-284/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PumIdentity  ::=  CHOICE {
 *     pisnNumber PartyNumber,
 *     alternativeId [10] IMPLICIT AlternativeId,
 *     both [11] IMPLICIT SEQUENCE {
 *         pisnNumber PartyNumber,
 *         alternativeId AlternativeId
 *     }
 * }
 * ```
 */
export
type PumIdentity =
    { pisnNumber: PartyNumber } /* CHOICE_ALT_ROOT */
    | { alternativeId: AlternativeId } /* CHOICE_ALT_ROOT */
    | { both: PumIdentity_both } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_PumIdentity: $.ASN1Decoder<PumIdentity> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PumIdentity
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PumIdentity (el: _Element): PumIdentity {
    if (!_cached_decoder_for_PumIdentity) { _cached_decoder_for_PumIdentity = $._decode_inextensible_choice<PumIdentity>({
    "CONTEXT 0": [ "pisnNumber", _decode_PartyNumber ],
    "CONTEXT 1": [ "pisnNumber", _decode_PartyNumber ],
    "CONTEXT 3": [ "pisnNumber", _decode_PartyNumber ],
    "CONTEXT 4": [ "pisnNumber", _decode_PartyNumber ],
    "CONTEXT 5": [ "pisnNumber", _decode_PartyNumber ],
    "CONTEXT 8": [ "pisnNumber", _decode_PartyNumber ],
    "CONTEXT 10": [ "alternativeId", $._decode_implicit<AlternativeId>(() => _decode_AlternativeId) ],
    "CONTEXT 11": [ "both", $._decode_implicit<PumIdentity_both>(() => _decode_PumIdentity_both) ]
}); }
    return _cached_decoder_for_PumIdentity(el);
}

let _cached_encoder_for_PumIdentity: $.ASN1Encoder<PumIdentity> | null = null;

/**
 * @summary Encodes a(n) PumIdentity into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PumIdentity, encoded as an ASN.1 Element.
 */
export
function _encode_PumIdentity (value: PumIdentity, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PumIdentity) { _cached_encoder_for_PumIdentity = $._encode_choice<PumIdentity>({
    "pisnNumber": _encode_PartyNumber,
    "alternativeId": $._encode_implicit(_TagClass.context, 10, () => _encode_AlternativeId, $.BER),
    "both": $._encode_implicit(_TagClass.context, 11, () => _encode_PumIdentity_both, $.BER),
}, $.BER); }
    return _cached_encoder_for_PumIdentity(value, elGetter);
}

/* eslint-enable */
