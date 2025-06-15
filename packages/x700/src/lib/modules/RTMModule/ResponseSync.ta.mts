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
 * @summary ResponseSync
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ResponseSync  ::=  ENUMERATED {singleCast(-1), bestEffort(0), atomic(1)}
 * ```@enum {number}
 */
export enum _enum_for_ResponseSync {
    singleCast = -1,
    bestEffort = 0,
    atomic = 1,
}

/**
 * @summary ResponseSync
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ResponseSync  ::=  ENUMERATED {singleCast(-1), bestEffort(0), atomic(1)}
 * ```@enum {number}
 */
export type ResponseSync = _enum_for_ResponseSync;

/**
 * @summary ResponseSync
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ResponseSync  ::=  ENUMERATED {singleCast(-1), bestEffort(0), atomic(1)}
 * ```@enum {number}
 */
export const ResponseSync = _enum_for_ResponseSync;

/**
 * @summary ResponseSync_singleCast
 * @constant
 * @type {number}
 */
export const ResponseSync_singleCast: ResponseSync =
    ResponseSync.singleCast; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary singleCast
 * @constant
 * @type {number}
 */
export const singleCast: ResponseSync =
    ResponseSync.singleCast; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ResponseSync_bestEffort
 * @constant
 * @type {number}
 */
export const ResponseSync_bestEffort: ResponseSync =
    ResponseSync.bestEffort; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary bestEffort
 * @constant
 * @type {number}
 */
export const bestEffort: ResponseSync =
    ResponseSync.bestEffort; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ResponseSync_atomic
 * @constant
 * @type {number}
 */
export const ResponseSync_atomic: ResponseSync =
    ResponseSync.atomic; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary atomic
 * @constant
 * @type {number}
 */
export const atomic: ResponseSync =
    ResponseSync.atomic; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_ResponseSync = $._decodeEnumerated;


export const _encode_ResponseSync = $._encodeEnumerated;


/* eslint-enable */
