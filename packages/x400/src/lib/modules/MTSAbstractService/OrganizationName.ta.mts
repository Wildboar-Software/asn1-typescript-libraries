/* eslint-disable */
import {
    PrintableString,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';

/* START_OF_SYMBOL_DEFINITION OrganizationName */
/**
 * @summary OrganizationName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OrganizationName  ::=  PrintableString(SIZE (1..ub-organization-name-length))
 * ```
 */
export type OrganizationName = PrintableString; // PrintableString
/* END_OF_SYMBOL_DEFINITION OrganizationName */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_OrganizationName */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_OrganizationName */

/* START_OF_SYMBOL_DEFINITION _decode_OrganizationName */
export const _decode_OrganizationName = $._decodePrintableString;
/* END_OF_SYMBOL_DEFINITION _decode_OrganizationName */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_OrganizationName */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_OrganizationName */

/* START_OF_SYMBOL_DEFINITION _encode_OrganizationName */
export const _encode_OrganizationName = $._encodePrintableString;

/* END_OF_SYMBOL_DEFINITION _encode_OrganizationName */

/* eslint-enable */
