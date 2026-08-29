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
 * @summary ResponseSync
 * @description
 *
 * How a response monitor treats multiple replies to one request.
 * Default `singleCast`. ITU-T Rec. X.748 (03/99)
 * [§8.4.13](https://www.itu.int/rec/T-REC-X.748-199903-I),
 * §8.2.4, A.7.
 *
 * - `singleCast` (−1): first response only.
 * - `bestEffort` (0): time until the first of several responses.
 * - `atomic` (1): time until all responses return.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ResponseSync  ::=  ENUMERATED {singleCast(-1), bestEffort(0), atomic(1)}
 * ```
 *
 * @enum {number}
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
 * How a response monitor treats multiple replies to one request.
 * Default `singleCast`. ITU-T Rec. X.748 (03/99)
 * [§8.4.13](https://www.itu.int/rec/T-REC-X.748-199903-I),
 * §8.2.4, A.7.
 *
 * - `singleCast` (−1): first response only.
 * - `bestEffort` (0): time until the first of several responses.
 * - `atomic` (1): time until all responses return.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ResponseSync  ::=  ENUMERATED {singleCast(-1), bestEffort(0), atomic(1)}
 * ```
 *
 * @enum {number}
 */
export type ResponseSync = _enum_for_ResponseSync;

/**
 * @summary ResponseSync
 * @description
 *
 * How a response monitor treats multiple replies to one request.
 * Default `singleCast`. ITU-T Rec. X.748 (03/99)
 * [§8.4.13](https://www.itu.int/rec/T-REC-X.748-199903-I),
 * §8.2.4, A.7.
 *
 * - `singleCast` (−1): first response only.
 * - `bestEffort` (0): time until the first of several responses.
 * - `atomic` (1): time until all responses return.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ResponseSync  ::=  ENUMERATED {singleCast(-1), bestEffort(0), atomic(1)}
 * ```
 *
 * @enum {number}
 */
export const ResponseSync = _enum_for_ResponseSync;

/**
 * @summary ResponseSync_singleCast
 * @description
 *
 * Monitor only the first response to a request. ITU-T Rec.
 * X.748 (03/99)
 * [§8.4.13](https://www.itu.int/rec/T-REC-X.748-199903-I).
 * @constant
 * @type {number}
 */
export const ResponseSync_singleCast: ResponseSync =
    ResponseSync.singleCast; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary singleCast
 * @description
 *
 * Monitor only the first response to a request. ITU-T Rec.
 * X.748 (03/99)
 * [§8.4.13](https://www.itu.int/rec/T-REC-X.748-199903-I).
 * @constant
 * @type {number}
 */
export const singleCast: ResponseSync =
    ResponseSync.singleCast; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ResponseSync_bestEffort
 * @description
 *
 * Time until the first of several responses. ITU-T Rec. X.748
 * (03/99)
 * [§8.4.13](https://www.itu.int/rec/T-REC-X.748-199903-I).
 * @constant
 * @type {number}
 */
export const ResponseSync_bestEffort: ResponseSync =
    ResponseSync.bestEffort; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary bestEffort
 * @description
 *
 * Time until the first of several responses. ITU-T Rec. X.748
 * (03/99)
 * [§8.4.13](https://www.itu.int/rec/T-REC-X.748-199903-I).
 * @constant
 * @type {number}
 */
export const bestEffort: ResponseSync =
    ResponseSync.bestEffort; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ResponseSync_atomic
 * @description
 *
 * Time until all responses return. ITU-T Rec. X.748 (03/99)
 * [§8.4.13](https://www.itu.int/rec/T-REC-X.748-199903-I).
 * @constant
 * @type {number}
 */
export const ResponseSync_atomic: ResponseSync =
    ResponseSync.atomic; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary atomic
 * @description
 *
 * Time until all responses return. ITU-T Rec. X.748 (03/99)
 * [§8.4.13](https://www.itu.int/rec/T-REC-X.748-199903-I).
 * @constant
 * @type {number}
 */
export const atomic: ResponseSync =
    ResponseSync.atomic; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_ResponseSync = $._decodeEnumerated;


export const _encode_ResponseSync = $._encodeEnumerated;


/* eslint-enable */
