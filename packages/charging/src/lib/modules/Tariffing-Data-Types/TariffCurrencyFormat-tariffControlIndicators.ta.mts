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
 * @summary TariffCurrencyFormat_tariffControlIndicators_non_cyclicTariff
 * @constant
 */
export
const TariffCurrencyFormat_tariffControlIndicators_non_cyclicTariff: number = 0; /* LONG_NAMED_BIT */

/**
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
