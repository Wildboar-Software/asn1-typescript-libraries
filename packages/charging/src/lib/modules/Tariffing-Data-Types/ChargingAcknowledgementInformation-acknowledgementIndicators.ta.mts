/* eslint-disable */
import {
    ASN1Element as _Element,
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ChargingAcknowledgementInformation_acknowledgementIndicators
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChargingAcknowledgementInformation-acknowledgementIndicators ::= BIT STRING { -- REMOVED_FROM_UNNESTING -- }
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
export const _decode_ChargingAcknowledgementInformation_acknowledgementIndicators = $._decodeBitString;
export const _encode_ChargingAcknowledgementInformation_acknowledgementIndicators = $._encodeBitString;


/* eslint-enable */
