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
 * @summary DataSize
 * @description
 *
 * Size of a test data unit. Interpreted with `DataCategory`
 * (bits, octets, blocks, packets). The rec does not define a unit
 * independent of `DataCategory`. ITU-T Rec. X.737 (11/95)
 * [A.7](https://www.itu.int/rec/T-REC-X.737-199511-I), §8.1.6.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DataSize  ::=  INTEGER
 * ```
 */
export type DataSize = INTEGER;


export const _decode_DataSize = $._decodeInteger;


export const _encode_DataSize = $._encodeInteger;


/* eslint-enable */
