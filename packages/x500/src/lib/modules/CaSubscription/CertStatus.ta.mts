/* eslint-disable */
import { ASN1Element as _Element, type ENUMERATED } from "@wildboar/asn1";
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
export const CertStatus_good: _enum_for_CertStatus.good = _enum_for_CertStatus.good; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary good
 * @description
 *
 * The represented EE cert can be trusted.
 * @constant
 * @type {number}
 */
export const good: _enum_for_CertStatus.good = CertStatus_good; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CertStatus_revoked
 * @description
 *
 * Revoked; no longer trusted.
 * @constant
 * @type {number}
 */
export const CertStatus_revoked: _enum_for_CertStatus.revoked = _enum_for_CertStatus.revoked; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary revoked
 * @description
 *
 * Revoked; no longer trusted.
 * @constant
 * @type {number}
 */
export const revoked: _enum_for_CertStatus.revoked = CertStatus_revoked; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CertStatus_on_hold
 * @description
 *
 * On hold (ASN.1 `on-hold`); should not be trusted for the time being.
 * @constant
 * @type {number}
 */
export const CertStatus_on_hold: _enum_for_CertStatus.on_hold = _enum_for_CertStatus.on_hold; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary on_hold
 * @description
 *
 * On hold (ASN.1 `on-hold`); should not be trusted for the time being.
 * @constant
 * @type {number}
 */
export const on_hold: _enum_for_CertStatus.on_hold = CertStatus_on_hold; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CertStatus_expired
 * @description
 *
 * Expired; no longer trusted.
 * @constant
 * @type {number}
 */
export const CertStatus_expired: _enum_for_CertStatus.expired = _enum_for_CertStatus.expired; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary expired
 * @description
 *
 * Expired; no longer trusted.
 * @constant
 * @type {number}
 */
export const expired: _enum_for_CertStatus.expired = CertStatus_expired; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_CertStatus: $.ASN1Decoder<number> = $._decodeEnumerated;


export const _encode_CertStatus: $.ASN1Encoder<number> = $._encodeEnumerated;


/* eslint-enable */
