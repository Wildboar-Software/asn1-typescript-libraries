/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ReachabilityType
 * @description
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
 * @constant
 * @type {number}
 */
export
const ReachabilityType_reachabilityforSMS: ReachabilityType = ReachabilityType.reachabilityforSMS; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reachabilityforSMS
 * @constant
 * @type {number}
 */
export
const reachabilityforSMS: ReachabilityType = ReachabilityType.reachabilityforSMS; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReachabilityType_reachabilityforData
 * @constant
 * @type {number}
 */
export
const ReachabilityType_reachabilityforData: ReachabilityType = ReachabilityType.reachabilityforData; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reachabilityforData
 * @constant
 * @type {number}
 */
export
const reachabilityforData: ReachabilityType = ReachabilityType.reachabilityforData; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_ReachabilityType: $.ASN1Decoder<ReachabilityType> = $._decodeEnumerated;

export
const _encode_ReachabilityType: $.ASN1Encoder<ReachabilityType> = $._encodeEnumerated;

/* eslint-enable */
