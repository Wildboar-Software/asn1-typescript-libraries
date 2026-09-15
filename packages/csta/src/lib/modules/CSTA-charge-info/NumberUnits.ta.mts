/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "@wildboar/asn1";
import { NumberOfChargingUnits, _decode_NumberOfChargingUnits, _encode_NumberOfChargingUnits } from "../CSTA-charge-info/NumberOfChargingUnits.ta.mjs";

import { NumberOfCurrencyUnits, _decode_NumberOfCurrencyUnits, _encode_NumberOfCurrencyUnits } from "../CSTA-charge-info/NumberOfCurrencyUnits.ta.mjs";



/**
 * @summary NumberUnits
 * @description
 *
 * Either a list of charging-unit counts or a currency amount. ECMA-269 §12.2.7.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/ ECMA-269}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NumberUnits  ::=  CHOICE
 * {     numberOfChargeUnits         [0] IMPLICIT     NumberOfChargingUnits,
 *     numberOfCurrencyUnits         [1] IMPLICIT     NumberOfCurrencyUnits }
 * ```
 */
export
type NumberUnits =
    { numberOfChargeUnits: NumberOfChargingUnits } /* CHOICE_ALT_ROOT */
    | { numberOfCurrencyUnits: NumberOfCurrencyUnits } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_NumberUnits: $.ASN1Decoder<NumberUnits> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NumberUnits
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NumberUnits (el: _Element): NumberUnits {
    if (!_cached_decoder_for_NumberUnits) { _cached_decoder_for_NumberUnits = $._decode_inextensible_choice<NumberUnits>({
    "CONTEXT 0": [ "numberOfChargeUnits", $._decode_implicit<NumberOfChargingUnits>(() => _decode_NumberOfChargingUnits) ],
    "CONTEXT 1": [ "numberOfCurrencyUnits", $._decode_implicit<NumberOfCurrencyUnits>(() => _decode_NumberOfCurrencyUnits) ]
}); }
    return _cached_decoder_for_NumberUnits(el);
}

let _cached_encoder_for_NumberUnits: $.ASN1Encoder<NumberUnits> | null = null;

/**
 * @summary Encodes a(n) NumberUnits into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NumberUnits, encoded as an ASN.1 Element.
 */
export
function _encode_NumberUnits (value: NumberUnits, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NumberUnits) { _cached_encoder_for_NumberUnits = $._encode_choice<NumberUnits>({
    "numberOfChargeUnits": $._encode_implicit(_TagClass.context, 0, () => _encode_NumberOfChargingUnits, $.BER),
    "numberOfCurrencyUnits": $._encode_implicit(_TagClass.context, 1, () => _encode_NumberOfCurrencyUnits, $.BER),
}, $.BER); }
    return _cached_encoder_for_NumberUnits(value, elGetter);
}


/* eslint-enable */
