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

/* START_OF_SYMBOL_DEFINITION ContactDetails */
/**
 * @summary ContactDetails
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ContactDetails  ::=  UniversalString
 * ```
 */
export type ContactDetails = UniversalString; // UniversalString
/* END_OF_SYMBOL_DEFINITION ContactDetails */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ContactDetails */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ContactDetails */

/* START_OF_SYMBOL_DEFINITION _decode_ContactDetails */
export const _decode_ContactDetails = $._decodeUniversalString;
/* END_OF_SYMBOL_DEFINITION _decode_ContactDetails */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ContactDetails */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ContactDetails */

/* START_OF_SYMBOL_DEFINITION _encode_ContactDetails */
export const _encode_ContactDetails = $._encodeUniversalString;

/* END_OF_SYMBOL_DEFINITION _encode_ContactDetails */

/* eslint-enable */
