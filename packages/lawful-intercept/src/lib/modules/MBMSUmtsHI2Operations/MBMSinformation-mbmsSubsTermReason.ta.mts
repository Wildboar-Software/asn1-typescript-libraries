/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_MBMSinformation_mbmsSubsTermReason {
    userInitiated = 0,
    subscriptionExpired = 1,
}

/**
 * @summary MBMSinformation_mbmsSubsTermReason
 * @description
 * 
 * Why the MBMS subscription ended. Mandatory on the subscription termination
 * REPORT (table 9.5).
 * 
 * 3GPP TS 33.108, table 9.2 and annex B.8.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MBMSinformation-mbmsSubsTermReason ::= ENUMERATED {
 *     userInitiated            (0),
 *     subscriptionExpired        (1),
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type MBMSinformation_mbmsSubsTermReason = _enum_for_MBMSinformation_mbmsSubsTermReason | ENUMERATED;

/**
 * @summary MBMSinformation_mbmsSubsTermReason_userInitiated
 * @description
 * 
 * The user initiated or requested termination, including through customer
 * services or another off-line means (table 9.2).
 * @constant
 * @type {number}
 */
export
const MBMSinformation_mbmsSubsTermReason_userInitiated: _enum_for_MBMSinformation_mbmsSubsTermReason.userInitiated = _enum_for_MBMSinformation_mbmsSubsTermReason.userInitiated; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary userInitiated
 * @description
 * 
 * The user requested subscription termination (table 9.2).
 * @constant
 * @type {number}
 */
export
const userInitiated: _enum_for_MBMSinformation_mbmsSubsTermReason.userInitiated = MBMSinformation_mbmsSubsTermReason_userInitiated; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MBMSinformation_mbmsSubsTermReason_subscriptionExpired
 * @description
 * 
 * The subscription expired (table 9.2).
 * @constant
 * @type {number}
 */
export
const MBMSinformation_mbmsSubsTermReason_subscriptionExpired: _enum_for_MBMSinformation_mbmsSubsTermReason.subscriptionExpired = _enum_for_MBMSinformation_mbmsSubsTermReason.subscriptionExpired; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary subscriptionExpired
 * @description
 * 
 * The subscription expired (table 9.2).
 * @constant
 * @type {number}
 */
export
const subscriptionExpired: _enum_for_MBMSinformation_mbmsSubsTermReason.subscriptionExpired = MBMSinformation_mbmsSubsTermReason_subscriptionExpired; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_MBMSinformation_mbmsSubsTermReason: $.ASN1Decoder<MBMSinformation_mbmsSubsTermReason> = $._decodeEnumerated;
export const _encode_MBMSinformation_mbmsSubsTermReason: $.ASN1Encoder<MBMSinformation_mbmsSubsTermReason> = $._encodeEnumerated;


/* eslint-enable */
