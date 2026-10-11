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
 * @summary TariffPulseFormat_tariffControlIndicators
 * @description
 *
 * What happens when the last pulse subtariff's duration expires.
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
 * TariffPulseFormat-tariffControlIndicators ::= BIT STRING {
 *     non-cyclicTariff (0)
 * } (SIZE(minTariffIndicatorsLen..maxTariffIndicatorsLen))
 * ```
 */
export
type TariffPulseFormat_tariffControlIndicators = BIT_STRING;

/**
 * Bit 0 of {@link TariffPulseFormat_tariffControlIndicators}.
 * `0` repeats the pulse communication sequence. `1` does not.
 * @summary TariffPulseFormat_tariffControlIndicators_non_cyclicTariff
 * @constant
 */
export
const TariffPulseFormat_tariffControlIndicators_non_cyclicTariff: number = 0; /* LONG_NAMED_BIT */

/**
 * Bit 0 of {@link TariffPulseFormat_tariffControlIndicators}.
 * `0` repeats the pulse communication sequence. `1` does not.
 * The barrel exports the long name; this short name collides with
 * the currency-format bit.
 * @summary non_cyclicTariff
 * @constant
 */
export
const non_cyclicTariff: number = TariffPulseFormat_tariffControlIndicators_non_cyclicTariff; /* SHORT_NAMED_BIT */
export const _decode_TariffPulseFormat_tariffControlIndicators = (el: _Element): TariffPulseFormat_tariffControlIndicators => {
    const value = $._decodeBitString(el);
    if (value.length < Number(minTariffIndicatorsLen) || value.length > Number(maxTariffIndicatorsLen)) {
        throw new ASN1SizeError("TariffPulseFormat.tariffControlIndicators violates SIZE constraint");
    }
    return value;
};
export const _encode_TariffPulseFormat_tariffControlIndicators = $._encodeBitString;


/* eslint-enable */
