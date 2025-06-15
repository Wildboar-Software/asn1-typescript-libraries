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
 * @summary FADU_Identity_relative
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FADU-Identity-relative ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type FADU_Identity_relative = INTEGER;


/**
 * @summary FADU_Identity_relative_previous
 * @constant
 * @type {number}
 */
export const FADU_Identity_relative_previous: FADU_Identity_relative = 0; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary FADU_Identity_relative_previous
 * @constant
 * @type {number}
 */
export const previous: FADU_Identity_relative = FADU_Identity_relative_previous; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary FADU_Identity_relative_current
 * @constant
 * @type {number}
 */
export const FADU_Identity_relative_current: FADU_Identity_relative = 1; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary FADU_Identity_relative_current
 * @constant
 * @type {number}
 */
export const current: FADU_Identity_relative = FADU_Identity_relative_current; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary FADU_Identity_relative_next
 * @constant
 * @type {number}
 */
export const FADU_Identity_relative_next: FADU_Identity_relative = 2; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary FADU_Identity_relative_next
 * @constant
 * @type {number}
 */
export const next: FADU_Identity_relative = FADU_Identity_relative_next; /* SHORT_NAMED_INTEGER_VALUE */




export const _decode_FADU_Identity_relative = $._decodeInteger;




export const _encode_FADU_Identity_relative = $._encodeInteger;


/* eslint-enable */
