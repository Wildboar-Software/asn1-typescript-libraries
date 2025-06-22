/* eslint-disable */
import { ASN1Element as _Element, PrintableString } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary OrganizationalUnitName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OrganizationalUnitName  ::=
 *   PrintableString(SIZE (1..ub-organizational-unit-name-length))
 * ```
 */
export type OrganizationalUnitName = PrintableString; // PrintableString


export const _decode_OrganizationalUnitName = $._decodePrintableString;


export const _encode_OrganizationalUnitName = $._encodePrintableString;


/* eslint-enable */
