/* eslint-disable */
import {
    ASN1Element as _Element,
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
 */
export
type Password = PrintableString; // PrintableString
export const _decode_Password = $._decodePrintableString;
export const _encode_Password = $._encodePrintableString;


/* eslint-enable */
