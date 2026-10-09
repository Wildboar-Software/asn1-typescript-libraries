/* eslint-disable */
import {
    PrintableString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary X520dnQualifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * X520dnQualifier  ::=      PrintableString
 * ```
 */
export
type X520dnQualifier = PrintableString; // PrintableString
export const _decode_X520dnQualifier = $._decodePrintableString;
export const _encode_X520dnQualifier = $._encodePrintableString;


/* eslint-enable */
