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
const PositionMethodFailure_Diagnostic_congestion: _enum_for_PositionMethodFailure_Diagnostic.congestion = _enum_for_PositionMethodFailure_Diagnostic.congestion; /* LONG_NAMED_ENUMERATED_VALUE */

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
const congestion: _enum_for_PositionMethodFailure_Diagnostic.congestion = PositionMethodFailure_Diagnostic_congestion; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const PositionMethodFailure_Diagnostic_insufficientResources: _enum_for_PositionMethodFailure_Diagnostic.insufficientResources = _enum_for_PositionMethodFailure_Diagnostic.insufficientResources; /* LONG_NAMED_ENUMERATED_VALUE */

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
const insufficientResources: _enum_for_PositionMethodFailure_Diagnostic.insufficientResources = PositionMethodFailure_Diagnostic_insufficientResources; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const PositionMethodFailure_Diagnostic_insufficientMeasurementData: _enum_for_PositionMethodFailure_Diagnostic.insufficientMeasurementData = _enum_for_PositionMethodFailure_Diagnostic.insufficientMeasurementData; /* LONG_NAMED_ENUMERATED_VALUE */

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
const insufficientMeasurementData: _enum_for_PositionMethodFailure_Diagnostic.insufficientMeasurementData = PositionMethodFailure_Diagnostic_insufficientMeasurementData; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const PositionMethodFailure_Diagnostic_inconsistentMeasurementData: _enum_for_PositionMethodFailure_Diagnostic.inconsistentMeasurementData = _enum_for_PositionMethodFailure_Diagnostic.inconsistentMeasurementData; /* LONG_NAMED_ENUMERATED_VALUE */

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
const inconsistentMeasurementData: _enum_for_PositionMethodFailure_Diagnostic.inconsistentMeasurementData = PositionMethodFailure_Diagnostic_inconsistentMeasurementData; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const PositionMethodFailure_Diagnostic_locationProcedureNotCompleted: _enum_for_PositionMethodFailure_Diagnostic.locationProcedureNotCompleted = _enum_for_PositionMethodFailure_Diagnostic.locationProcedureNotCompleted; /* LONG_NAMED_ENUMERATED_VALUE */

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
const locationProcedureNotCompleted: _enum_for_PositionMethodFailure_Diagnostic.locationProcedureNotCompleted = PositionMethodFailure_Diagnostic_locationProcedureNotCompleted; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const PositionMethodFailure_Diagnostic_locationProcedureNotSupportedByTargetMS: _enum_for_PositionMethodFailure_Diagnostic.locationProcedureNotSupportedByTargetMS = _enum_for_PositionMethodFailure_Diagnostic.locationProcedureNotSupportedByTargetMS; /* LONG_NAMED_ENUMERATED_VALUE */

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
const locationProcedureNotSupportedByTargetMS: _enum_for_PositionMethodFailure_Diagnostic.locationProcedureNotSupportedByTargetMS = PositionMethodFailure_Diagnostic_locationProcedureNotSupportedByTargetMS; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const PositionMethodFailure_Diagnostic_qoSNotAttainable: _enum_for_PositionMethodFailure_Diagnostic.qoSNotAttainable = _enum_for_PositionMethodFailure_Diagnostic.qoSNotAttainable; /* LONG_NAMED_ENUMERATED_VALUE */

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
const qoSNotAttainable: _enum_for_PositionMethodFailure_Diagnostic.qoSNotAttainable = PositionMethodFailure_Diagnostic_qoSNotAttainable; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const PositionMethodFailure_Diagnostic_positionMethodNotAvailableInNetwork: _enum_for_PositionMethodFailure_Diagnostic.positionMethodNotAvailableInNetwork = _enum_for_PositionMethodFailure_Diagnostic.positionMethodNotAvailableInNetwork; /* LONG_NAMED_ENUMERATED_VALUE */

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
const positionMethodNotAvailableInNetwork: _enum_for_PositionMethodFailure_Diagnostic.positionMethodNotAvailableInNetwork = PositionMethodFailure_Diagnostic_positionMethodNotAvailableInNetwork; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const PositionMethodFailure_Diagnostic_positionMethodNotAvailableInLocationArea: _enum_for_PositionMethodFailure_Diagnostic.positionMethodNotAvailableInLocationArea = _enum_for_PositionMethodFailure_Diagnostic.positionMethodNotAvailableInLocationArea; /* LONG_NAMED_ENUMERATED_VALUE */

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
const positionMethodNotAvailableInLocationArea: _enum_for_PositionMethodFailure_Diagnostic.positionMethodNotAvailableInLocationArea = PositionMethodFailure_Diagnostic_positionMethodNotAvailableInLocationArea; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) PositionMethodFailure_Diagnostic
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_PositionMethodFailure_Diagnostic: $.ASN1Decoder<number> = $._decodeEnumerated;

/**
 * @summary Encodes a(n) PositionMethodFailure_Diagnostic into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PositionMethodFailure_Diagnostic, encoded as an ASN.1 Element.
 */
export const _encode_PositionMethodFailure_Diagnostic: $.ASN1Encoder<number> = $._encodeEnumerated;


/* eslint-enable */
