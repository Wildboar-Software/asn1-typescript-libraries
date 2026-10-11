/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TariffCurrency, _decode_TariffCurrency, _encode_TariffCurrency } from "../Tariffing-Data-Types/TariffCurrency.ta.mjs";
import { TariffPulse, _decode_TariffPulse, _encode_TariffPulse } from "../Tariffing-Data-Types/TariffPulse.ta.mjs";


/**
 * @summary ChargingTariffInformation_chargingTariff
 * @description
 *
 * The tariff in a CRGT, either currency or meter pulses. Every
 * charging message for one call uses the format of the first CRGT,
 * or of the first AOCRG if that came first. A later message in the
 * other format is not accepted (clause 6.3.9). Pulse and currency
 * are not converted by this specification; the value of one pulse
 * is a bilateral agreement (clause 6.1 c).
 *
 * [ES 201 296 V1.3.1, clauses 6.1 c and 9](https://www.etsi.org/deliver/etsi_es/201200_201299/201296/01.03.01_60/es_201296v010301p.pdf).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChargingTariffInformation-chargingTariff ::= CHOICE {
 *     tariffCurrency [0] TariffCurrency,
 *     tariffPulse [1] TariffPulse
 * }
 * ```
 */
export
type ChargingTariffInformation_chargingTariff =
    { tariffCurrency: TariffCurrency } /* CHOICE_ALT_ROOT */
    | { tariffPulse: TariffPulse } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ChargingTariffInformation_chargingTariff: $.ASN1Decoder<ChargingTariffInformation_chargingTariff> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ChargingTariffInformation_chargingTariff
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ChargingTariffInformation_chargingTariff (el: _Element): ChargingTariffInformation_chargingTariff {
    if (!_cached_decoder_for_ChargingTariffInformation_chargingTariff) { _cached_decoder_for_ChargingTariffInformation_chargingTariff = $._decode_inextensible_choice<ChargingTariffInformation_chargingTariff>({
    "CONTEXT 0": [ "tariffCurrency", $._decode_implicit<TariffCurrency>(() => _decode_TariffCurrency) ],
    "CONTEXT 1": [ "tariffPulse", $._decode_implicit<TariffPulse>(() => _decode_TariffPulse) ]
}); }
    return _cached_decoder_for_ChargingTariffInformation_chargingTariff(el);
}

let _cached_encoder_for_ChargingTariffInformation_chargingTariff: $.ASN1Encoder<ChargingTariffInformation_chargingTariff> | null = null;

/**
 * @summary Encodes a(n) ChargingTariffInformation_chargingTariff into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ChargingTariffInformation_chargingTariff, encoded as an ASN.1 Element.
 */
export
function _encode_ChargingTariffInformation_chargingTariff (value: ChargingTariffInformation_chargingTariff, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ChargingTariffInformation_chargingTariff) { _cached_encoder_for_ChargingTariffInformation_chargingTariff = $._encode_choice<ChargingTariffInformation_chargingTariff>({
    "tariffCurrency": $._encode_implicit(_TagClass.context, 0, () => _encode_TariffCurrency, $.BER),
    "tariffPulse": $._encode_implicit(_TagClass.context, 1, () => _encode_TariffPulse, $.BER),
}, $.BER); }
    return _cached_encoder_for_ChargingTariffInformation_chargingTariff(value, elGetter);
}


/* eslint-enable */
