/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary PKIStatus
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PKIStatus  ::=  INTEGER {
 *     granted                (0),
 *     -- when the PKIStatus contains the value zero a TimeStampToken, as requested, is present.
 *     grantedWithMods        (1),
 *     -- when the PKIStatus contains the value one a TimeStampToken, with modifications, is present.
 *     rejection              (2),
 *     waiting                (3),
 *     revocationWarning      (4),
 *     -- this message contains a warning that a revocation is
 *     -- imminent
 *     revocationNotification (5)
 *     -- notification that a revocation has occurred
 * }
 * ```
 */
export type PKIStatus = INTEGER;

/**
 * @summary PKIStatus_granted
 * @constant
 * @type {number}
 */
export const PKIStatus_granted: PKIStatus = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PKIStatus_granted
 * @constant
 * @type {number}
 */
export const granted: PKIStatus = PKIStatus_granted; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PKIStatus_grantedWithMods
 * @constant
 * @type {number}
 */
export const PKIStatus_grantedWithMods: PKIStatus = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PKIStatus_grantedWithMods
 * @constant
 * @type {number}
 */
export const grantedWithMods: PKIStatus = PKIStatus_grantedWithMods; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PKIStatus_rejection
 * @constant
 * @type {number}
 */
export const PKIStatus_rejection: PKIStatus = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PKIStatus_rejection
 * @constant
 * @type {number}
 */
export const rejection: PKIStatus = PKIStatus_rejection; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PKIStatus_waiting
 * @constant
 * @type {number}
 */
export const PKIStatus_waiting: PKIStatus = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PKIStatus_waiting
 * @constant
 * @type {number}
 */
export const waiting: PKIStatus = PKIStatus_waiting; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PKIStatus_revocationWarning
 * @constant
 * @type {number}
 */
export const PKIStatus_revocationWarning: PKIStatus = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PKIStatus_revocationWarning
 * @constant
 * @type {number}
 */
export const revocationWarning: PKIStatus = PKIStatus_revocationWarning; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PKIStatus_revocationNotification
 * @constant
 * @type {number}
 */
export const PKIStatus_revocationNotification: PKIStatus = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PKIStatus_revocationNotification
 * @constant
 * @type {number}
 */
export const revocationNotification: PKIStatus = PKIStatus_revocationNotification; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_PKIStatus = $._decodeInteger;


export const _encode_PKIStatus = $._encodeInteger;


/* eslint-enable */
