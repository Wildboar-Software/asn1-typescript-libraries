/* eslint-disable */
import {
    PrintableString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Password
 * @description
 *
 * Password that may assist in authentication
 * ([ETSI TR 101 635 V7.0.0](https://www.etsi.org/deliver/etsi_tr/101600_101699/101635/07.00.00_60/tr_101635v070000p.pdf)
 * clause 3.2). Printable characters. The report limits the length
 * to `ub-password-length` (20). This type does not enforce that
 * size. This profile requires the password on `SMR-Bind`; clause
 * 3.2 makes it optional.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Password  ::=  PrintableString
 * ```
 */
export
type Password = PrintableString; // PrintableString
export const _decode_Password = $._decodePrintableString;
export const _encode_Password = $._encodePrintableString;


/* eslint-enable */
