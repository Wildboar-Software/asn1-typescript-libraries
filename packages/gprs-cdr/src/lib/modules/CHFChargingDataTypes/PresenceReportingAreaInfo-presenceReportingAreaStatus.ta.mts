/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PresenceReportingAreaInfo_presenceReportingAreaStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PresenceReportingAreaInfo-presenceReportingAreaStatus ::= ENUMERATED {
 *    insideArea     ( 0 ),
 *    outsideArea    ( 1 ),
 *    inactive       ( 2 ),
 *    unknown        ( 3 )
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_PresenceReportingAreaInfo_presenceReportingAreaStatus {
    insideArea = 0,
    outsideArea = 1,
    inactive = 2,
    unknown = 3,
}

/**
 * @summary PresenceReportingAreaInfo_presenceReportingAreaStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PresenceReportingAreaInfo-presenceReportingAreaStatus ::= ENUMERATED {
 *    insideArea     ( 0 ),
 *    outsideArea    ( 1 ),
 *    inactive       ( 2 ),
 *    unknown        ( 3 )
 * }
 * ```
 * 
 * @enum {number}
 */
export
type PresenceReportingAreaInfo_presenceReportingAreaStatus = _enum_for_PresenceReportingAreaInfo_presenceReportingAreaStatus;

/**
 * @summary PresenceReportingAreaInfo_presenceReportingAreaStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PresenceReportingAreaInfo-presenceReportingAreaStatus ::= ENUMERATED {
 *    insideArea     ( 0 ),
 *    outsideArea    ( 1 ),
 *    inactive       ( 2 ),
 *    unknown        ( 3 )
 * }
 * ```
 * 
 * @enum {number}
 */
export
const PresenceReportingAreaInfo_presenceReportingAreaStatus = _enum_for_PresenceReportingAreaInfo_presenceReportingAreaStatus;

/**
 * @summary PresenceReportingAreaInfo_presenceReportingAreaStatus_insideArea
 * @constant
 * @type {number}
 */
export
const PresenceReportingAreaInfo_presenceReportingAreaStatus_insideArea: PresenceReportingAreaInfo_presenceReportingAreaStatus = PresenceReportingAreaInfo_presenceReportingAreaStatus.insideArea; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary insideArea
 * @constant
 * @type {number}
 */
export
const insideArea: PresenceReportingAreaInfo_presenceReportingAreaStatus = PresenceReportingAreaInfo_presenceReportingAreaStatus.insideArea; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PresenceReportingAreaInfo_presenceReportingAreaStatus_outsideArea
 * @constant
 * @type {number}
 */
export
const PresenceReportingAreaInfo_presenceReportingAreaStatus_outsideArea: PresenceReportingAreaInfo_presenceReportingAreaStatus = PresenceReportingAreaInfo_presenceReportingAreaStatus.outsideArea; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary outsideArea
 * @constant
 * @type {number}
 */
export
const outsideArea: PresenceReportingAreaInfo_presenceReportingAreaStatus = PresenceReportingAreaInfo_presenceReportingAreaStatus.outsideArea; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PresenceReportingAreaInfo_presenceReportingAreaStatus_inactive
 * @constant
 * @type {number}
 */
export
const PresenceReportingAreaInfo_presenceReportingAreaStatus_inactive: PresenceReportingAreaInfo_presenceReportingAreaStatus = PresenceReportingAreaInfo_presenceReportingAreaStatus.inactive; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary inactive
 * @constant
 * @type {number}
 */
export
const inactive: PresenceReportingAreaInfo_presenceReportingAreaStatus = PresenceReportingAreaInfo_presenceReportingAreaStatus.inactive; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PresenceReportingAreaInfo_presenceReportingAreaStatus_unknown
 * @constant
 * @type {number}
 */
export
const PresenceReportingAreaInfo_presenceReportingAreaStatus_unknown: PresenceReportingAreaInfo_presenceReportingAreaStatus = PresenceReportingAreaInfo_presenceReportingAreaStatus.unknown; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknown
 * @constant
 * @type {number}
 */
export
const unknown: PresenceReportingAreaInfo_presenceReportingAreaStatus = PresenceReportingAreaInfo_presenceReportingAreaStatus.unknown; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_PresenceReportingAreaInfo_presenceReportingAreaStatus: $.ASN1Decoder<PresenceReportingAreaInfo_presenceReportingAreaStatus> = $._decodeEnumerated;

export
const _encode_PresenceReportingAreaInfo_presenceReportingAreaStatus: $.ASN1Encoder<PresenceReportingAreaInfo_presenceReportingAreaStatus> = $._encodeEnumerated;

/* eslint-enable */
