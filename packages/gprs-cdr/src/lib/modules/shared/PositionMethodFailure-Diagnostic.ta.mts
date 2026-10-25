/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_PositionMethodFailure_Diagnostic {
    congestion = 0,
    insufficientResources = 1,
    insufficientMeasurementData = 2,
    inconsistentMeasurementData = 3,
    locationProcedureNotCompleted = 4,
    locationProcedureNotSupportedByTargetMS = 5,
    qoSNotAttainable = 6,
    positionMethodNotAvailableInNetwork = 7,
    positionMethodNotAvailableInLocationArea = 8,
}

/**
 * @summary PositionMethodFailure_Diagnostic
 * @description
 *
 * Detailed cause of a position-method failure, carried as the
 * `positionMethodFailureCause` alternative of `Diagnostics`.
 * TS 32.271 does not define this enumeration. Clause 4.1 notes
 * that the MSC and the SGSN also take part in LCS charging, and
 * that this is described in TS 32.250 and TS 32.251.
 *
 * A positioning method estimates the target mobile's geographical
 * location. Clause 3.1 cites radio cell coverage, GPS and Assisted
 * GPS (time of arrival), and OTDOA or E-OTD (time difference of
 * arrival), and points to TS 25.305 and TS 43.059.
 *
 * The GMLC records the method used or attempted as Positioning
 * Data on the LCS-GMO-CDR (category C). In online LCS Information,
 * Positioning Data (category Oc) is the method attempted for an
 * MO-LR, if available. A location-service failure on the
 * LCS-GMO-CDR is User Error (category C).
 *
 * 3GPP TS 32.271 V12.1.0 clauses 3.1, 4.1, 6.1.3.1, and 6.3.1.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PositionMethodFailure-Diagnostic  ::=  ENUMERATED {
 *    congestion                                  ( 0 ),
 *    insufficientResources                       ( 1 ),
 *    insufficientMeasurementData                 ( 2 ),
 *    inconsistentMeasurementData                 ( 3 ),
 *    locationProcedureNotCompleted               ( 4 ),
 *    locationProcedureNotSupportedByTargetMS     ( 5 ),
 *    qoSNotAttainable                            ( 6 ),
 *    positionMethodNotAvailableInNetwork         ( 7 ),
 *    positionMethodNotAvailableInLocationArea    ( 8 ),
 *    ...  }
 * ```
 * 
 * @enum {number}
 */
export
type PositionMethodFailure_Diagnostic = _enum_for_PositionMethodFailure_Diagnostic | ENUMERATED;

/**
 * @summary PositionMethodFailure_Diagnostic_congestion
 * @constant
 * @type {number}
 */
export
const PositionMethodFailure_Diagnostic_congestion = _enum_for_PositionMethodFailure_Diagnostic.congestion satisfies PositionMethodFailure_Diagnostic; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary congestion
 * @constant
 * @type {number}
 */
export
const congestion = PositionMethodFailure_Diagnostic_congestion satisfies PositionMethodFailure_Diagnostic; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PositionMethodFailure_Diagnostic_insufficientResources
 * @constant
 * @type {number}
 */
export
const PositionMethodFailure_Diagnostic_insufficientResources = _enum_for_PositionMethodFailure_Diagnostic.insufficientResources satisfies PositionMethodFailure_Diagnostic; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary insufficientResources
 * @constant
 * @type {number}
 */
export
const insufficientResources = PositionMethodFailure_Diagnostic_insufficientResources satisfies PositionMethodFailure_Diagnostic; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PositionMethodFailure_Diagnostic_insufficientMeasurementData
 * @constant
 * @type {number}
 */
export
const PositionMethodFailure_Diagnostic_insufficientMeasurementData = _enum_for_PositionMethodFailure_Diagnostic.insufficientMeasurementData satisfies PositionMethodFailure_Diagnostic; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary insufficientMeasurementData
 * @constant
 * @type {number}
 */
export
const insufficientMeasurementData = PositionMethodFailure_Diagnostic_insufficientMeasurementData satisfies PositionMethodFailure_Diagnostic; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PositionMethodFailure_Diagnostic_inconsistentMeasurementData
 * @constant
 * @type {number}
 */
