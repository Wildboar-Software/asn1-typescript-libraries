/* eslint-disable */
import { ASN1Element as _Element, PrintableString } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION OrganizationalUnitName */
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
/* END_OF_SYMBOL_DEFINITION OrganizationalUnitName */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_OrganizationalUnitName */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_OrganizationalUnitName */

/* START_OF_SYMBOL_DEFINITION _decode_OrganizationalUnitName */
export const _decode_OrganizationalUnitName = $._decodePrintableString;
/* END_OF_SYMBOL_DEFINITION _decode_OrganizationalUnitName */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_OrganizationalUnitName */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_OrganizationalUnitName */

/* START_OF_SYMBOL_DEFINITION _encode_OrganizationalUnitName */
export const _encode_OrganizationalUnitName = $._encodePrintableString;

/* END_OF_SYMBOL_DEFINITION _encode_OrganizationalUnitName */

/* eslint-enable */
