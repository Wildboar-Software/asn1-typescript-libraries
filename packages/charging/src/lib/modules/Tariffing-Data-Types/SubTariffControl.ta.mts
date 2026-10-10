/* eslint-disable */
import {
    ASN1Element as _Element,
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SubTariffControl
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SubTariffControl  ::=  BIT STRING {oneTimeCharge (0)}
 * (SIZE(minSubTariffControlLen..maxSubTariffControlLen))
 * ```
 */
export
type SubTariffControl = BIT_STRING;

/**
 * @summary SubTariffControl_oneTimeCharge
 * @constant
 */
export
const SubTariffControl_oneTimeCharge: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary oneTimeCharge
 * @constant
 */
export
const oneTimeCharge: number = SubTariffControl_oneTimeCharge; /* SHORT_NAMED_BIT */
export const _decode_SubTariffControl = $._decodeBitString;
export const _encode_SubTariffControl = $._encodeBitString;


/* eslint-enable */
