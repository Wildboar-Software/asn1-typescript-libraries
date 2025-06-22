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
