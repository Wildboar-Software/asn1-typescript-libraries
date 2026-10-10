/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { maxTariffIndicatorsLen } from "../Tariffing-Data-Types/maxTariffIndicatorsLen.va.mjs";
import { minTariffIndicatorsLen } from "../Tariffing-Data-Types/minTariffIndicatorsLen.va.mjs";



/**
 * @summary TariffCurrencyFormat_tariffControlIndicators
 * @description
 *
 * What happens when the last currency subtariff's duration expires.
 *
 * `non-cyclicTariff` (bit 0):
 *
 * - `0`: cyclic. Apply the communication-charge sequence again.
 * - `1`: non-cyclic. Do not apply it again.
 *
 * If it is not applied again, the network either continues the call
 * free of charge or releases it (table 1, clause 6.3.1.4 c).
 *
 * [ES 201 296 V1.3.1, clauses 6.3.1.4 and 9](https://www.etsi.org/deliver/etsi_es/201200_201299/201296/01.03.01_60/es_201296v010301p.pdf).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TariffCurrencyFormat-tariffControlIndicators ::= BIT STRING {
 *     non-cyclicTariff (0)
 * } (SIZE(minTariffIndicatorsLen..maxTariffIndicatorsLen))
 * ```
 */
export
type TariffCurrencyFormat_tariffControlIndicators = BIT_STRING;

/**
 * Bit 0 of {@link TariffCurrencyFormat_tariffControlIndicators}.
 * `0` repeats the currency communication sequence. `1` does not.
 * @summary TariffCurrencyFormat_tariffControlIndicators_non_cyclicTariff
 * @constant
 */
export
const TariffCurrencyFormat_tariffControlIndicators_non_cyclicTariff: number = 0; /* LONG_NAMED_BIT */

/**
 * Bit 0 of {@link TariffCurrencyFormat_tariffControlIndicators}.
 * `0` repeats the currency communication sequence. `1` does not.
 * The barrel exports the long name; this short name collides with
 * the pulse-format bit.
 * @summary non_cyclicTariff
 * @constant
 */
export
const non_cyclicTariff: number = TariffCurrencyFormat_tariffControlIndicators_non_cyclicTariff; /* SHORT_NAMED_BIT */
export const _decode_TariffCurrencyFormat_tariffControlIndicators = (el: _Element): TariffCurrencyFormat_tariffControlIndicators => {
    const value = $._decodeBitString(el);
    if (value.length < Number(minTariffIndicatorsLen) || value.length > Number(maxTariffIndicatorsLen)) {
        throw new ASN1SizeError("TariffCurrencyFormat.tariffControlIndicators violates SIZE constraint");
    }
    return value;
};
export const _encode_TariffCurrencyFormat_tariffControlIndicators = $._encodeBitString;


/* eslint-enable */
