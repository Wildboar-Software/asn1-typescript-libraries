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

/* START_OF_SYMBOL_DEFINITION LocalIPMIdentifier */
/**
 * @summary LocalIPMIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LocalIPMIdentifier  ::=  PrintableString(SIZE (0..ub-local-ipm-identifier))
 * ```
 */
export type LocalIPMIdentifier = PrintableString; // PrintableString
/* END_OF_SYMBOL_DEFINITION LocalIPMIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_LocalIPMIdentifier */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_LocalIPMIdentifier */

/* START_OF_SYMBOL_DEFINITION _decode_LocalIPMIdentifier */
export const _decode_LocalIPMIdentifier = $._decodePrintableString;
/* END_OF_SYMBOL_DEFINITION _decode_LocalIPMIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_LocalIPMIdentifier */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_LocalIPMIdentifier */

/* START_OF_SYMBOL_DEFINITION _encode_LocalIPMIdentifier */
export const _encode_LocalIPMIdentifier = $._encodePrintableString;

/* END_OF_SYMBOL_DEFINITION _encode_LocalIPMIdentifier */

/* eslint-enable */
