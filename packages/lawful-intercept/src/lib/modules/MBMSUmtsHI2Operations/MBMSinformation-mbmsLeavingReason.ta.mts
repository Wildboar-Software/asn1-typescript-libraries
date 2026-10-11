/* eslint-disable */
import {
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

export
enum _enum_for_MBMSinformation_mbmsLeavingReason {
    uEinitiatedRequested = 0,
    bMSCorNetworkTerminated = 1,
}

/**
 * @summary MBMSinformation_mbmsLeavingReason
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MBMSinformation-mbmsLeavingReason ::= ENUMERATED
 * {
 *     uEinitiatedRequested    (0),
 *     bMSCorNetworkTerminated    (1),
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type MBMSinformation_mbmsLeavingReason = _enum_for_MBMSinformation_mbmsLeavingReason | ENUMERATED;

/**
 * @summary MBMSinformation_mbmsLeavingReason_uEinitiatedRequested
 * @constant
 * @type {number}
 */
export
const MBMSinformation_mbmsLeavingReason_uEinitiatedRequested: MBMSinformation_mbmsLeavingReason = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uEinitiatedRequested
 * @constant
 * @type {number}
 */
export
const uEinitiatedRequested: MBMSinformation_mbmsLeavingReason = MBMSinformation_mbmsLeavingReason_uEinitiatedRequested; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MBMSinformation_mbmsLeavingReason_bMSCorNetworkTerminated
 * @constant
 * @type {number}
 */
export
const MBMSinformation_mbmsLeavingReason_bMSCorNetworkTerminated: MBMSinformation_mbmsLeavingReason = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary bMSCorNetworkTerminated
 * @constant
 * @type {number}
 */
export
const bMSCorNetworkTerminated: MBMSinformation_mbmsLeavingReason = MBMSinformation_mbmsLeavingReason_bMSCorNetworkTerminated; /* SHORT_NAMED_ENUMERATED_VALUE */

export const _decode_MBMSinformation_mbmsLeavingReason: $.ASN1Decoder<MBMSinformation_mbmsLeavingReason> = $._decodeEnumerated;

export const _encode_MBMSinformation_mbmsLeavingReason: $.ASN1Encoder<MBMSinformation_mbmsLeavingReason> = $._encodeEnumerated;

/* eslint-enable */
