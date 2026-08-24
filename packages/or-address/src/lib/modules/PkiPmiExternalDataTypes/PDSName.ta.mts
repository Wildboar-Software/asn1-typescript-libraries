/* eslint-disable */
import { ASN1Element as _Element, PrintableString } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary PDSName
 * @description
 *
 * Identifies a Physical Delivery System relative to the MD (ITU-T X.402 (1999),
 * §18.3.11). PrintableString only.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PDSName  ::=  PrintableString(SIZE (1..ub-pds-name-length))
 * ```
 */
export type PDSName = PrintableString; // PrintableString


export const _decode_PDSName = $._decodePrintableString;


export const _encode_PDSName = $._encodePrintableString;


/* eslint-enable */
