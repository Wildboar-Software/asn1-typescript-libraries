/* eslint-disable */
import {
    ASN1Element as _Element,
    PrintableString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Acp127SuppInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Acp127SuppInfo  ::=  PrintableString(SIZE (1..ub-military-bigstring))
 * ```
 */
export
type Acp127SuppInfo = PrintableString; // PrintableString
export const _decode_Acp127SuppInfo = $._decodePrintableString;
export const _encode_Acp127SuppInfo = $._encodePrintableString;


/* eslint-enable */
