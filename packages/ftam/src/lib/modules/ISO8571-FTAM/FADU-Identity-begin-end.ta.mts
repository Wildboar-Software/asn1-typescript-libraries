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


/**
 * @summary FADU_Identity_begin_end
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FADU-Identity-begin-end ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type FADU_Identity_begin_end = INTEGER;


/**
 * @summary FADU_Identity_begin_end_begin
 * @constant
 * @type {number}
 */
export const FADU_Identity_begin_end_begin: FADU_Identity_begin_end = 0; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary FADU_Identity_begin_end_begin
 * @constant
 * @type {number}
 */
export const begin: FADU_Identity_begin_end = FADU_Identity_begin_end_begin; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary FADU_Identity_begin_end_end
 * @constant
 * @type {number}
 */
export const FADU_Identity_begin_end_end: FADU_Identity_begin_end = 1; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary FADU_Identity_begin_end_end
 * @constant
 * @type {number}
 */
export const end: FADU_Identity_begin_end = FADU_Identity_begin_end_end; /* SHORT_NAMED_INTEGER_VALUE */




export const _decode_FADU_Identity_begin_end = $._decodeInteger;




export const _encode_FADU_Identity_begin_end = $._encodeInteger;


/* eslint-enable */
