/* eslint-disable */
import { ASN1Element as _Element, PrintableString } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary CommonName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CommonName  ::=  PrintableString(SIZE (1..ub-common-name-length))
 * ```
 */
export type CommonName = PrintableString; // PrintableString


export const _decode_CommonName = $._decodePrintableString;


export const _encode_CommonName = $._encodePrintableString;


/* eslint-enable */
