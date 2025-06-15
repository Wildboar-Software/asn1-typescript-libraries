/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";



/* START_OF_SYMBOL_DEFINITION _enum_for_EvaluationStatus */
/**
 * @summary EvaluationStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EvaluationStatus  ::=  ENUMERATED {
 *     designedToMeet (0),
 *     evaluationInProgress (1),
 *     evaluationCompleted (2) }
 * ```@enum {number}
 */
export
enum _enum_for_EvaluationStatus {
    designedToMeet = 0,
    evaluationInProgress = 1,
    evaluationCompleted = 2,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_EvaluationStatus */

/* START_OF_SYMBOL_DEFINITION EvaluationStatus */
/**
 * @summary EvaluationStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EvaluationStatus  ::=  ENUMERATED {
 *     designedToMeet (0),
 *     evaluationInProgress (1),
 *     evaluationCompleted (2) }
 * ```@enum {number}
 */
export
type EvaluationStatus = _enum_for_EvaluationStatus;
/* END_OF_SYMBOL_DEFINITION EvaluationStatus */

/* START_OF_SYMBOL_DEFINITION EvaluationStatus */
/**
 * @summary EvaluationStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EvaluationStatus  ::=  ENUMERATED {
 *     designedToMeet (0),
 *     evaluationInProgress (1),
 *     evaluationCompleted (2) }
 * ```@enum {number}
 */
export
const EvaluationStatus = _enum_for_EvaluationStatus;
/* END_OF_SYMBOL_DEFINITION EvaluationStatus */

/* START_OF_SYMBOL_DEFINITION EvaluationStatus_designedToMeet */
/**
 * @summary EvaluationStatus_designedToMeet
 * @constant
 * @type {number}
 */
export
const EvaluationStatus_designedToMeet: EvaluationStatus = EvaluationStatus.designedToMeet; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION EvaluationStatus_designedToMeet */

/* START_OF_SYMBOL_DEFINITION designedToMeet */
/**
 * @summary designedToMeet
 * @constant
 * @type {number}
 */
export
const designedToMeet: EvaluationStatus = EvaluationStatus.designedToMeet; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION designedToMeet */

/* START_OF_SYMBOL_DEFINITION EvaluationStatus_evaluationInProgress */
/**
 * @summary EvaluationStatus_evaluationInProgress
 * @constant
 * @type {number}
 */
export
const EvaluationStatus_evaluationInProgress: EvaluationStatus = EvaluationStatus.evaluationInProgress; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION EvaluationStatus_evaluationInProgress */

/* START_OF_SYMBOL_DEFINITION evaluationInProgress */
/**
 * @summary evaluationInProgress
 * @constant
 * @type {number}
 */
export
const evaluationInProgress: EvaluationStatus = EvaluationStatus.evaluationInProgress; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION evaluationInProgress */

/* START_OF_SYMBOL_DEFINITION EvaluationStatus_evaluationCompleted */
/**
 * @summary EvaluationStatus_evaluationCompleted
 * @constant
 * @type {number}
 */
export
const EvaluationStatus_evaluationCompleted: EvaluationStatus = EvaluationStatus.evaluationCompleted; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION EvaluationStatus_evaluationCompleted */

/* START_OF_SYMBOL_DEFINITION evaluationCompleted */
/**
 * @summary evaluationCompleted
 * @constant
 * @type {number}
 */
export
const evaluationCompleted: EvaluationStatus = EvaluationStatus.evaluationCompleted; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION evaluationCompleted */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EvaluationStatus */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EvaluationStatus */

/* START_OF_SYMBOL_DEFINITION _decode_EvaluationStatus */
export const _decode_EvaluationStatus = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_EvaluationStatus */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EvaluationStatus */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EvaluationStatus */

/* START_OF_SYMBOL_DEFINITION _encode_EvaluationStatus */
export const _encode_EvaluationStatus = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_EvaluationStatus */

/* eslint-enable */
