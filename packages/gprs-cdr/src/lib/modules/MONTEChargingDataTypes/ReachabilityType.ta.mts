/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ReachabilityType
 * @description
 *
 * Reachability type for a UE-reachability Monitoring Event.
 * Clause 5.1 gives SMS and data as the examples. The same type
 * is used as `reachabilityInformation` on a report, which table
 * 6.1.3.3.2 calls the reachability status of the UE.
 *
 * 3GPP TS 32.278 V19.0.0 clauses 5.1, 6.1.3.2 and 6.1.3.3.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReachabilityType  ::=  ENUMERATED {
 *    reachabilityforSMS     ( 0 ),
 *    reachabilityforData    ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ReachabilityType {
    reachabilityforSMS = 0,
    reachabilityforData = 1,
}

/**
 * @summary ReachabilityType
 * @description
 *
 * Reachability type for a UE-reachability Monitoring Event.
 * Clause 5.1 gives SMS and data as the examples. The same type
 * is used as `reachabilityInformation` on a report, which table
 * 6.1.3.3.2 calls the reachability status of the UE.
 *
 * 3GPP TS 32.278 V19.0.0 clauses 5.1, 6.1.3.2 and 6.1.3.3.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReachabilityType  ::=  ENUMERATED {
 *    reachabilityforSMS     ( 0 ),
 *    reachabilityforData    ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
type ReachabilityType = _enum_for_ReachabilityType;

/**
 * @summary ReachabilityType
 * @description
 *
 * Reachability type for a UE-reachability Monitoring Event.
 * Clause 5.1 gives SMS and data as the examples. The same type
 * is used as `reachabilityInformation` on a report, which table
 * 6.1.3.3.2 calls the reachability status of the UE.
 *
 * 3GPP TS 32.278 V19.0.0 clauses 5.1, 6.1.3.2 and 6.1.3.3.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReachabilityType  ::=  ENUMERATED {
 *    reachabilityforSMS     ( 0 ),
 *    reachabilityforData    ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
const ReachabilityType = _enum_for_ReachabilityType;

/**
 * @summary ReachabilityType_reachabilityforSMS
 * @description
 *
 * Reachability for SMS.
 *
 * 3GPP TS 32.278 V19.0.0 clause 5.1.
 *
 * @constant
 * @type {number}
 */
export
const ReachabilityType_reachabilityforSMS = ReachabilityType.reachabilityforSMS; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reachabilityforSMS
 * @description
 *
 * Reachability for SMS. See
 * {@link ReachabilityType_reachabilityforSMS}.
 *
 * @constant
 * @type {number}
 */
export
const reachabilityforSMS = ReachabilityType.reachabilityforSMS; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReachabilityType_reachabilityforData
 * @description
 *
 * Reachability for data.
 *
 * 3GPP TS 32.278 V19.0.0 clause 5.1.
 *
 * @constant
 * @type {number}
 */
export
const ReachabilityType_reachabilityforData = ReachabilityType.reachabilityforData; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reachabilityforData
 * @description
 *
 * Reachability for data. See
 * {@link ReachabilityType_reachabilityforData}.
 *
 * @constant
 * @type {number}
 */
export
const reachabilityforData = ReachabilityType.reachabilityforData; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_ReachabilityType: $.ASN1Decoder<ReachabilityType> = $._decodeEnumerated;

export
const _encode_ReachabilityType: $.ASN1Encoder<ReachabilityType> = $._encodeEnumerated;

/* eslint-enable */
