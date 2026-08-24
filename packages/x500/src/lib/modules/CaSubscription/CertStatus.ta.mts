/* eslint-disable */
import { ASN1Element as _Element, ENUMERATED } from "@wildboar/asn1";
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
 * EE cert status: `good`(0) trustable; `revoked`(1) not; `on_hold`(2) do
 * not trust for now; `expired`(3) not. Subscribe-ok `revokeReason` is
 * present only if this is `revoked`.
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
 * @description
 *
 * The represented EE cert can be trusted.
 * @constant
 * @type {number}
 */
export const CertStatus_good: CertStatus = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary good
 * @description
 *
 * The represented EE cert can be trusted.
 * @constant
 * @type {number}
 */
export const good: CertStatus = CertStatus_good; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CertStatus_revoked
 * @description
 *
 * Revoked; no longer trusted.
 * @constant
 * @type {number}
 */
export const CertStatus_revoked: CertStatus = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary revoked
 * @description
 *
 * Revoked; no longer trusted.
 * @constant
 * @type {number}
 */
export const revoked: CertStatus = CertStatus_revoked; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CertStatus_on_hold
 * @description
 *
 * On hold (ASN.1 `on-hold`); should not be trusted for the time being.
 * @constant
 * @type {number}
 */
export const CertStatus_on_hold: CertStatus = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary on_hold
 * @description
 *
 * On hold (ASN.1 `on-hold`); should not be trusted for the time being.
 * @constant
 * @type {number}
 */
export const on_hold: CertStatus = CertStatus_on_hold; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CertStatus_expired
 * @description
 *
 * Expired; no longer trusted.
 * @constant
 * @type {number}
 */
export const CertStatus_expired: CertStatus = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary expired
 * @description
 *
 * Expired; no longer trusted.
 * @constant
 * @type {number}
 */
export const expired: CertStatus = CertStatus_expired; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_CertStatus = $._decodeEnumerated;


export const _encode_CertStatus = $._encodeEnumerated;


/* eslint-enable */
