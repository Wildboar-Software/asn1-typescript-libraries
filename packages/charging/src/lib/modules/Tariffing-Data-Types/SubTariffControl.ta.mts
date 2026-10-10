/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { maxSubTariffControlLen } from "../Tariffing-Data-Types/maxSubTariffControlLen.va.mjs";
import { minSubTariffControlLen } from "../Tariffing-Data-Types/minSubTariffControlLen.va.mjs";



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
export const _decode_SubTariffControl = (el: _Element): SubTariffControl => {
    const value = $._decodeBitString(el);
    if (value.length < Number(minSubTariffControlLen) || value.length > Number(maxSubTariffControlLen)) {
        throw new ASN1SizeError("SubTariffControl violates SIZE constraint");
    }
    return value;
};
export const _encode_SubTariffControl = $._encodeBitString;


/* eslint-enable */
