/* eslint-disable */
import {
    PrintableString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Password
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Password  ::=  PrintableString
 * ```
 *
 * Password that may assist in authentication of an SMR-BIND
 * (clauses 2.2 and 3.2). The printed assignments constrain it to
 * `PrintableString (SIZE (0..ub-password-length))`, with
 * `ub-password-length` equal to 20. This assignment does not.
 */
export
type Password = PrintableString; // PrintableString
export const _decode_Password = $._decodePrintableString;
export const _encode_Password = $._encodePrintableString;


/* eslint-enable */
