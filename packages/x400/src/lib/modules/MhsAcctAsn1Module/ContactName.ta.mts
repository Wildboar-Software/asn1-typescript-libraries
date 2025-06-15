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

/* START_OF_SYMBOL_DEFINITION ContactName */
/**
 * @summary ContactName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ContactName  ::=  UniversalString
 * ```
 */
export type ContactName = UniversalString; // UniversalString
/* END_OF_SYMBOL_DEFINITION ContactName */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ContactName */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ContactName */

/* START_OF_SYMBOL_DEFINITION _decode_ContactName */
export const _decode_ContactName = $._decodeUniversalString;
/* END_OF_SYMBOL_DEFINITION _decode_ContactName */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ContactName */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ContactName */

/* START_OF_SYMBOL_DEFINITION _encode_ContactName */
export const _encode_ContactName = $._encodeUniversalString;

/* END_OF_SYMBOL_DEFINITION _encode_ContactName */

/* eslint-enable */
