/* eslint-disable */
import {
    NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { DurationCurrency, _decode_DurationCurrency, _encode_DurationCurrency } from "../SS-AOC-Operations-asn1-97/DurationCurrency.ta.mjs";
import { FlatRateCurrency, _decode_FlatRateCurrency, _encode_FlatRateCurrency } from "../SS-AOC-Operations-asn1-97/FlatRateCurrency.ta.mjs";
import { VolumeRateCurrency, _decode_VolumeRateCurrency, _encode_VolumeRateCurrency } from "../SS-AOC-Operations-asn1-97/VolumeRateCurrency.ta.mjs";
import { SpecialChargingCode, _decode_SpecialChargingCode, _encode_SpecialChargingCode } from "../SS-AOC-Operations-asn1-97/SpecialChargingCode.ta.mjs";

/**
 * @summary AOCSCurrencyInfo_rateType
 * @description
 *
 * Rate for the accompanying charged item (ECMA-211 §A.1.3). `durationCurrency`
 * is a price per time unit (§A.1.3.1). `flatRateCurrency` is a fixed currency
 * value per event (§A.1.3.3). `volumeRateCurrency` is a price per volume unit
 * (§A.1.3.2). `specialChargingCode` is an integer 1..10 identifying a charging
 * algorithm; the algorithm is outside this standard (§A.1.3.3). `freeOfCharge`
 * means no further charge for that item from receipt of this rate.
 * `freeOfChargefromBeginning` means no charge even if a rate was sent earlier,
 * and is reserved for basic communication (table 2 note 3, §6.2.2.2).
 * `currencyInfoNotAvailable` means the rate is not available and no reason is
 * given (§A.1.3.3); do not treat it as free of charge (§6.2.3.2).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-212/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-211/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AOCSCurrencyInfo-rateType ::= CHOICE {
 *     durationCurrency [1] IMPLICIT DurationCurrency,
 *     flatRateCurrency [2] IMPLICIT FlatRateCurrency,
 *     volumeRateCurrency [3] IMPLICIT VolumeRateCurrency,
 *     specialChargingCode SpecialChargingCode,
 *     freeOfCharge [4] IMPLICIT NULL,
 *     currencyInfoNotAvailable [5] IMPLICIT NULL,
 *     freeOfChargefromBeginning [6] IMPLICIT NULL
 * }
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
