/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SemiOctetString
 * @description
 *
 * Digits of an `SMS-Address`. Each octet contains two binary-coded
 * decimal digits
 * ([ETSI TR 101 635 V7.0.0](https://www.etsi.org/deliver/etsi_tr/101600_101699/101635/07.00.00_60/tr_101635v070000p.pdf)
 * clause 3.2). The report does not state which nibble is the first
 * digit.
 *
 * Clause 3.2 limits the string to 1..10 octets. This type does not
 * enforce that size.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SemiOctetString  ::=  OCTET STRING
 * ```
 */
export
type SemiOctetString = OCTET_STRING; // OctetStringType
export const _decode_SemiOctetString = $._decodeOctetString;
export const _encode_SemiOctetString = $._encodeOctetString;


/* eslint-enable */
