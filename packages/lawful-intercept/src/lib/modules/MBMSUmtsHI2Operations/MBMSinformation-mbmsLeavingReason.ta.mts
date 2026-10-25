/* eslint-disable */
import {
    type ENUMERATED
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
 * Why the target left the MBMS service, or why the service was ended for the
 * target. Mandatory on the leaving End record (table 9.8).
 * 
 * 3GPP TS 33.108, table 9.2 and annex B.8.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MBMSinformation-mbmsLeavingReason ::= ENUMERATED {
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
 * @description
 * 
 * The UE initiated or requested leaving (table 9.2).
 * @constant
 * @type {number}
 */
export
const MBMSinformation_mbmsLeavingReason_uEinitiatedRequested = _enum_for_MBMSinformation_mbmsLeavingReason.uEinitiatedRequested; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uEinitiatedRequested
 * @description
 * 
 * The UE requested leaving (table 9.2).
 * @constant
 * @type {number}
 */
export
const uEinitiatedRequested = MBMSinformation_mbmsLeavingReason_uEinitiatedRequested; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MBMSinformation_mbmsLeavingReason_bMSCorNetworkTerminated
 * @description
 * 
 * The BM-SC or the network ended the service for the UE, for example a GSN
 * session dropped or the BM-SC subscription expired (table 9.2). If the reason
 * is subscription expiry, a subscription-termination report is also generated.
 * @constant
 * @type {number}
 */
export
const MBMSinformation_mbmsLeavingReason_bMSCorNetworkTerminated = _enum_for_MBMSinformation_mbmsLeavingReason.bMSCorNetworkTerminated; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary bMSCorNetworkTerminated
 * @description
 * 
 * BM-SC or network ended the service for the UE (table 9.2).
 * @constant
 * @type {number}
 */
export
const bMSCorNetworkTerminated = MBMSinformation_mbmsLeavingReason_bMSCorNetworkTerminated; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_MBMSinformation_mbmsLeavingReason: $.ASN1Decoder<MBMSinformation_mbmsLeavingReason> = $._decodeEnumerated;
export const _encode_MBMSinformation_mbmsLeavingReason: $.ASN1Encoder<MBMSinformation_mbmsLeavingReason> = $._encodeEnumerated;


/* eslint-enable */
