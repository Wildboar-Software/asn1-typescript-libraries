/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";



/**
 * @summary maxAddressLength
 * @description
 *
 * Maximum length of `AddressString` in octets (first octet plus TBCD digits).
 * (3GPP TS 29.002 V19.1.0 clause 17.7.8).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * maxAddressLength  INTEGER ::= 20
 * ```
 * 
 * @constant
 */
export
const maxAddressLength: INTEGER = 20;

/* eslint-enable */
