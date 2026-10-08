/* eslint-disable */
import {
    ASN1Element as _Element,
    PrintableString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary X520SerialNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * X520SerialNumber  ::=     PrintableString (SIZE (1..ub-serial-number))
 * ```
 */
export
type X520SerialNumber = PrintableString; // PrintableString
export const _decode_X520SerialNumber = $._decodePrintableString;
export const _encode_X520SerialNumber = $._encodePrintableString;


/* eslint-enable */
