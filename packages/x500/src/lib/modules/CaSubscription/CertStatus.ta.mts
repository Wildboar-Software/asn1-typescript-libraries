/* eslint-disable */
import { ASN1Element as _Element, ENUMERATED } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";

export enum _enum_for_CertStatus {
    good = 0,
    revoked = 1,
    on_hold = 2,
    expired = 3,
}

/**
 * @summary CertStatus
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertStatus  ::=  ENUMERATED {
 *   good    (0),
 *   revoked (1),
 *   on-hold (2),
 *   expired (3),
 *   ... }
 * ```
 *
 * @enum {number}
 */
export type CertStatus = _enum_for_CertStatus | ENUMERATED;

/**
 * @summary CertStatus_good
 * @constant
 * @type {number}
 */
export const CertStatus_good: CertStatus = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary good
 * @constant
 * @type {number}
 */
export const good: CertStatus = CertStatus_good; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CertStatus_revoked
 * @constant
 * @type {number}
 */
export const CertStatus_revoked: CertStatus = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary revoked
 * @constant
 * @type {number}
 */
export const revoked: CertStatus = CertStatus_revoked; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CertStatus_on_hold
 * @constant
 * @type {number}
 */
export const CertStatus_on_hold: CertStatus = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary on_hold
 * @constant
 * @type {number}
 */
export const on_hold: CertStatus = CertStatus_on_hold; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CertStatus_expired
 * @constant
 * @type {number}
 */
export const CertStatus_expired: CertStatus = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary expired
 * @constant
 * @type {number}
 */
export const expired: CertStatus = CertStatus_expired; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_CertStatus = $._decodeEnumerated;


export const _encode_CertStatus = $._encodeEnumerated;


/* eslint-enable */
