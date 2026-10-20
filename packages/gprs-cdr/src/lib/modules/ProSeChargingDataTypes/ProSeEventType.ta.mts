/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ProSeEventType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProSeEventType  ::=  ENUMERATED {
 *    openAnnouncing                  ( 0 ),
 *    openMonitoring                  ( 1 ),
 *    openMatchReport                 ( 2 ),
 *    restrictedAnnouncing            ( 3 ),
 *    restrictedMonitoring            ( 4 ),
 *    restrictedMatchReport           ( 5 ),
 *    restrictedDiscoveryRequest      ( 6 ),
 *    restrictedDiscoveryReporting    ( 7 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ProSeEventType {
    openAnnouncing = 0,
    openMonitoring = 1,
    openMatchReport = 2,
    restrictedAnnouncing = 3,
    restrictedMonitoring = 4,
    restrictedMatchReport = 5,
    restrictedDiscoveryRequest = 6,
    restrictedDiscoveryReporting = 7,
}

/**
 * @summary ProSeEventType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProSeEventType  ::=  ENUMERATED {
 *    openAnnouncing                  ( 0 ),
 *    openMonitoring                  ( 1 ),
 *    openMatchReport                 ( 2 ),
 *    restrictedAnnouncing            ( 3 ),
 *    restrictedMonitoring            ( 4 ),
 *    restrictedMatchReport           ( 5 ),
 *    restrictedDiscoveryRequest      ( 6 ),
 *    restrictedDiscoveryReporting    ( 7 ) }
 * ```
 * 
 * @enum {number}
 */
export
type ProSeEventType = _enum_for_ProSeEventType;

/**
 * @summary ProSeEventType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProSeEventType  ::=  ENUMERATED {
 *    openAnnouncing                  ( 0 ),
 *    openMonitoring                  ( 1 ),
 *    openMatchReport                 ( 2 ),
 *    restrictedAnnouncing            ( 3 ),
 *    restrictedMonitoring            ( 4 ),
 *    restrictedMatchReport           ( 5 ),
 *    restrictedDiscoveryRequest      ( 6 ),
 *    restrictedDiscoveryReporting    ( 7 ) }
 * ```
 * 
 * @enum {number}
 */
export
const ProSeEventType = _enum_for_ProSeEventType;

/**
 * @summary ProSeEventType_openAnnouncing
 * @constant
 * @type {number}
 */
export
const ProSeEventType_openAnnouncing: ProSeEventType = ProSeEventType.openAnnouncing; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary openAnnouncing
 * @constant
 * @type {number}
 */
export
const openAnnouncing: ProSeEventType = ProSeEventType.openAnnouncing; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ProSeEventType_openMonitoring
 * @constant
 * @type {number}
 */
export
const ProSeEventType_openMonitoring: ProSeEventType = ProSeEventType.openMonitoring; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary openMonitoring
 * @constant
 * @type {number}
 */
export
const openMonitoring: ProSeEventType = ProSeEventType.openMonitoring; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ProSeEventType_openMatchReport
 * @constant
 * @type {number}
 */
export
const ProSeEventType_openMatchReport: ProSeEventType = ProSeEventType.openMatchReport; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary openMatchReport
 * @constant
 * @type {number}
 */
export
const openMatchReport: ProSeEventType = ProSeEventType.openMatchReport; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ProSeEventType_restrictedAnnouncing
 * @constant
 * @type {number}
 */
export
const ProSeEventType_restrictedAnnouncing: ProSeEventType = ProSeEventType.restrictedAnnouncing; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary restrictedAnnouncing
 * @constant
 * @type {number}
 */
export
const restrictedAnnouncing: ProSeEventType = ProSeEventType.restrictedAnnouncing; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ProSeEventType_restrictedMonitoring
 * @constant
 * @type {number}
 */
export
const ProSeEventType_restrictedMonitoring: ProSeEventType = ProSeEventType.restrictedMonitoring; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary restrictedMonitoring
 * @constant
 * @type {number}
 */
export
const restrictedMonitoring: ProSeEventType = ProSeEventType.restrictedMonitoring; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ProSeEventType_restrictedMatchReport
 * @constant
 * @type {number}
 */
export
const ProSeEventType_restrictedMatchReport: ProSeEventType = ProSeEventType.restrictedMatchReport; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary restrictedMatchReport
 * @constant
 * @type {number}
 */
export
const restrictedMatchReport: ProSeEventType = ProSeEventType.restrictedMatchReport; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ProSeEventType_restrictedDiscoveryRequest
 * @constant
 * @type {number}
 */
export
const ProSeEventType_restrictedDiscoveryRequest: ProSeEventType = ProSeEventType.restrictedDiscoveryRequest; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary restrictedDiscoveryRequest
 * @constant
 * @type {number}
 */
export
const restrictedDiscoveryRequest: ProSeEventType = ProSeEventType.restrictedDiscoveryRequest; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ProSeEventType_restrictedDiscoveryReporting
 * @constant
 * @type {number}
 */
export
const ProSeEventType_restrictedDiscoveryReporting: ProSeEventType = ProSeEventType.restrictedDiscoveryReporting; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary restrictedDiscoveryReporting
 * @constant
 * @type {number}
 */
export
const restrictedDiscoveryReporting: ProSeEventType = ProSeEventType.restrictedDiscoveryReporting; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_ProSeEventType: $.ASN1Decoder<ProSeEventType> = $._decodeEnumerated;

export
const _encode_ProSeEventType: $.ASN1Encoder<ProSeEventType> = $._encodeEnumerated;

/* eslint-enable */
