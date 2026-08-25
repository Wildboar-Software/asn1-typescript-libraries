/* eslint-disable */
import { ASN1Element as _Element, PrintableString } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary CommonName
 * @description
 *
 * Identifies a user or DL relative to another attribute, often an organizational role such
 * as `Director of Marketing` (ITU-T X.402 (1999), §18.3.2). Printable form;
 * teletex/universal twins are extension attributes 2 and 24.
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
