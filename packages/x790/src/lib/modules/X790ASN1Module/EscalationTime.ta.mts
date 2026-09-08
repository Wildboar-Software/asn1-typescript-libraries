/* eslint-disable */
import {
    GeneralizedTime,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EscalationTime
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EscalationTime  ::=  GeneralizedTime
 * ```
 */
export
type EscalationTime = GeneralizedTime; // GeneralizedTime
export const _decode_EscalationTime = $._decodeGeneralizedTime;
export const _encode_EscalationTime = $._encodeGeneralizedTime;


/* eslint-enable */
