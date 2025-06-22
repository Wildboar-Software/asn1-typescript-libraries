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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';

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

/**
 * @summary DataCategory_bits
 * @constant
 * @type {number}
 */
export const DataCategory_bits: DataCategory = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DataCategory_bits
 * @constant
 * @type {number}
 */
export const bits: DataCategory = DataCategory_bits; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DataCategory_octets
 * @constant
 * @type {number}
 */
export const DataCategory_octets: DataCategory = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DataCategory_octets
 * @constant
 * @type {number}
 */
export const octets: DataCategory = DataCategory_octets; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DataCategory_blocks
 * @constant
 * @type {number}
 */
export const DataCategory_blocks: DataCategory = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DataCategory_blocks
 * @constant
 * @type {number}
 */
export const blocks: DataCategory = DataCategory_blocks; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DataCategory_packets
 * @constant
 * @type {number}
 */
export const DataCategory_packets: DataCategory = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DataCategory_packets
 * @constant
 * @type {number}
 */
export const packets: DataCategory = DataCategory_packets; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_DataCategory = $._decodeInteger;


export const _encode_DataCategory = $._encodeInteger;


/* eslint-enable */
