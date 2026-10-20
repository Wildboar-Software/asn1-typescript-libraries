/* eslint-disable */
import {
    ENUMERATED
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
const PositionMethodFailure_Diagnostic_congestion: PositionMethodFailure_Diagnostic = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary congestion
 * @constant
 * @type {number}
 */
export
const congestion: PositionMethodFailure_Diagnostic = PositionMethodFailure_Diagnostic_congestion; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PositionMethodFailure_Diagnostic_insufficientResources
 * @constant
 * @type {number}
 */
export
const PositionMethodFailure_Diagnostic_insufficientResources: PositionMethodFailure_Diagnostic = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary insufficientResources
 * @constant
 * @type {number}
 */
export
const insufficientResources: PositionMethodFailure_Diagnostic = PositionMethodFailure_Diagnostic_insufficientResources; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PositionMethodFailure_Diagnostic_insufficientMeasurementData
 * @constant
 * @type {number}
 */
export
const PositionMethodFailure_Diagnostic_insufficientMeasurementData: PositionMethodFailure_Diagnostic = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary insufficientMeasurementData
 * @constant
 * @type {number}
 */
export
const insufficientMeasurementData: PositionMethodFailure_Diagnostic = PositionMethodFailure_Diagnostic_insufficientMeasurementData; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PositionMethodFailure_Diagnostic_inconsistentMeasurementData
 * @constant
 * @type {number}
 */
export
const PositionMethodFailure_Diagnostic_inconsistentMeasurementData: PositionMethodFailure_Diagnostic = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary inconsistentMeasurementData
 * @constant
 * @type {number}
 */
export
const inconsistentMeasurementData: PositionMethodFailure_Diagnostic = PositionMethodFailure_Diagnostic_inconsistentMeasurementData; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PositionMethodFailure_Diagnostic_locationProcedureNotCompleted
 * @constant
 * @type {number}
 */
export
const PositionMethodFailure_Diagnostic_locationProcedureNotCompleted: PositionMethodFailure_Diagnostic = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary locationProcedureNotCompleted
 * @constant
 * @type {number}
 */
export
const locationProcedureNotCompleted: PositionMethodFailure_Diagnostic = PositionMethodFailure_Diagnostic_locationProcedureNotCompleted; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PositionMethodFailure_Diagnostic_locationProcedureNotSupportedByTargetMS
 * @constant
 * @type {number}
 */
export
const PositionMethodFailure_Diagnostic_locationProcedureNotSupportedByTargetMS: PositionMethodFailure_Diagnostic = 5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary locationProcedureNotSupportedByTargetMS
 * @constant
 * @type {number}
 */
export
const locationProcedureNotSupportedByTargetMS: PositionMethodFailure_Diagnostic = PositionMethodFailure_Diagnostic_locationProcedureNotSupportedByTargetMS; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PositionMethodFailure_Diagnostic_qoSNotAttainable
 * @constant
 * @type {number}
 */
export
const PositionMethodFailure_Diagnostic_qoSNotAttainable: PositionMethodFailure_Diagnostic = 6; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary qoSNotAttainable
 * @constant
 * @type {number}
 */
export
const qoSNotAttainable: PositionMethodFailure_Diagnostic = PositionMethodFailure_Diagnostic_qoSNotAttainable; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PositionMethodFailure_Diagnostic_positionMethodNotAvailableInNetwork
 * @constant
 * @type {number}
 */
export
const PositionMethodFailure_Diagnostic_positionMethodNotAvailableInNetwork: PositionMethodFailure_Diagnostic = 7; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary positionMethodNotAvailableInNetwork
 * @constant
 * @type {number}
 */
export
const positionMethodNotAvailableInNetwork: PositionMethodFailure_Diagnostic = PositionMethodFailure_Diagnostic_positionMethodNotAvailableInNetwork; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PositionMethodFailure_Diagnostic_positionMethodNotAvailableInLocationArea
 * @constant
 * @type {number}
 */
export
const PositionMethodFailure_Diagnostic_positionMethodNotAvailableInLocationArea: PositionMethodFailure_Diagnostic = 8; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary positionMethodNotAvailableInLocationArea
 * @constant
 * @type {number}
 */
export
const positionMethodNotAvailableInLocationArea: PositionMethodFailure_Diagnostic = PositionMethodFailure_Diagnostic_positionMethodNotAvailableInLocationArea; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_PositionMethodFailure_Diagnostic: $.ASN1Decoder<PositionMethodFailure_Diagnostic> = $._decodeEnumerated;

export
const _encode_PositionMethodFailure_Diagnostic: $.ASN1Encoder<PositionMethodFailure_Diagnostic> = $._encodeEnumerated;

/* eslint-enable */
