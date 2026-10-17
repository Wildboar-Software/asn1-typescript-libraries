/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AMFEventType
 * @description
 * 
 * The AMFEventType represents the AmfEventReport IE (TS 29.518 [22] clause
 * 6.2.6.2.5) which triggered the LocationPresenceReport (clause 7.3.3.2.47).
 *
 * 3GPP TS 33.128, clause 7.3.3.2.64.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AMFEventType  ::=  ENUMERATED
 * {
 *     locationReport(1),
 *     presenceInAOIReport(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_AMFEventType {
    /**
     * @description
     *
     * Indicates that the AmfEventReport which triggered the
     * LocationPresenceReport was the LOCATION_REPORT.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.64.
     */
    locationReport = 1,
    /**
     * @description
     *
     * Indicates that the AmfEventReport which triggered the
     * LocationPresenceReport was the PRESENCE_IN_AOI_REPORT.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.64.
     */
    presenceInAOIReport = 2,
}

/**
 * @summary AMFEventType
 * @description
 * 
 * The AMFEventType represents the AmfEventReport IE (TS 29.518 [22] clause
 * 6.2.6.2.5) which triggered the LocationPresenceReport (clause 7.3.3.2.47).
 *
 * 3GPP TS 33.128, clause 7.3.3.2.64.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AMFEventType  ::=  ENUMERATED
 * {
 *     locationReport(1),
 *     presenceInAOIReport(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type AMFEventType = _enum_for_AMFEventType;

/**
 * @summary AMFEventType
 * @description
 * 
 * The AMFEventType represents the AmfEventReport IE (TS 29.518 [22] clause
 * 6.2.6.2.5) which triggered the LocationPresenceReport (clause 7.3.3.2.47).
 *
 * 3GPP TS 33.128, clause 7.3.3.2.64.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AMFEventType  ::=  ENUMERATED
 * {
 *     locationReport(1),
 *     presenceInAOIReport(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const AMFEventType = _enum_for_AMFEventType;

/**
 * @summary AMFEventType_locationReport
 * @description
 *
 * Indicates that the AmfEventReport which triggered the LocationPresenceReport
 * was the LOCATION_REPORT.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.64.
 *
 * @constant
 * @type {number}
 */
export
const AMFEventType_locationReport: AMFEventType = AMFEventType.locationReport; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary locationReport
 * @description
 *
 * Indicates that the AmfEventReport which triggered the LocationPresenceReport
 * was the LOCATION_REPORT.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.64.
 *
 * @constant
 * @type {number}
 */
export
const locationReport: AMFEventType = AMFEventType.locationReport; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AMFEventType_presenceInAOIReport
 * @description
 *
 * Indicates that the AmfEventReport which triggered the LocationPresenceReport
 * was the PRESENCE_IN_AOI_REPORT.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.64.
 *
 * @constant
 * @type {number}
 */
export
const AMFEventType_presenceInAOIReport: AMFEventType = AMFEventType.presenceInAOIReport; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary presenceInAOIReport
 * @description
 *
 * Indicates that the AmfEventReport which triggered the LocationPresenceReport
 * was the PRESENCE_IN_AOI_REPORT.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.64.
 *
 * @constant
 * @type {number}
 */
export
const presenceInAOIReport: AMFEventType = AMFEventType.presenceInAOIReport; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_AMFEventType: $.ASN1Decoder<AMFEventType> = $._decodeEnumerated;
export const _encode_AMFEventType: $.ASN1Encoder<AMFEventType> = $._encodeEnumerated;


/* eslint-enable */
