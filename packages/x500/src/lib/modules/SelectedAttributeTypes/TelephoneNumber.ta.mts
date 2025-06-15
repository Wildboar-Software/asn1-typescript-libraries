/* eslint-disable */
import { ASN1Element as _Element, PrintableString } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/**
 * @summary TelephoneNumber
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TelephoneNumber  ::=  PrintableString(SIZE (1..ub-telephone-number))
 * ```
 */
export type TelephoneNumber = PrintableString; // PrintableString


export const _decode_TelephoneNumber = $._decodePrintableString;


export const _encode_TelephoneNumber = $._encodePrintableString;


/* eslint-enable */