export
const PositionMethodFailure_Diagnostic_inconsistentMeasurementData = _enum_for_PositionMethodFailure_Diagnostic.inconsistentMeasurementData satisfies PositionMethodFailure_Diagnostic; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary inconsistentMeasurementData
 * @constant
 * @type {number}
 */
export
const inconsistentMeasurementData = PositionMethodFailure_Diagnostic_inconsistentMeasurementData satisfies PositionMethodFailure_Diagnostic; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PositionMethodFailure_Diagnostic_locationProcedureNotCompleted
 * @constant
 * @type {number}
 */
export
const PositionMethodFailure_Diagnostic_locationProcedureNotCompleted = _enum_for_PositionMethodFailure_Diagnostic.locationProcedureNotCompleted satisfies PositionMethodFailure_Diagnostic; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary locationProcedureNotCompleted
 * @constant
 * @type {number}
 */
export
const locationProcedureNotCompleted = PositionMethodFailure_Diagnostic_locationProcedureNotCompleted satisfies PositionMethodFailure_Diagnostic; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PositionMethodFailure_Diagnostic_locationProcedureNotSupportedByTargetMS
 * @constant
 * @type {number}
 */
export
const PositionMethodFailure_Diagnostic_locationProcedureNotSupportedByTargetMS = _enum_for_PositionMethodFailure_Diagnostic.locationProcedureNotSupportedByTargetMS satisfies PositionMethodFailure_Diagnostic; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary locationProcedureNotSupportedByTargetMS
 * @constant
 * @type {number}
 */
export
const locationProcedureNotSupportedByTargetMS = PositionMethodFailure_Diagnostic_locationProcedureNotSupportedByTargetMS satisfies PositionMethodFailure_Diagnostic; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PositionMethodFailure_Diagnostic_qoSNotAttainable
 * @constant
 * @type {number}
 */
export
const PositionMethodFailure_Diagnostic_qoSNotAttainable = _enum_for_PositionMethodFailure_Diagnostic.qoSNotAttainable satisfies PositionMethodFailure_Diagnostic; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary qoSNotAttainable
 * @constant
 * @type {number}
 */
export
const qoSNotAttainable = PositionMethodFailure_Diagnostic_qoSNotAttainable satisfies PositionMethodFailure_Diagnostic; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PositionMethodFailure_Diagnostic_positionMethodNotAvailableInNetwork
 * @constant
 * @type {number}
 */
export
const PositionMethodFailure_Diagnostic_positionMethodNotAvailableInNetwork = _enum_for_PositionMethodFailure_Diagnostic.positionMethodNotAvailableInNetwork satisfies PositionMethodFailure_Diagnostic; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary positionMethodNotAvailableInNetwork
 * @constant
 * @type {number}
 */
export
const positionMethodNotAvailableInNetwork = PositionMethodFailure_Diagnostic_positionMethodNotAvailableInNetwork satisfies PositionMethodFailure_Diagnostic; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PositionMethodFailure_Diagnostic_positionMethodNotAvailableInLocationArea
 * @constant
 * @type {number}
 */
export
const PositionMethodFailure_Diagnostic_positionMethodNotAvailableInLocationArea = _enum_for_PositionMethodFailure_Diagnostic.positionMethodNotAvailableInLocationArea satisfies PositionMethodFailure_Diagnostic; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary positionMethodNotAvailableInLocationArea
 * @constant
 * @type {number}
 */
export
const positionMethodNotAvailableInLocationArea = PositionMethodFailure_Diagnostic_positionMethodNotAvailableInLocationArea satisfies PositionMethodFailure_Diagnostic; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_PositionMethodFailure_Diagnostic: $.ASN1Decoder<PositionMethodFailure_Diagnostic> = $._decodeEnumerated;

export
const _encode_PositionMethodFailure_Diagnostic: $.ASN1Encoder<PositionMethodFailure_Diagnostic> = $._encodeEnumerated;

/* eslint-enable */
