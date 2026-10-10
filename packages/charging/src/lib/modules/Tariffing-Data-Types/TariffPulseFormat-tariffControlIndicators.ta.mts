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
 * @summary TariffPulseFormat_tariffControlIndicators_non_cyclicTariff
 * @constant
 */
export
const TariffPulseFormat_tariffControlIndicators_non_cyclicTariff: number = 0; /* LONG_NAMED_BIT */

/**
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
