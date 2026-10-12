/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AMFEventType
 * @description
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
    locationReport = 1,
    presenceInAOIReport = 2,
}

/**
 * @summary AMFEventType
 * @description
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
 * @constant
 * @type {number}
 */
export
const AMFEventType_locationReport: AMFEventType = AMFEventType.locationReport; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary locationReport
 * @constant
 * @type {number}
 */
export
const locationReport: AMFEventType = AMFEventType.locationReport; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AMFEventType_presenceInAOIReport
 * @constant
 * @type {number}
 */
export
const AMFEventType_presenceInAOIReport: AMFEventType = AMFEventType.presenceInAOIReport; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary presenceInAOIReport
 * @constant
 * @type {number}
 */
export
const presenceInAOIReport: AMFEventType = AMFEventType.presenceInAOIReport; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_AMFEventType: $.ASN1Decoder<AMFEventType> = $._decodeEnumerated;
export const _encode_AMFEventType: $.ASN1Encoder<AMFEventType> = $._encodeEnumerated;


/* eslint-enable */
