/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
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
const PositionMethodFailure_Diagnostic_congestion: PositionMethodFailure_Diagnostic = 0; /* LONG_NAMED_ENUMERATED_VALUE */

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
const congestion: PositionMethodFailure_Diagnostic = PositionMethodFailure_Diagnostic_congestion; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const PositionMethodFailure_Diagnostic_insufficientResources: PositionMethodFailure_Diagnostic = 1; /* LONG_NAMED_ENUMERATED_VALUE */

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
const insufficientResources: PositionMethodFailure_Diagnostic = PositionMethodFailure_Diagnostic_insufficientResources; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const PositionMethodFailure_Diagnostic_insufficientMeasurementData: PositionMethodFailure_Diagnostic = 2; /* LONG_NAMED_ENUMERATED_VALUE */

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
const insufficientMeasurementData: PositionMethodFailure_Diagnostic = PositionMethodFailure_Diagnostic_insufficientMeasurementData; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const PositionMethodFailure_Diagnostic_inconsistentMeasurementData: PositionMethodFailure_Diagnostic = 3; /* LONG_NAMED_ENUMERATED_VALUE */

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
const inconsistentMeasurementData: PositionMethodFailure_Diagnostic = PositionMethodFailure_Diagnostic_inconsistentMeasurementData; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const PositionMethodFailure_Diagnostic_locationProcedureNotCompleted: PositionMethodFailure_Diagnostic = 4; /* LONG_NAMED_ENUMERATED_VALUE */

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
const locationProcedureNotCompleted: PositionMethodFailure_Diagnostic = PositionMethodFailure_Diagnostic_locationProcedureNotCompleted; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const PositionMethodFailure_Diagnostic_locationProcedureNotSupportedByTargetMS: PositionMethodFailure_Diagnostic = 5; /* LONG_NAMED_ENUMERATED_VALUE */

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
const locationProcedureNotSupportedByTargetMS: PositionMethodFailure_Diagnostic = PositionMethodFailure_Diagnostic_locationProcedureNotSupportedByTargetMS; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const PositionMethodFailure_Diagnostic_qoSNotAttainable: PositionMethodFailure_Diagnostic = 6; /* LONG_NAMED_ENUMERATED_VALUE */

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
const qoSNotAttainable: PositionMethodFailure_Diagnostic = PositionMethodFailure_Diagnostic_qoSNotAttainable; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const PositionMethodFailure_Diagnostic_positionMethodNotAvailableInNetwork: PositionMethodFailure_Diagnostic = 7; /* LONG_NAMED_ENUMERATED_VALUE */

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
const positionMethodNotAvailableInNetwork: PositionMethodFailure_Diagnostic = PositionMethodFailure_Diagnostic_positionMethodNotAvailableInNetwork; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const PositionMethodFailure_Diagnostic_positionMethodNotAvailableInLocationArea: PositionMethodFailure_Diagnostic = 8; /* LONG_NAMED_ENUMERATED_VALUE */

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
const positionMethodNotAvailableInLocationArea: PositionMethodFailure_Diagnostic = PositionMethodFailure_Diagnostic_positionMethodNotAvailableInLocationArea; /* SHORT_NAMED_ENUMERATED_VALUE */

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
