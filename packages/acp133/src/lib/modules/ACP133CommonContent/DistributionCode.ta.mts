/* eslint-disable */
import {
    ASN1Element as _Element,
    PrintableString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DistributionCode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DistributionCode  ::=  PrintableString
 * ```
 */
export
type DistributionCode = PrintableString; // PrintableString
export const _decode_DistributionCode = $._decodePrintableString;
export const _encode_DistributionCode = $._encodePrintableString;


/* eslint-enable */
