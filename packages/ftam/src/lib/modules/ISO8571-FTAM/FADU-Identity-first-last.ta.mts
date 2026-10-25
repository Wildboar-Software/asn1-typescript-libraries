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
 * @summary FADU_Identity_first_last
 * @description
 *
 * First or last FADU in preorder (ISO 8571-2:1988 §7.6).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FADU-Identity-first-last ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type FADU_Identity_first_last = INTEGER;


/**
 * @summary FADU_Identity_first_last_first
 * @description First FADU in preorder among DUs that exist
 * (ISO 8571-2:1988 §7.6).
 * @constant
 * @type {number}
 */
export const FADU_Identity_first_last_first: 0 = 0 satisfies FADU_Identity_first_last; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary FADU_Identity_first_last_first
 * @constant
 * @type {number}
 */
export const first: 0 = FADU_Identity_first_last_first; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary FADU_Identity_first_last_last
 * @description Last FADU in the preorder traversal of the file
 * structure (ISO 8571-2:1988 §7.6).
 * @constant
 * @type {number}
 */
export const FADU_Identity_first_last_last: 1 = 1 satisfies FADU_Identity_first_last; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary FADU_Identity_first_last_last
 * @constant
 * @type {number}
 */
export const last: 1 = FADU_Identity_first_last_last; /* SHORT_NAMED_INTEGER_VALUE */




export const _decode_FADU_Identity_first_last: $.ASN1Decoder<INTEGER> = $._decodeInteger;




export const _encode_FADU_Identity_first_last: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
