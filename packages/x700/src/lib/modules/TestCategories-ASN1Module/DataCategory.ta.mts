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
 * Granularity of test data for `DataUnits`: bits, octets,
 * blocks, or packets. INTEGER is inherently extensible; Cor.2's
 * `...` marker was withdrawn by Cor.3. ITU-T Rec. X.737 (11/95)
 * [A.7](https://www.itu.int/rec/T-REC-X.737-199511-I); Cor.3 (03/01)
 * [https://www.itu.int/rec/T-REC-X.737-200103-I].
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
 * @description
 *
 * Test data counted in bits (0).
 * @constant
 * @type {number}
 */
export const DataCategory_bits: DataCategory = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DataCategory_bits
 * @description
 *
 * Test data counted in bits (0).
 * @constant
 * @type {number}
 */
export const bits: DataCategory = DataCategory_bits; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DataCategory_octets
 * @description
 *
 * Test data counted in octets (1).
 * @constant
 * @type {number}
 */
export const DataCategory_octets: DataCategory = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DataCategory_octets
 * @description
 *
 * Test data counted in octets (1).
 * @constant
 * @type {number}
 */
export const octets: DataCategory = DataCategory_octets; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DataCategory_blocks
 * @description
 *
 * Test data counted in blocks (2).
 * @constant
 * @type {number}
 */
export const DataCategory_blocks: DataCategory = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DataCategory_blocks
 * @description
 *
 * Test data counted in blocks (2).
 * @constant
 * @type {number}
 */
export const blocks: DataCategory = DataCategory_blocks; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DataCategory_packets
 * @description
 *
 * Test data counted in packets (3).
 * @constant
 * @type {number}
 */
export const DataCategory_packets: DataCategory = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DataCategory_packets
 * @description
 *
 * Test data counted in packets (3).
 * @constant
 * @type {number}
 */
export const packets: DataCategory = DataCategory_packets; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_DataCategory = $._decodeInteger;


export const _encode_DataCategory = $._encodeInteger;


/* eslint-enable */
