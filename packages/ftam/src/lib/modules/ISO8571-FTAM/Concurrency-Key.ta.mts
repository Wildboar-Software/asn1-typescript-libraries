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
} from 'asn1-ts';
import * as $ from '@wildboar/asn1/functional';


/**
 * @summary Concurrency_Key
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Concurrency-Key  ::=  BIT STRING {
 *   not-required(0), shared(1), exclusive(2), no-access(3)}
 * ```
 */
export type Concurrency_Key = BIT_STRING;


/**
 * @summary Concurrency_Key_not_required
 * @constant
 */
export const Concurrency_Key_not_required: number = 0; /* LONG_NAMED_BIT */


/**
 * @summary not_required
 * @constant
 */
export const not_required: number = Concurrency_Key_not_required; /* SHORT_NAMED_BIT */


/**
 * @summary Concurrency_Key_shared
 * @constant
 */
export const Concurrency_Key_shared: number = 1; /* LONG_NAMED_BIT */


/**
 * @summary shared
 * @constant
 */
export const shared: number = Concurrency_Key_shared; /* SHORT_NAMED_BIT */


/**
 * @summary Concurrency_Key_exclusive
 * @constant
 */
export const Concurrency_Key_exclusive: number = 2; /* LONG_NAMED_BIT */


/**
 * @summary exclusive
 * @constant
 */
export const exclusive: number = Concurrency_Key_exclusive; /* SHORT_NAMED_BIT */


/**
 * @summary Concurrency_Key_no_access
 * @constant
 */
export const Concurrency_Key_no_access: number = 3; /* LONG_NAMED_BIT */


/**
 * @summary no_access
 * @constant
 */
export const no_access: number = Concurrency_Key_no_access; /* SHORT_NAMED_BIT */




export const _decode_Concurrency_Key = $._decodeBitString;




export const _encode_Concurrency_Key = $._encodeBitString;


/* eslint-enable */
