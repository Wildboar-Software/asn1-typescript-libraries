/* eslint-disable */
import { EMLPP_Priority } from "../MAP-CommonDataTypes/EMLPP-Priority.ta.mjs";


/**
 * @summary priorityLevel4
 * @description
 *
 * eMLPP priority 4, integer 4 (lowest). Spare values 7-15 shall be mapped to
 * this level. (3GPP TS 29.002 V19.1.0 clause 17.7.8).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * priorityLevel4    EMLPP-Priority ::= 4
 * ```
 * 
 * @constant
 */
export
const priorityLevel4: EMLPP_Priority = 4;

/* eslint-enable */
