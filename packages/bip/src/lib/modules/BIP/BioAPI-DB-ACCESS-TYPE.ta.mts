/* eslint-disable */
import {
  BIT_STRING,
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
 * @summary BioAPI_DB_ACCESS_TYPE
 * @description
 *
 * Database open-mode flags. `SIZE(32)` matches the C `uint32_t`.
 * Bit 0 = C `0x00000001` (read); bit 1 = `0x00000002` (write).
 * Bits 2–31 are unnamed.
 *
 * ITU-T Rec. X.1083 (11/2007)
 * [§15.24](https://www.itu.int/rec/T-REC-X.1083-200711-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BioAPI-DB-ACCESS-TYPE  ::=  BIT STRING {read(0), write(1)}(SIZE (32))
 * ```
 */
export type BioAPI_DB_ACCESS_TYPE = BIT_STRING;


/**
 * @summary BioAPI_DB_ACCESS_TYPE_read
 * @constant
 */
export const BioAPI_DB_ACCESS_TYPE_read: number = 0; /* LONG_NAMED_BIT */


/**
 * @summary read
 * @constant
 */
export const read: number = BioAPI_DB_ACCESS_TYPE_read; /* SHORT_NAMED_BIT */


/**
 * @summary BioAPI_DB_ACCESS_TYPE_write
 * @constant
 */
export const BioAPI_DB_ACCESS_TYPE_write: number = 1; /* LONG_NAMED_BIT */


/**
 * @summary write
 * @constant
 */
export const write: number = BioAPI_DB_ACCESS_TYPE_write; /* SHORT_NAMED_BIT */




export const _decode_BioAPI_DB_ACCESS_TYPE = $._decodeBitString;




export const _encode_BioAPI_DB_ACCESS_TYPE = $._encodeBitString;


/* eslint-enable */
