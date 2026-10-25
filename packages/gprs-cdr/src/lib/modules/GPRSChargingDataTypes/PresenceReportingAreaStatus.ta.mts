/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PresenceReportingAreaStatus
 * @description
 *
 * Presence Reporting Area Status contains the status of the UE presence
 * (i.e. indication on whether the UE is inside or outside) in the Presence
 * Reporting Area(s) identified by "Presence Reporting Area identifier(s)"
 * contained in PGW-CDR main level. This is included in the service data
 * container when the initial status is reported after opening of PGW-CDR, or
 * if previous container's change condition is "Presence in Presence
 * Reporting Area Change". This field is not applicable in multiple PRA(s).
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.24.
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
 * Presence Reporting Area Status contains the status of the UE presence
 * (i.e. indication on whether the UE is inside or outside) in the Presence
 * Reporting Area(s) identified by "Presence Reporting Area identifier(s)"
 * contained in PGW-CDR main level. This is included in the service data
 * container when the initial status is reported after opening of PGW-CDR, or
 * if previous container's change condition is "Presence in Presence
 * Reporting Area Change". This field is not applicable in multiple PRA(s).
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.24.
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
 * Presence Reporting Area Status contains the status of the UE presence
 * (i.e. indication on whether the UE is inside or outside) in the Presence
 * Reporting Area(s) identified by "Presence Reporting Area identifier(s)"
 * contained in PGW-CDR main level. This is included in the service data
 * container when the initial status is reported after opening of PGW-CDR, or
 * if previous container's change condition is "Presence in Presence
 * Reporting Area Change". This field is not applicable in multiple PRA(s).
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.24.
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
const PresenceReportingAreaStatus_insideArea = PresenceReportingAreaStatus.insideArea; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary insideArea
 * @constant
 * @type {number}
 */
export
const insideArea = PresenceReportingAreaStatus.insideArea; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PresenceReportingAreaStatus_outsideArea
 * @constant
 * @type {number}
 */
export
const PresenceReportingAreaStatus_outsideArea = PresenceReportingAreaStatus.outsideArea; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary outsideArea
 * @constant
 * @type {number}
 */
export
const outsideArea = PresenceReportingAreaStatus.outsideArea; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PresenceReportingAreaStatus_inactive
 * @constant
 * @type {number}
 */
export
const PresenceReportingAreaStatus_inactive = PresenceReportingAreaStatus.inactive; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary inactive
 * @constant
 * @type {number}
 */
export
const inactive = PresenceReportingAreaStatus.inactive; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PresenceReportingAreaStatus_unknown
 * @constant
 * @type {number}
 */
export
const PresenceReportingAreaStatus_unknown = PresenceReportingAreaStatus.unknown; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknown
 * @constant
 * @type {number}
 */
export
const unknown = PresenceReportingAreaStatus.unknown; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_PresenceReportingAreaStatus: $.ASN1Decoder<PresenceReportingAreaStatus> = $._decodeEnumerated;

export
const _encode_PresenceReportingAreaStatus: $.ASN1Encoder<PresenceReportingAreaStatus> = $._encodeEnumerated;

/* eslint-enable */
