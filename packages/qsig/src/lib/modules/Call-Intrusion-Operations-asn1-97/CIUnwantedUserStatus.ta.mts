/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CIUnwantedUserStatus
 * @description
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
 * @constant
 * @type {number}
 */
export
const CIUnwantedUserStatus_unwantedUserIntruded: CIUnwantedUserStatus = CIUnwantedUserStatus.unwantedUserIntruded; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unwantedUserIntruded
 * @constant
 * @type {number}
 */
export
const unwantedUserIntruded: CIUnwantedUserStatus = CIUnwantedUserStatus.unwantedUserIntruded; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CIUnwantedUserStatus_unwantedUserIsolated
 * @constant
 * @type {number}
 */
export
const CIUnwantedUserStatus_unwantedUserIsolated: CIUnwantedUserStatus = CIUnwantedUserStatus.unwantedUserIsolated; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unwantedUserIsolated
 * @constant
 * @type {number}
 */
export
const unwantedUserIsolated: CIUnwantedUserStatus = CIUnwantedUserStatus.unwantedUserIsolated; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_CIUnwantedUserStatus: $.ASN1Decoder<CIUnwantedUserStatus> = $._decodeEnumerated;

export
const _encode_CIUnwantedUserStatus: $.ASN1Encoder<CIUnwantedUserStatus> = $._encodeEnumerated;

/* eslint-enable */
