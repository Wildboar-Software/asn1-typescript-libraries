/* eslint-disable */
import {
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
 * @summary CMISSync
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CMISSync  ::=  ENUMERATED {bestEffort(0), atomic(1)}
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_CMISSync {
  bestEffort = 0,
  atomic = 1,
}


/**
 * @summary CMISSync
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CMISSync  ::=  ENUMERATED {bestEffort(0), atomic(1)}
 * ```
 *
 * @enum {number}
 */
export type CMISSync = _enum_for_CMISSync;


/**
 * @summary CMISSync
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CMISSync  ::=  ENUMERATED {bestEffort(0), atomic(1)}
 * ```
 *
 * @enum {number}
 */
export const CMISSync = _enum_for_CMISSync;


/**
 * @summary CMISSync_bestEffort
 * @constant
 * @type {number}
 */
export const CMISSync_bestEffort: CMISSync =
  CMISSync.bestEffort; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary bestEffort
 * @constant
 * @type {number}
 */
export const bestEffort: CMISSync =
  CMISSync.bestEffort; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CMISSync_atomic
 * @constant
 * @type {number}
 */
export const CMISSync_atomic: CMISSync =
  CMISSync.atomic; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary atomic
 * @constant
 * @type {number}
 */
export const atomic: CMISSync =
  CMISSync.atomic; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_CMISSync = $._decodeEnumerated;




export const _encode_CMISSync = $._encodeEnumerated;


/* eslint-enable */
