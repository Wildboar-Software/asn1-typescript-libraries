/* eslint-disable */
import {
    ASN1Element as _Element,
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TariffPulseFormat_tariffControlIndicators
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TariffPulseFormat-tariffControlIndicators ::= BIT STRING { -- REMOVED_FROM_UNNESTING -- }
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
export const _decode_TariffPulseFormat_tariffControlIndicators = $._decodeBitString;
export const _encode_TariffPulseFormat_tariffControlIndicators = $._encodeBitString;


/* eslint-enable */
