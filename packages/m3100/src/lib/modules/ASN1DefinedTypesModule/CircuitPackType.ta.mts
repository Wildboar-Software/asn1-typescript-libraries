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

/* START_OF_SYMBOL_DEFINITION CircuitPackType */
/**
 * @summary CircuitPackType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CircuitPackType  ::=  PrintableString
 * ```
 */
export type CircuitPackType = PrintableString; // PrintableString
/* END_OF_SYMBOL_DEFINITION CircuitPackType */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CircuitPackType */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CircuitPackType */

/* START_OF_SYMBOL_DEFINITION _decode_CircuitPackType */
export const _decode_CircuitPackType = $._decodePrintableString;
/* END_OF_SYMBOL_DEFINITION _decode_CircuitPackType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CircuitPackType */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CircuitPackType */

/* START_OF_SYMBOL_DEFINITION _encode_CircuitPackType */
export const _encode_CircuitPackType = $._encodePrintableString;

/* END_OF_SYMBOL_DEFINITION _encode_CircuitPackType */

/* eslint-enable */
