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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';

/**
 * @summary IntermediateResponse
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IntermediateResponse  ::=  ENUMERATED {
 *   inProgress(0), delayedMeasurement(1), interruptedMeasurement(2),
 *   repeatLater(3), noAcknowledgement(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export enum _enum_for_IntermediateResponse {
    inProgress = 0,
    delayedMeasurement = 1,
    interruptedMeasurement = 2,
    repeatLater = 3,
    noAcknowledgement = 4,
}

/**
 * @summary IntermediateResponse
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IntermediateResponse  ::=  ENUMERATED {
 *   inProgress(0), delayedMeasurement(1), interruptedMeasurement(2),
 *   repeatLater(3), noAcknowledgement(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export type IntermediateResponse = _enum_for_IntermediateResponse;

/**
 * @summary IntermediateResponse
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IntermediateResponse  ::=  ENUMERATED {
 *   inProgress(0), delayedMeasurement(1), interruptedMeasurement(2),
 *   repeatLater(3), noAcknowledgement(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export const IntermediateResponse = _enum_for_IntermediateResponse;

/**
 * @summary IntermediateResponse_inProgress
 * @constant
 * @type {number}
 */
export const IntermediateResponse_inProgress: IntermediateResponse =
    IntermediateResponse.inProgress; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary inProgress
 * @constant
 * @type {number}
 */
export const inProgress: IntermediateResponse =
    IntermediateResponse.inProgress; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IntermediateResponse_delayedMeasurement
 * @constant
 * @type {number}
 */
export const IntermediateResponse_delayedMeasurement: IntermediateResponse =
    IntermediateResponse.delayedMeasurement; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary delayedMeasurement
 * @constant
 * @type {number}
 */
export const delayedMeasurement: IntermediateResponse =
    IntermediateResponse.delayedMeasurement; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IntermediateResponse_interruptedMeasurement
 * @constant
 * @type {number}
 */
export const IntermediateResponse_interruptedMeasurement: IntermediateResponse =
    IntermediateResponse.interruptedMeasurement; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary interruptedMeasurement
 * @constant
 * @type {number}
 */
export const interruptedMeasurement: IntermediateResponse =
    IntermediateResponse.interruptedMeasurement; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IntermediateResponse_repeatLater
 * @constant
 * @type {number}
 */
export const IntermediateResponse_repeatLater: IntermediateResponse =
    IntermediateResponse.repeatLater; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary repeatLater
 * @constant
 * @type {number}
 */
export const repeatLater: IntermediateResponse =
    IntermediateResponse.repeatLater; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IntermediateResponse_noAcknowledgement
 * @constant
 * @type {number}
 */
export const IntermediateResponse_noAcknowledgement: IntermediateResponse =
    IntermediateResponse.noAcknowledgement; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary noAcknowledgement
 * @constant
 * @type {number}
 */
export const noAcknowledgement: IntermediateResponse =
    IntermediateResponse.noAcknowledgement; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_IntermediateResponse = $._decodeEnumerated;


export const _encode_IntermediateResponse = $._encodeEnumerated;


/* eslint-enable */
