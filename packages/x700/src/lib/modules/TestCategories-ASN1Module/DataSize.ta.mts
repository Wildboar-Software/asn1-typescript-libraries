/* eslint-disable */
import {
    INTEGER,
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

/* START_OF_SYMBOL_DEFINITION DataSize */
/**
 * @summary DataSize
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DataSize  ::=  INTEGER
 * ```
 */
export type DataSize = INTEGER;
/* END_OF_SYMBOL_DEFINITION DataSize */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DataSize */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DataSize */

/* START_OF_SYMBOL_DEFINITION _decode_DataSize */
export const _decode_DataSize = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_DataSize */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DataSize */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DataSize */

/* START_OF_SYMBOL_DEFINITION _encode_DataSize */
export const _encode_DataSize = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_DataSize */

/* eslint-enable */
