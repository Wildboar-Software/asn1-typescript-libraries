/* eslint-disable */
import {
    ASN1Element as _Element,
    PrintableString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DocumentType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DocumentType  ::=  PrintableString(SIZE(1..2))
 * ```
 */
export
type DocumentType = PrintableString; // PrintableString
export const _decode_DocumentType = $._decodePrintableString;
export const _encode_DocumentType = $._encodePrintableString;


/* eslint-enable */
