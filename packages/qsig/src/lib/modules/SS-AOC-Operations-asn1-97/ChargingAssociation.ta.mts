/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PartyNumber, _decode_PartyNumber, _encode_PartyNumber } from "../Addressing-Data-Elements-asn1-97/PartyNumber.ta.mjs";
import { ChargeIdentifier, _decode_ChargeIdentifier, _encode_ChargeIdentifier } from "../SS-AOC-Operations-asn1-97/ChargeIdentifier.ta.mjs";

/**
 * @summary ChargingAssociation
 * @description
 *
 * Information that ties final charge information to the call (ECMA-212 §4.2.6).
 * `chargeIdentifier` is an integer meaningful only to the user. `chargeNumber`
 * is a party number that is not evaluated as a directory number (ECMA-211
 * §9.2.1.5). When the element was present on `aocComplete` or
 * `aocDivChargeReq`, the same value is copied into `aocFinal` (ECMA-212
 * §6.6.2.3.1, §6.6.2.4.1). ECMA-211 §9.2.1.9 lists charged number and charge
 * identifier as separate optional elements; this module encodes them as
 * alternatives, so only one can be sent.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-212/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-211/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChargingAssociation  ::=  CHOICE {
 *     chargeNumber [0] PartyNumber,
 *     chargeIdentifier ChargeIdentifier
 * }
 * ```
 */
export
type ChargingAssociation =
    { chargeNumber: PartyNumber } /* CHOICE_ALT_ROOT */
    | { chargeIdentifier: ChargeIdentifier } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ChargingAssociation: $.ASN1Decoder<ChargingAssociation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ChargingAssociation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ChargingAssociation (el: _Element): ChargingAssociation {
    if (!_cached_decoder_for_ChargingAssociation) { _cached_decoder_for_ChargingAssociation = $._decode_inextensible_choice<ChargingAssociation>({
    "CONTEXT 0": [ "chargeNumber", $._decode_explicit<PartyNumber>(() => _decode_PartyNumber) ],
    "UNIVERSAL 2": [ "chargeIdentifier", _decode_ChargeIdentifier ]
}); }
    return _cached_decoder_for_ChargingAssociation(el);
}

let _cached_encoder_for_ChargingAssociation: $.ASN1Encoder<ChargingAssociation> | null = null;

/**
 * @summary Encodes a(n) ChargingAssociation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ChargingAssociation, encoded as an ASN.1 Element.
 */
export
function _encode_ChargingAssociation (value: ChargingAssociation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ChargingAssociation) { _cached_encoder_for_ChargingAssociation = $._encode_choice<ChargingAssociation>({
    "chargeNumber": $._encode_explicit(_TagClass.context, 0, () => _encode_PartyNumber, $.BER),
    "chargeIdentifier": _encode_ChargeIdentifier,
}, $.BER); }
    return _cached_encoder_for_ChargingAssociation(value, elGetter);
}

/* eslint-enable */
