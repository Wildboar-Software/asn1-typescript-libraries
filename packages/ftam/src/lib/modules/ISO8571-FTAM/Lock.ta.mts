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
 * @summary Lock
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Lock  ::=  INTEGER {not-required(0), shared(1), exclusive(2), no-access(3)}
 * ```
 */
export type Lock = INTEGER;


/**
 * @summary Lock_not_required
 * @constant
 * @type {number}
 */
export const Lock_not_required: Lock = 0; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Lock_not_required
 * @constant
 * @type {number}
 */
export const not_required: Lock = Lock_not_required; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Lock_shared
 * @constant
 * @type {number}
 */
export const Lock_shared: Lock = 1; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Lock_shared
 * @constant
 * @type {number}
 */
export const shared: Lock = Lock_shared; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Lock_exclusive
 * @constant
 * @type {number}
 */
export const Lock_exclusive: Lock = 2; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Lock_exclusive
 * @constant
 * @type {number}
 */
export const exclusive: Lock = Lock_exclusive; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Lock_no_access
 * @constant
 * @type {number}
 */
export const Lock_no_access: Lock = 3; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Lock_no_access
 * @constant
 * @type {number}
 */
export const no_access: Lock = Lock_no_access; /* SHORT_NAMED_INTEGER_VALUE */




export const _decode_Lock = $._decodeInteger;




export const _encode_Lock = $._encodeInteger;


/* eslint-enable */
