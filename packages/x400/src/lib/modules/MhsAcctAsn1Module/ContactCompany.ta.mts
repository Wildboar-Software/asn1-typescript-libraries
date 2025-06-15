/* eslint-disable */
import {
    UniversalString,
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

/* START_OF_SYMBOL_DEFINITION ContactCompany */
/**
 * @summary ContactCompany
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ContactCompany  ::=  UniversalString
 * ```
 */
export type ContactCompany = UniversalString; // UniversalString
/* END_OF_SYMBOL_DEFINITION ContactCompany */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ContactCompany */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ContactCompany */

/* START_OF_SYMBOL_DEFINITION _decode_ContactCompany */
export const _decode_ContactCompany = $._decodeUniversalString;
/* END_OF_SYMBOL_DEFINITION _decode_ContactCompany */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ContactCompany */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ContactCompany */

/* START_OF_SYMBOL_DEFINITION _encode_ContactCompany */
export const _encode_ContactCompany = $._encodeUniversalString;

/* END_OF_SYMBOL_DEFINITION _encode_ContactCompany */

/* eslint-enable */
