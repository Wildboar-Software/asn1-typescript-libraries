/* eslint-disable */
import {
  type INTEGER,
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
 * @summary FADU_Identity_relative
 * @description
 *
 * Previous, current, or next relative to the current location
 * (ISO 8571-2:1988 §7.6).
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
 * @description FADU preceding the currently identified FADU in
 * preorder (ISO 8571-2:1988 §7.6).
 * @constant
 * @type {number}
 */
export const FADU_Identity_relative_previous = 0 satisfies FADU_Identity_relative; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary FADU_Identity_relative_previous
 * @constant
 * @type {number}
 */
export const previous = FADU_Identity_relative_previous; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary FADU_Identity_relative_current
 * @description Current location unchanged (ISO 8571-2:1988 §7.6).
 * @constant
 * @type {number}
 */
export const FADU_Identity_relative_current = 1 satisfies FADU_Identity_relative; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary FADU_Identity_relative_current
 * @constant
 * @type {number}
 */
export const current = FADU_Identity_relative_current; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary FADU_Identity_relative_next
 * @description FADU following the currently identified FADU in
 * preorder (ISO 8571-2:1988 §7.6).
 * @constant
 * @type {number}
 */
export const FADU_Identity_relative_next = 2 satisfies FADU_Identity_relative; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary FADU_Identity_relative_next
 * @constant
 * @type {number}
 */
export const next = FADU_Identity_relative_next; /* SHORT_NAMED_INTEGER_VALUE */




export const _decode_FADU_Identity_relative = $._decodeInteger;




export const _encode_FADU_Identity_relative = $._encodeInteger;


/* eslint-enable */
