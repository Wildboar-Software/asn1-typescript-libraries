/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary CIUnwantedUserStatus
 * @description
 *
 * Result of intrusion: whether the unwanted user stays in the call
 * (ECMA-203 §6.3.1). Returned by `callIntrusionRequest`.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-203/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CIUnwantedUserStatus  ::=  ENUMERATED {
 *     unwantedUserIntruded(0),
 *     unwantedUserIsolated(1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_CIUnwantedUserStatus {
    unwantedUserIntruded = 0,
    unwantedUserIsolated = 1,
}

/**
 * @summary CIUnwantedUserStatus
 * @description
 *
 * Result of intrusion: whether the unwanted user stays in the call
 * (ECMA-203 §6.3.1). Returned by `callIntrusionRequest`.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-203/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CIUnwantedUserStatus  ::=  ENUMERATED {
 *     unwantedUserIntruded(0),
 *     unwantedUserIsolated(1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type CIUnwantedUserStatus = _enum_for_CIUnwantedUserStatus;

/**
 * @summary CIUnwantedUserStatus
 * @description
 *
 * Result of intrusion: whether the unwanted user stays in the call
 * (ECMA-203 §6.3.1). Returned by `callIntrusionRequest`.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-203/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CIUnwantedUserStatus  ::=  ENUMERATED {
 *     unwantedUserIntruded(0),
 *     unwantedUserIsolated(1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const CIUnwantedUserStatus = _enum_for_CIUnwantedUserStatus;

/**
 * @summary CIUnwantedUserStatus_unwantedUserIntruded
 * @description
 *
 * Three-party conference of the calling user, the called user, and
 * the unwanted user (ECMA-203 §6.6.2.1.1). The Originating PINX
 * enters CI-Orig-Invoked (§6.6.1.1, §6.6.1.5).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-203/
 * @constant
 * @type {number}
 */
export
const CIUnwantedUserStatus_unwantedUserIntruded = CIUnwantedUserStatus.unwantedUserIntruded satisfies CIUnwantedUserStatus; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unwantedUserIntruded
 * @description Alias of {@link CIUnwantedUserStatus_unwantedUserIntruded}.
 * @constant
 * @type {number}
 */
export
const unwantedUserIntruded = CIUnwantedUserStatus.unwantedUserIntruded satisfies CIUnwantedUserStatus; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CIUnwantedUserStatus_unwantedUserIsolated
 * @description
 *
 * The unwanted user is disconnected and the calling and called users
 * are connected (ECMA-203 §6.6.2.1.1). On the first intrusion the
 * Originating PINX enters CI-Orig-Isolated (§6.6.1.1). On
 * reinvocation during wait on busy, §6.6.2.5.1 tells the Terminating
 * PINX to enter CI-Dest-Invoked rather than CI-Dest-Isolated.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-203/
 * @constant
 * @type {number}
 */
export
const CIUnwantedUserStatus_unwantedUserIsolated = CIUnwantedUserStatus.unwantedUserIsolated satisfies CIUnwantedUserStatus; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unwantedUserIsolated
 * @description Alias of {@link CIUnwantedUserStatus_unwantedUserIsolated}.
 * @constant
 * @type {number}
 */
export
const unwantedUserIsolated = CIUnwantedUserStatus.unwantedUserIsolated satisfies CIUnwantedUserStatus; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_CIUnwantedUserStatus: $.ASN1Decoder<CIUnwantedUserStatus> = $._decodeEnumerated;

export
const _encode_CIUnwantedUserStatus: $.ASN1Encoder<CIUnwantedUserStatus> = $._encodeEnumerated;

/* eslint-enable */
