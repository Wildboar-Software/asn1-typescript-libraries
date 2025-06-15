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

/* START_OF_SYMBOL_DEFINITION ContactFunction */
/**
 * @summary ContactFunction
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ContactFunction  ::=  UniversalString
 * ```
 */
export type ContactFunction = UniversalString; // UniversalString
/* END_OF_SYMBOL_DEFINITION ContactFunction */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ContactFunction */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ContactFunction */

/* START_OF_SYMBOL_DEFINITION _decode_ContactFunction */
export const _decode_ContactFunction = $._decodeUniversalString;
/* END_OF_SYMBOL_DEFINITION _decode_ContactFunction */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ContactFunction */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ContactFunction */

/* START_OF_SYMBOL_DEFINITION _encode_ContactFunction */
export const _encode_ContactFunction = $._encodeUniversalString;

/* END_OF_SYMBOL_DEFINITION _encode_ContactFunction */

/* eslint-enable */
