/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PresenceReportingAreaStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PresenceReportingAreaStatus  ::=  ENUMERATED {
 *    insideArea     ( 0 ),
 *    outsideArea    ( 1 ),
 *    inactive       ( 2 ),
 *    unknown        ( 3 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_PresenceReportingAreaStatus {
    insideArea = 0,
    outsideArea = 1,
    inactive = 2,
    unknown = 3,
}

/**
 * @summary PresenceReportingAreaStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PresenceReportingAreaStatus  ::=  ENUMERATED {
 *    insideArea     ( 0 ),
 *    outsideArea    ( 1 ),
 *    inactive       ( 2 ),
 *    unknown        ( 3 ) }
 * ```
 * 
 * @enum {number}
 */
export
type PresenceReportingAreaStatus = _enum_for_PresenceReportingAreaStatus;

/**
 * @summary PresenceReportingAreaStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PresenceReportingAreaStatus  ::=  ENUMERATED {
 *    insideArea     ( 0 ),
 *    outsideArea    ( 1 ),
 *    inactive       ( 2 ),
 *    unknown        ( 3 ) }
 * ```
 * 
 * @enum {number}
 */
export
const PresenceReportingAreaStatus = _enum_for_PresenceReportingAreaStatus;

/**
 * @summary PresenceReportingAreaStatus_insideArea
 * @constant
 * @type {number}
 */
export
const PresenceReportingAreaStatus_insideArea: PresenceReportingAreaStatus = PresenceReportingAreaStatus.insideArea; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary insideArea
 * @constant
 * @type {number}
 */
export
const insideArea: PresenceReportingAreaStatus = PresenceReportingAreaStatus.insideArea; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PresenceReportingAreaStatus_outsideArea
 * @constant
 * @type {number}
 */
export
const PresenceReportingAreaStatus_outsideArea: PresenceReportingAreaStatus = PresenceReportingAreaStatus.outsideArea; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary outsideArea
 * @constant
 * @type {number}
 */
export
const outsideArea: PresenceReportingAreaStatus = PresenceReportingAreaStatus.outsideArea; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PresenceReportingAreaStatus_inactive
 * @constant
 * @type {number}
 */
export
const PresenceReportingAreaStatus_inactive: PresenceReportingAreaStatus = PresenceReportingAreaStatus.inactive; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary inactive
 * @constant
 * @type {number}
 */
export
const inactive: PresenceReportingAreaStatus = PresenceReportingAreaStatus.inactive; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PresenceReportingAreaStatus_unknown
 * @constant
 * @type {number}
 */
export
const PresenceReportingAreaStatus_unknown: PresenceReportingAreaStatus = PresenceReportingAreaStatus.unknown; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknown
 * @constant
 * @type {number}
 */
export
const unknown: PresenceReportingAreaStatus = PresenceReportingAreaStatus.unknown; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_PresenceReportingAreaStatus: $.ASN1Decoder<PresenceReportingAreaStatus> = $._decodeEnumerated;

export
const _encode_PresenceReportingAreaStatus: $.ASN1Encoder<PresenceReportingAreaStatus> = $._encodeEnumerated;

/* eslint-enable */
