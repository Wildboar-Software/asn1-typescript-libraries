/* eslint-disable */
import {
    ASN1Element as _Element,
    PrintableString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MilitaryString
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MilitaryString  ::=  PrintableString(SIZE (1..ub-military-string))
 * ```
 */
export
type MilitaryString = PrintableString; // PrintableString
export const _decode_MilitaryString = $._decodePrintableString;
export const _encode_MilitaryString = $._encodePrintableString;


/* eslint-enable */
