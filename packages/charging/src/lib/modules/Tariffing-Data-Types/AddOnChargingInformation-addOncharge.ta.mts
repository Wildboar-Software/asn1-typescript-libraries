/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CurrencyFactorScale, _decode_CurrencyFactorScale, _encode_CurrencyFactorScale } from "../Tariffing-Data-Types/CurrencyFactorScale.ta.mjs";
// export { CurrencyFactorScale, _decode_CurrencyFactorScale, _encode_CurrencyFactorScale } from "../Tariffing-Data-Types/CurrencyFactorScale.ta.mjs";
import { PulseUnits, _decode_PulseUnits, _encode_PulseUnits } from "../Tariffing-Data-Types/PulseUnits.ta.mjs";
// export { PulseUnits, _decode_PulseUnits, _encode_PulseUnits } from "../Tariffing-Data-Types/PulseUnits.ta.mjs";


/**
 * @summary AddOnChargingInformation_addOncharge
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AddOnChargingInformation-addOncharge ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type AddOnChargingInformation_addOncharge =
    { addOnChargeCurrency: CurrencyFactorScale } /* CHOICE_ALT_ROOT */
    | { addOnChargePulse: PulseUnits } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_AddOnChargingInformation_addOncharge: $.ASN1Decoder<AddOnChargingInformation_addOncharge> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AddOnChargingInformation_addOncharge
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AddOnChargingInformation_addOncharge (el: _Element): AddOnChargingInformation_addOncharge {
    if (!_cached_decoder_for_AddOnChargingInformation_addOncharge) { _cached_decoder_for_AddOnChargingInformation_addOncharge = $._decode_inextensible_choice<AddOnChargingInformation_addOncharge>({
    "CONTEXT 0": [ "addOnChargeCurrency", $._decode_implicit<CurrencyFactorScale>(() => _decode_CurrencyFactorScale) ],
    "CONTEXT 1": [ "addOnChargePulse", $._decode_implicit<PulseUnits>(() => _decode_PulseUnits) ]
}); }
    return _cached_decoder_for_AddOnChargingInformation_addOncharge(el);
}

let _cached_encoder_for_AddOnChargingInformation_addOncharge: $.ASN1Encoder<AddOnChargingInformation_addOncharge> | null = null;

/**
 * @summary Encodes a(n) AddOnChargingInformation_addOncharge into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AddOnChargingInformation_addOncharge, encoded as an ASN.1 Element.
 */
export
function _encode_AddOnChargingInformation_addOncharge (value: AddOnChargingInformation_addOncharge, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AddOnChargingInformation_addOncharge) { _cached_encoder_for_AddOnChargingInformation_addOncharge = $._encode_choice<AddOnChargingInformation_addOncharge>({
    "addOnChargeCurrency": $._encode_implicit(_TagClass.context, 0, () => _encode_CurrencyFactorScale, $.BER),
    "addOnChargePulse": $._encode_implicit(_TagClass.context, 1, () => _encode_PulseUnits, $.BER),
}, $.BER); }
    return _cached_encoder_for_AddOnChargingInformation_addOncharge(value, elGetter);
}


/* eslint-enable */
