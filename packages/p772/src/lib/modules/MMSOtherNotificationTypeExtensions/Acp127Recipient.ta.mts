/* eslint-disable */
import {
    ASN1Element as _Element,
    PrintableString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Acp127Recipient
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Acp127Recipient  ::=  PrintableString(SIZE (1..ub-military-bigstring))
 * ```
 */
export
type Acp127Recipient = PrintableString; // PrintableString
export const _decode_Acp127Recipient = $._decodePrintableString;
export const _encode_Acp127Recipient = $._encodePrintableString;


/* eslint-enable */
