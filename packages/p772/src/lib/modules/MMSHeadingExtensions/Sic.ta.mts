/* eslint-disable */
import {
    ASN1Element as _Element,
    PrintableString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Sic
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Sic  ::=  PrintableString(SIZE (lb-military-sic..ub-military-sic))
 * ```
 */
export
type Sic = PrintableString; // PrintableString
export const _decode_Sic = $._decodePrintableString;
export const _encode_Sic = $._encodePrintableString;


/* eslint-enable */
