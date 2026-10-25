/* eslint-disable */
import { ASN1Element as _Element, type INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary PKIStatus
 * @description
 *
 * Status code in `PKIStatusInfo` for a time-stamping response
 * ([RFC 3161 §2.4.2](https://datatracker.ietf.org/doc/html/rfc3161#section-2.4.2)).
 * Based on CMP status in
 * [RFC 2510](https://datatracker.ietf.org/doc/html/rfc2510) §3.2.3.
 *
 * When the value is `granted`(0) or `grantedWithMods`(1), a
 * `TimeStampToken` MUST be present; otherwise it MUST NOT. Compliant
 * servers SHOULD NOT produce other values; compliant clients MUST
 * generate an error if unrecognized values are present.
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
 * @description
 *
 * `granted`(0): a `TimeStampToken` as requested is present
 * ([RFC 3161 §2.4.2](https://datatracker.ietf.org/doc/html/rfc3161#section-2.4.2)).
 *
 * @constant
 * @type {number}
 */
export const PKIStatus_granted = 0 satisfies PKIStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PKIStatus_granted
 * @description
 *
 * `granted`(0): a `TimeStampToken` as requested is present
 * ([RFC 3161 §2.4.2](https://datatracker.ietf.org/doc/html/rfc3161#section-2.4.2)).
 *
 * @constant
 * @type {number}
 */
export const granted = PKIStatus_granted satisfies PKIStatus; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PKIStatus_grantedWithMods
 * @description
 *
 * `grantedWithMods`(1): a `TimeStampToken` with modifications is
 * present
 * ([RFC 3161 §2.4.2](https://datatracker.ietf.org/doc/html/rfc3161#section-2.4.2)).
 *
 * @constant
 * @type {number}
 */
export const PKIStatus_grantedWithMods = 1 satisfies PKIStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PKIStatus_grantedWithMods
 * @description
 *
 * `grantedWithMods`(1): a `TimeStampToken` with modifications is
 * present
 * ([RFC 3161 §2.4.2](https://datatracker.ietf.org/doc/html/rfc3161#section-2.4.2)).
 *
 * @constant
 * @type {number}
 */
export const grantedWithMods = PKIStatus_grantedWithMods satisfies PKIStatus; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PKIStatus_rejection
 * @description
 *
 * `rejection`(2): request rejected; no `TimeStampToken`
 * ([RFC 3161 §2.4.2](https://datatracker.ietf.org/doc/html/rfc3161#section-2.4.2)).
 *
 * @constant
 * @type {number}
 */
export const PKIStatus_rejection = 2 satisfies PKIStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PKIStatus_rejection
 * @description
 *
 * `rejection`(2): request rejected; no `TimeStampToken`
 * ([RFC 3161 §2.4.2](https://datatracker.ietf.org/doc/html/rfc3161#section-2.4.2)).
 *
 * @constant
 * @type {number}
 */
export const rejection = PKIStatus_rejection satisfies PKIStatus; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PKIStatus_waiting
 * @description
 *
 * `waiting`(3): no `TimeStampToken` present
 * ([RFC 3161 §2.4.2](https://datatracker.ietf.org/doc/html/rfc3161#section-2.4.2)).
 *
 * @constant
 * @type {number}
 */
export const PKIStatus_waiting = 3 satisfies PKIStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PKIStatus_waiting
 * @description
 *
 * `waiting`(3): no `TimeStampToken` present
 * ([RFC 3161 §2.4.2](https://datatracker.ietf.org/doc/html/rfc3161#section-2.4.2)).
 *
 * @constant
 * @type {number}
 */
export const waiting = PKIStatus_waiting satisfies PKIStatus; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PKIStatus_revocationWarning
 * @description
 *
 * `revocationWarning`(4): warning that a revocation is imminent; no
 * `TimeStampToken`
 * ([RFC 3161 §2.4.2](https://datatracker.ietf.org/doc/html/rfc3161#section-2.4.2)).
 *
 * @constant
 * @type {number}
 */
export const PKIStatus_revocationWarning = 4 satisfies PKIStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PKIStatus_revocationWarning
 * @description
 *
 * `revocationWarning`(4): warning that a revocation is imminent; no
 * `TimeStampToken`
 * ([RFC 3161 §2.4.2](https://datatracker.ietf.org/doc/html/rfc3161#section-2.4.2)).
 *
 * @constant
 * @type {number}
 */
export const revocationWarning = PKIStatus_revocationWarning satisfies PKIStatus; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PKIStatus_revocationNotification
 * @description
 *
 * `revocationNotification`(5): notification that a revocation has
 * occurred; no `TimeStampToken`
 * ([RFC 3161 §2.4.2](https://datatracker.ietf.org/doc/html/rfc3161#section-2.4.2)).
 *
 * @constant
 * @type {number}
 */
export const PKIStatus_revocationNotification = 5 satisfies PKIStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PKIStatus_revocationNotification
 * @description
 *
 * `revocationNotification`(5): notification that a revocation has
 * occurred; no `TimeStampToken`
 * ([RFC 3161 §2.4.2](https://datatracker.ietf.org/doc/html/rfc3161#section-2.4.2)).
 *
 * @constant
 * @type {number}
 */
export const revocationNotification = PKIStatus_revocationNotification satisfies PKIStatus; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_PKIStatus = $._decodeInteger;


export const _encode_PKIStatus = $._encodeInteger;


/* eslint-enable */
