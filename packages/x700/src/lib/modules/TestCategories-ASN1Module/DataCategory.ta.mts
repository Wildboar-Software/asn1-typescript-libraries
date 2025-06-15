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

/* START_OF_SYMBOL_DEFINITION DataCategory */
/**
 * @summary DataCategory
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DataCategory  ::=  INTEGER {bits(0), octets(1), blocks(2), packets(3)}
 * ```
 */
export type DataCategory = INTEGER;
/* END_OF_SYMBOL_DEFINITION DataCategory */

/* START_OF_SYMBOL_DEFINITION DataCategory_bits */
/**
 * @summary DataCategory_bits
 * @constant
 * @type {number}
 */
export const DataCategory_bits: DataCategory = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION DataCategory_bits */

/* START_OF_SYMBOL_DEFINITION bits */
/**
 * @summary DataCategory_bits
 * @constant
 * @type {number}
 */
export const bits: DataCategory = DataCategory_bits; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION bits */

/* START_OF_SYMBOL_DEFINITION DataCategory_octets */
/**
 * @summary DataCategory_octets
 * @constant
 * @type {number}
 */
export const DataCategory_octets: DataCategory = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION DataCategory_octets */

/* START_OF_SYMBOL_DEFINITION octets */
/**
 * @summary DataCategory_octets
 * @constant
 * @type {number}
 */
export const octets: DataCategory = DataCategory_octets; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION octets */

/* START_OF_SYMBOL_DEFINITION DataCategory_blocks */
/**
 * @summary DataCategory_blocks
 * @constant
 * @type {number}
 */
export const DataCategory_blocks: DataCategory = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION DataCategory_blocks */

/* START_OF_SYMBOL_DEFINITION blocks */
/**
 * @summary DataCategory_blocks
 * @constant
 * @type {number}
 */
export const blocks: DataCategory = DataCategory_blocks; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION blocks */

/* START_OF_SYMBOL_DEFINITION DataCategory_packets */
/**
 * @summary DataCategory_packets
 * @constant
 * @type {number}
 */
export const DataCategory_packets: DataCategory = 3; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION DataCategory_packets */

/* START_OF_SYMBOL_DEFINITION packets */
/**
 * @summary DataCategory_packets
 * @constant
 * @type {number}
 */
export const packets: DataCategory = DataCategory_packets; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION packets */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DataCategory */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DataCategory */

/* START_OF_SYMBOL_DEFINITION _decode_DataCategory */
export const _decode_DataCategory = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_DataCategory */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DataCategory */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DataCategory */

/* START_OF_SYMBOL_DEFINITION _encode_DataCategory */
export const _encode_DataCategory = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_DataCategory */

/* eslint-enable */
