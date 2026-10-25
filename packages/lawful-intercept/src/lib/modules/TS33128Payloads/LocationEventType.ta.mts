/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary LocationEventType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LocationEventType  ::=  ENUMERATED
 * {
 *     direct(1),
 *     changeOfServeCell(2),
 *     uEPrescenceInAreaOfInterest(3),
 *     stopChangeOfServeCell(4),
 *     stopUEPresenceInAreaOfInterest(5),
 *     cancelLocationReportingForTheUE(6)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_LocationEventType {
    direct = 1,
    changeOfServeCell = 2,
    uEPrescenceInAreaOfInterest = 3,
    stopChangeOfServeCell = 4,
    stopUEPresenceInAreaOfInterest = 5,
    cancelLocationReportingForTheUE = 6,
}

/**
 * @summary LocationEventType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LocationEventType  ::=  ENUMERATED
 * {
 *     direct(1),
 *     changeOfServeCell(2),
 *     uEPrescenceInAreaOfInterest(3),
 *     stopChangeOfServeCell(4),
 *     stopUEPresenceInAreaOfInterest(5),
 *     cancelLocationReportingForTheUE(6)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type LocationEventType = _enum_for_LocationEventType;

/**
 * @summary LocationEventType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LocationEventType  ::=  ENUMERATED
 * {
 *     direct(1),
 *     changeOfServeCell(2),
 *     uEPrescenceInAreaOfInterest(3),
 *     stopChangeOfServeCell(4),
 *     stopUEPresenceInAreaOfInterest(5),
 *     cancelLocationReportingForTheUE(6)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const LocationEventType = _enum_for_LocationEventType;

/**
 * @summary LocationEventType_direct
 * @constant
 * @type {number}
 */
export
const LocationEventType_direct = LocationEventType.direct satisfies LocationEventType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary direct
 * @constant
 * @type {number}
 */
export
const direct = LocationEventType.direct satisfies LocationEventType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LocationEventType_changeOfServeCell
 * @constant
 * @type {number}
 */
export
const LocationEventType_changeOfServeCell = LocationEventType.changeOfServeCell satisfies LocationEventType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary changeOfServeCell
 * @constant
 * @type {number}
 */
export
const changeOfServeCell = LocationEventType.changeOfServeCell satisfies LocationEventType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LocationEventType_uEPrescenceInAreaOfInterest
 * @constant
 * @type {number}
 */
export
const LocationEventType_uEPrescenceInAreaOfInterest = LocationEventType.uEPrescenceInAreaOfInterest satisfies LocationEventType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uEPrescenceInAreaOfInterest
 * @constant
 * @type {number}
 */
export
const uEPrescenceInAreaOfInterest = LocationEventType.uEPrescenceInAreaOfInterest satisfies LocationEventType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LocationEventType_stopChangeOfServeCell
 * @constant
 * @type {number}
 */
export
const LocationEventType_stopChangeOfServeCell = LocationEventType.stopChangeOfServeCell satisfies LocationEventType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary stopChangeOfServeCell
 * @constant
 * @type {number}
 */
export
const stopChangeOfServeCell = LocationEventType.stopChangeOfServeCell satisfies LocationEventType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LocationEventType_stopUEPresenceInAreaOfInterest
 * @constant
 * @type {number}
 */
export
const LocationEventType_stopUEPresenceInAreaOfInterest = LocationEventType.stopUEPresenceInAreaOfInterest satisfies LocationEventType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary stopUEPresenceInAreaOfInterest
 * @constant
 * @type {number}
 */
export
const stopUEPresenceInAreaOfInterest = LocationEventType.stopUEPresenceInAreaOfInterest satisfies LocationEventType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LocationEventType_cancelLocationReportingForTheUE
 * @constant
 * @type {number}
 */
export
const LocationEventType_cancelLocationReportingForTheUE = LocationEventType.cancelLocationReportingForTheUE satisfies LocationEventType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cancelLocationReportingForTheUE
 * @constant
 * @type {number}
 */
export
const cancelLocationReportingForTheUE = LocationEventType.cancelLocationReportingForTheUE satisfies LocationEventType; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_LocationEventType: $.ASN1Decoder<LocationEventType> = $._decodeEnumerated;
export const _encode_LocationEventType: $.ASN1Encoder<LocationEventType> = $._encodeEnumerated;


/* eslint-enable */
