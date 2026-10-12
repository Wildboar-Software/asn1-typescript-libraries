/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
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
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MBMSinformation-mbmsSubsTermReason ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
type MBMSinformation_mbmsSubsTermReason = _enum_for_MBMSinformation_mbmsSubsTermReason | ENUMERATED;

/**
 * @summary MBMSinformation_mbmsSubsTermReason_userInitiated
 * @constant
 * @type {number}
 */
export
const MBMSinformation_mbmsSubsTermReason_userInitiated: MBMSinformation_mbmsSubsTermReason = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary userInitiated
 * @constant
 * @type {number}
 */
export
const userInitiated: MBMSinformation_mbmsSubsTermReason = MBMSinformation_mbmsSubsTermReason_userInitiated; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MBMSinformation_mbmsSubsTermReason_subscriptionExpired
 * @constant
 * @type {number}
 */
export
const MBMSinformation_mbmsSubsTermReason_subscriptionExpired: MBMSinformation_mbmsSubsTermReason = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary subscriptionExpired
 * @constant
 * @type {number}
 */
export
const subscriptionExpired: MBMSinformation_mbmsSubsTermReason = MBMSinformation_mbmsSubsTermReason_subscriptionExpired; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_MBMSinformation_mbmsSubsTermReason: $.ASN1Decoder<MBMSinformation_mbmsSubsTermReason> = $._decodeEnumerated;
export const _encode_MBMSinformation_mbmsSubsTermReason: $.ASN1Encoder<MBMSinformation_mbmsSubsTermReason> = $._encodeEnumerated;


/* eslint-enable */
