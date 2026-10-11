/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { maxAcknowledgementIndicatorsLen } from "../Tariffing-Data-Types/maxAcknowledgementIndicatorsLen.va.mjs";
import { minAcknowledgementIndicatorsLen } from "../Tariffing-Data-Types/minAcknowledgementIndicatorsLen.va.mjs";



/**
 * @summary ChargingAcknowledgementInformation_acknowledgementIndicators
 * @description
 *
 * Whether the registration or generation point accepted the CRGT,
 * AOCRG, START, or STOP.
 *
 * `accepted` (bit 0):
 *
 * - `0`: not accepted.
 * - `1`: accepted.
 *
 * Clause 6.3.9 names the rejection causes. For CRGT they include a
 * missing current tariff on the first message, a next tariff
 * without its switch-over time or the reverse, a format other than
 * the one established by the first CRGT or AOCRG, an unrecognized
 * tariff value, more than six networks, a bad or unallocated
 * identifier pair, and an unknown network or one with no bilateral
 * agreement. AOCRG is also rejected before start of charging.
 * START is rejected for an ASN.1 error, if Answer has not been
 * received, or for the same network checks. STOP is rejected for an
 * ASN.1 error or those network checks. Clause 6.3.9 c and d say the
 * negative START or STOP reply is an AOCRG response; clause 6.3.6
 * and table 2 say it is a START or STOP response.
 *
 * [ES 201 296 V1.3.1, clauses 6.3.9 and 9](https://www.etsi.org/deliver/etsi_es/201200_201299/201296/01.03.01_60/es_201296v010301p.pdf).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChargingAcknowledgementInformation-acknowledgementIndicators ::= BIT STRING {
 *     accepted (0)
 * } (SIZE(minAcknowledgementIndicatorsLen..maxAcknowledgementIndicatorsLen))
 * ```
 */
export
type ChargingAcknowledgementInformation_acknowledgementIndicators = BIT_STRING;

/**
 * Bit 0 of
 * {@link ChargingAcknowledgementInformation_acknowledgementIndicators}.
 * `0` means the charging message was not accepted. `1` means it
 * was accepted.
 * @summary ChargingAcknowledgementInformation_acknowledgementIndicators_accepted
 * @constant
 */
export
const ChargingAcknowledgementInformation_acknowledgementIndicators_accepted: number = 0; /* LONG_NAMED_BIT */

/**
 * Bit 0 of
 * {@link ChargingAcknowledgementInformation_acknowledgementIndicators}.
 * `0` means the charging message was not accepted. `1` means it
 * was accepted.
 * @summary accepted
 * @constant
 */
export
const accepted: number = ChargingAcknowledgementInformation_acknowledgementIndicators_accepted; /* SHORT_NAMED_BIT */
export const _decode_ChargingAcknowledgementInformation_acknowledgementIndicators = (el: _Element): ChargingAcknowledgementInformation_acknowledgementIndicators => {
    const value = $._decodeBitString(el);
    if (value.length < Number(minAcknowledgementIndicatorsLen) || value.length > Number(maxAcknowledgementIndicatorsLen)) {
        throw new ASN1SizeError("ChargingAcknowledgementInformation.acknowledgementIndicators violates SIZE constraint");
    }
    return value;
};
export const _encode_ChargingAcknowledgementInformation_acknowledgementIndicators = $._encodeBitString;


/* eslint-enable */
