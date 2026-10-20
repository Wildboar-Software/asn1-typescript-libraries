/* eslint-disable */
import {
    NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { DurationCurrency, _decode_DurationCurrency, _encode_DurationCurrency } from "../SS-AOC-Operations-asn1-97/DurationCurrency.ta.mjs";
// export { DurationCurrency, _decode_DurationCurrency, _encode_DurationCurrency } from "../SS-AOC-Operations-asn1-97/DurationCurrency.ta.mjs";
import { FlatRateCurrency, _decode_FlatRateCurrency, _encode_FlatRateCurrency } from "../SS-AOC-Operations-asn1-97/FlatRateCurrency.ta.mjs";
// export { FlatRateCurrency, _decode_FlatRateCurrency, _encode_FlatRateCurrency } from "../SS-AOC-Operations-asn1-97/FlatRateCurrency.ta.mjs";
import { VolumeRateCurrency, _decode_VolumeRateCurrency, _encode_VolumeRateCurrency } from "../SS-AOC-Operations-asn1-97/VolumeRateCurrency.ta.mjs";
// export { VolumeRateCurrency, _decode_VolumeRateCurrency, _encode_VolumeRateCurrency } from "../SS-AOC-Operations-asn1-97/VolumeRateCurrency.ta.mjs";
import { SpecialChargingCode, _decode_SpecialChargingCode, _encode_SpecialChargingCode } from "../SS-AOC-Operations-asn1-97/SpecialChargingCode.ta.mjs";
// export { SpecialChargingCode, _decode_SpecialChargingCode, _encode_SpecialChargingCode } from "../SS-AOC-Operations-asn1-97/SpecialChargingCode.ta.mjs";


/**
 * @summary AOCSCurrencyInfo_rateType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AOCSCurrencyInfo-rateType ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type AOCSCurrencyInfo_rateType =
    { durationCurrency: DurationCurrency } /* CHOICE_ALT_ROOT */
    | { flatRateCurrency: FlatRateCurrency } /* CHOICE_ALT_ROOT */
    | { volumeRateCurrency: VolumeRateCurrency } /* CHOICE_ALT_ROOT */
    | { specialChargingCode: SpecialChargingCode } /* CHOICE_ALT_ROOT */
    | { freeOfCharge: NULL } /* CHOICE_ALT_ROOT */
    | { currencyInfoNotAvailable: NULL } /* CHOICE_ALT_ROOT */
    | { freeOfChargefromBeginning: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_AOCSCurrencyInfo_rateType: $.ASN1Decoder<AOCSCurrencyInfo_rateType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AOCSCurrencyInfo_rateType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AOCSCurrencyInfo_rateType (el: _Element): AOCSCurrencyInfo_rateType {
    if (!_cached_decoder_for_AOCSCurrencyInfo_rateType) { _cached_decoder_for_AOCSCurrencyInfo_rateType = $._decode_inextensible_choice<AOCSCurrencyInfo_rateType>({
    "CONTEXT 1": [ "durationCurrency", $._decode_implicit<DurationCurrency>(() => _decode_DurationCurrency) ],
    "CONTEXT 2": [ "flatRateCurrency", $._decode_implicit<FlatRateCurrency>(() => _decode_FlatRateCurrency) ],
    "CONTEXT 3": [ "volumeRateCurrency", $._decode_implicit<VolumeRateCurrency>(() => _decode_VolumeRateCurrency) ],
    "UNIVERSAL 2": [ "specialChargingCode", _decode_SpecialChargingCode ],
    "CONTEXT 4": [ "freeOfCharge", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 5": [ "currencyInfoNotAvailable", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 6": [ "freeOfChargefromBeginning", $._decode_implicit<NULL>(() => $._decodeNull) ]
}); }
    return _cached_decoder_for_AOCSCurrencyInfo_rateType(el);
}

let _cached_encoder_for_AOCSCurrencyInfo_rateType: $.ASN1Encoder<AOCSCurrencyInfo_rateType> | null = null;

/**
 * @summary Encodes a(n) AOCSCurrencyInfo_rateType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AOCSCurrencyInfo_rateType, encoded as an ASN.1 Element.
 */
export
function _encode_AOCSCurrencyInfo_rateType (value: AOCSCurrencyInfo_rateType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AOCSCurrencyInfo_rateType) { _cached_encoder_for_AOCSCurrencyInfo_rateType = $._encode_choice<AOCSCurrencyInfo_rateType>({
    "durationCurrency": $._encode_implicit(_TagClass.context, 1, () => _encode_DurationCurrency, $.BER),
    "flatRateCurrency": $._encode_implicit(_TagClass.context, 2, () => _encode_FlatRateCurrency, $.BER),
    "volumeRateCurrency": $._encode_implicit(_TagClass.context, 3, () => _encode_VolumeRateCurrency, $.BER),
    "specialChargingCode": _encode_SpecialChargingCode,
    "freeOfCharge": $._encode_implicit(_TagClass.context, 4, () => $._encodeNull, $.BER),
    "currencyInfoNotAvailable": $._encode_implicit(_TagClass.context, 5, () => $._encodeNull, $.BER),
    "freeOfChargefromBeginning": $._encode_implicit(_TagClass.context, 6, () => $._encodeNull, $.BER),
}, $.BER); }
    return _cached_encoder_for_AOCSCurrencyInfo_rateType(value, elGetter);
}


/* eslint-enable */
