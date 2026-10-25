/* eslint-disable */
import {
    type ASN1Element as _Element,
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
 * Diagnostic on `PositionMethodFailure-Param`. Any unrecognized value shall be
 * ignored (3GPP TS 29.002 V19.1.0 clauses 7.6.1.4 and 17.7.7).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PositionMethodFailure-Diagnostic  ::=  ENUMERATED {
 *     congestion  (0),
 *     insufficientResources  (1),
 *     insufficientMeasurementData  (2),
 *     inconsistentMeasurementData  (3),
 *     locationProcedureNotCompleted  (4),
 *     locationProcedureNotSupportedByTargetMS  (5),
 *     qoSNotAttainable  (6),
 *     positionMethodNotAvailableInNetwork    (7),
 *     positionMethodNotAvailableInLocationArea    (8),
 *     ... }
 * ```
 * 
 * @enum {number}
 */
export
type PositionMethodFailure_Diagnostic = _enum_for_PositionMethodFailure_Diagnostic | ENUMERATED;

/**
 * @summary PositionMethodFailure_Diagnostic_congestion
 * @description
 *
 * Congestion (3GPP TS 29.002 V19.1.0 clause 7.6.1.4).
 *
 * @constant
 * @type {number}
 */
export
const PositionMethodFailure_Diagnostic_congestion = _enum_for_PositionMethodFailure_Diagnostic.congestion satisfies PositionMethodFailure_Diagnostic; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary congestion
 * @description
 *
 * Congestion (3GPP TS 29.002 V19.1.0 clause 7.6.1.4).
 *
 * @constant
 * @type {number}
 */
export
const congestion = PositionMethodFailure_Diagnostic_congestion satisfies PositionMethodFailure_Diagnostic; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PositionMethodFailure_Diagnostic_insufficientResources
 * @description
 *
 * Insufficient resources (3GPP TS 29.002 V19.1.0 clause 7.6.1.4).
 *
 * @constant
 * @type {number}
 */
export
const PositionMethodFailure_Diagnostic_insufficientResources = _enum_for_PositionMethodFailure_Diagnostic.insufficientResources satisfies PositionMethodFailure_Diagnostic; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary insufficientResources
 * @description
 *
 * Insufficient resources (3GPP TS 29.002 V19.1.0 clause 7.6.1.4).
 *
 * @constant
 * @type {number}
 */
export
const insufficientResources = PositionMethodFailure_Diagnostic_insufficientResources satisfies PositionMethodFailure_Diagnostic; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PositionMethodFailure_Diagnostic_insufficientMeasurementData
 * @description
 *
 * Insufficient Measurement Data (3GPP TS 29.002 V19.1.0 clause 7.6.1.4).
 *
 * @constant
 * @type {number}
 */
export
const PositionMethodFailure_Diagnostic_insufficientMeasurementData = _enum_for_PositionMethodFailure_Diagnostic.insufficientMeasurementData satisfies PositionMethodFailure_Diagnostic; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary insufficientMeasurementData
 * @description
 *
 * Insufficient Measurement Data (3GPP TS 29.002 V19.1.0 clause 7.6.1.4).
 *
 * @constant
 * @type {number}
 */
export
const insufficientMeasurementData = PositionMethodFailure_Diagnostic_insufficientMeasurementData satisfies PositionMethodFailure_Diagnostic; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PositionMethodFailure_Diagnostic_inconsistentMeasurementData
 * @description
 *
 * Inconsistent Measurement Data (3GPP TS 29.002 V19.1.0 clause 7.6.1.4).
 *
 * @constant
 * @type {number}
 */
export
const PositionMethodFailure_Diagnostic_inconsistentMeasurementData = _enum_for_PositionMethodFailure_Diagnostic.inconsistentMeasurementData satisfies PositionMethodFailure_Diagnostic; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary inconsistentMeasurementData
 * @description
 *
 * Inconsistent Measurement Data (3GPP TS 29.002 V19.1.0 clause 7.6.1.4).
 *
 * @constant
 * @type {number}
 */
export
const inconsistentMeasurementData = PositionMethodFailure_Diagnostic_inconsistentMeasurementData satisfies PositionMethodFailure_Diagnostic; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PositionMethodFailure_Diagnostic_locationProcedureNotCompleted
 * @description
 *
 * Location procedure not completed (3GPP TS 29.002 V19.1.0 clause 7.6.1.4).
 *
 * @constant
 * @type {number}
 */
export
const PositionMethodFailure_Diagnostic_locationProcedureNotCompleted = _enum_for_PositionMethodFailure_Diagnostic.locationProcedureNotCompleted satisfies PositionMethodFailure_Diagnostic; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary locationProcedureNotCompleted
 * @description
 *
 * Location procedure not completed (3GPP TS 29.002 V19.1.0 clause 7.6.1.4).
 *
 * @constant
 * @type {number}
 */
export
const locationProcedureNotCompleted = PositionMethodFailure_Diagnostic_locationProcedureNotCompleted satisfies PositionMethodFailure_Diagnostic; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PositionMethodFailure_Diagnostic_locationProcedureNotSupportedByTargetMS
 * @description
 *
 * `locationProcedureNotSupportedByTargetMS` (5). Clause 7.6.1.4 does not list
 * this diagnostic among the detailed reasons (3GPP TS 29.002 V19.1.0 clause
 * 17.7.7).
 *
 * @constant
 * @type {number}
 */
export
const PositionMethodFailure_Diagnostic_locationProcedureNotSupportedByTargetMS = _enum_for_PositionMethodFailure_Diagnostic.locationProcedureNotSupportedByTargetMS satisfies PositionMethodFailure_Diagnostic; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary locationProcedureNotSupportedByTargetMS
 * @description
 *
 * `locationProcedureNotSupportedByTargetMS` (5). Clause 7.6.1.4 does not list
 * this diagnostic among the detailed reasons (3GPP TS 29.002 V19.1.0 clause
 * 17.7.7).
 *
 * @constant
 * @type {number}
 */
export
const locationProcedureNotSupportedByTargetMS = PositionMethodFailure_Diagnostic_locationProcedureNotSupportedByTargetMS satisfies PositionMethodFailure_Diagnostic; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PositionMethodFailure_Diagnostic_qoSNotAttainable
 * @description
 *
 * QoS not attainable (3GPP TS 29.002 V19.1.0 clause 7.6.1.4).
 *
 * @constant
 * @type {number}
 */
export
const PositionMethodFailure_Diagnostic_qoSNotAttainable = _enum_for_PositionMethodFailure_Diagnostic.qoSNotAttainable satisfies PositionMethodFailure_Diagnostic; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary qoSNotAttainable
 * @description
 *
 * QoS not attainable (3GPP TS 29.002 V19.1.0 clause 7.6.1.4).
 *
 * @constant
 * @type {number}
 */
export
const qoSNotAttainable = PositionMethodFailure_Diagnostic_qoSNotAttainable satisfies PositionMethodFailure_Diagnostic; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PositionMethodFailure_Diagnostic_positionMethodNotAvailableInNetwork
 * @description
 *
 * Position Method Not Available in Network (3GPP TS 29.002 V19.1.0 clause
 * 7.6.1.4).
 *
 * @constant
 * @type {number}
 */
export
const PositionMethodFailure_Diagnostic_positionMethodNotAvailableInNetwork = _enum_for_PositionMethodFailure_Diagnostic.positionMethodNotAvailableInNetwork satisfies PositionMethodFailure_Diagnostic; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary positionMethodNotAvailableInNetwork
 * @description
 *
 * Position Method Not Available in Network (3GPP TS 29.002 V19.1.0 clause
 * 7.6.1.4).
 *
 * @constant
 * @type {number}
 */
export
const positionMethodNotAvailableInNetwork = PositionMethodFailure_Diagnostic_positionMethodNotAvailableInNetwork satisfies PositionMethodFailure_Diagnostic; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PositionMethodFailure_Diagnostic_positionMethodNotAvailableInLocationArea
 * @description
 *
 * Position Method Not Available in Location Area (3GPP TS 29.002 V19.1.0 clause
 * 7.6.1.4).
 *
 * @constant
 * @type {number}
 */
export
const PositionMethodFailure_Diagnostic_positionMethodNotAvailableInLocationArea = _enum_for_PositionMethodFailure_Diagnostic.positionMethodNotAvailableInLocationArea satisfies PositionMethodFailure_Diagnostic; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary positionMethodNotAvailableInLocationArea
 * @description
 *
 * Position Method Not Available in Location Area (3GPP TS 29.002 V19.1.0 clause
 * 7.6.1.4).
 *
 * @constant
 * @type {number}
 */
export
const positionMethodNotAvailableInLocationArea = PositionMethodFailure_Diagnostic_positionMethodNotAvailableInLocationArea satisfies PositionMethodFailure_Diagnostic; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) PositionMethodFailure_Diagnostic
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_PositionMethodFailure_Diagnostic = $._decodeEnumerated;

/**
 * @summary Encodes a(n) PositionMethodFailure_Diagnostic into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PositionMethodFailure_Diagnostic, encoded as an ASN.1 Element.
 */
export const _encode_PositionMethodFailure_Diagnostic = $._encodeEnumerated;


/* eslint-enable */
