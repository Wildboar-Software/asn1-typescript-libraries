/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";



/**
 * @summary maxISDN_SubaddressLength
 * @description
 *
 * Maximum length of `ISDN-SubaddressString` in octets (1 type/odd-even octet
 * plus up to 20 information octets). (3GPP TS 29.002 V19.1.0 clause 17.7.8).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * maxISDN-SubaddressLength  INTEGER ::= 21
 * ```
 * 
 * @constant
 */
export
const maxISDN_SubaddressLength: INTEGER = 21;

/* eslint-enable */
