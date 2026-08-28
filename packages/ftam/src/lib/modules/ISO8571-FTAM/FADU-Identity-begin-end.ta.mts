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
 * @summary FADU_Identity_begin_end
 * @description
 *
 * Begin or end of the file (ISO 8571-2:1988 §7.6). Exact meaning of
 * begin depends on the constraint set.
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
 * @description Locate-next identifies the first FADU
 * (ISO 8571-2:1988 §7.6).
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
 * @description No current location; previous identifies the last
 * FADU in preorder (ISO 8571-2:1988 §7.6).
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
