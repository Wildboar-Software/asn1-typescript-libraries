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

/* START_OF_SYMBOL_DEFINITION Currency */
/**
 * @summary Currency
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Currency  ::=  PrintableString
 * ```
 */
export type Currency = PrintableString; // PrintableString
/* END_OF_SYMBOL_DEFINITION Currency */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Currency */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Currency */

/* START_OF_SYMBOL_DEFINITION _decode_Currency */
export const _decode_Currency = $._decodePrintableString;
/* END_OF_SYMBOL_DEFINITION _decode_Currency */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Currency */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Currency */

/* START_OF_SYMBOL_DEFINITION _encode_Currency */
export const _encode_Currency = $._encodePrintableString;

/* END_OF_SYMBOL_DEFINITION _encode_Currency */

/* eslint-enable */
