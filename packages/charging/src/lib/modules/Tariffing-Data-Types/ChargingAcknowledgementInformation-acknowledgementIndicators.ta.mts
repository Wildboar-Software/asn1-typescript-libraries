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
 * @summary ChargingAcknowledgementInformation_acknowledgementIndicators_accepted
 * @constant
 */
export
const ChargingAcknowledgementInformation_acknowledgementIndicators_accepted: number = 0; /* LONG_NAMED_BIT */

/**
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
