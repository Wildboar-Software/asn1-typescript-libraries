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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';


/**
 * @summary CMISSync
 * @description
 *
 * Synchronization of a scoped operation over multiple
 * objects. Default in Get/Set/Action/Delete arguments is
 * `bestEffort`. Unsupported values yield
 * `syncNotSupported`. ITU-T Rec. X.711 (10/97)
 * [§7.4](https://www.itu.int/rec/T-REC-X.711-199710-I).
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
 * @description
 *
 * Default synchronization. X.711 §7.4.
 *
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
 * @description
 *
 * Atomic synchronization. Unsupported values yield
 * `syncNotSupported`. X.711 §7.4.
 *
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
