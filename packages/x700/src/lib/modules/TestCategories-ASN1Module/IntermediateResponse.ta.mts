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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary IntermediateResponse
 * @description
 *
 * Intermediate resource-self-test status. A.7 comments only
 * `noAcknowledgement`: abnormal condition, a correct response
 * cannot be sent. Other names are not defined in the rec. Used as
 * `ResourceSelfTestResults.intermediateResponse` during the
 * exercise (typically at phase ends). ITU-T Rec. X.737 (11/95)
 * [§7.7.7](https://www.itu.int/rec/T-REC-X.737-199511-I), A.7.
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
 * Intermediate resource-self-test status. A.7 comments only
 * `noAcknowledgement`: abnormal condition, a correct response
 * cannot be sent. Other names are not defined in the rec. Used as
 * `ResourceSelfTestResults.intermediateResponse` during the
 * exercise (typically at phase ends). ITU-T Rec. X.737 (11/95)
 * [§7.7.7](https://www.itu.int/rec/T-REC-X.737-199511-I), A.7.
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
 * Intermediate resource-self-test status. A.7 comments only
 * `noAcknowledgement`: abnormal condition, a correct response
 * cannot be sent. Other names are not defined in the rec. Used as
 * `ResourceSelfTestResults.intermediateResponse` during the
 * exercise (typically at phase ends). ITU-T Rec. X.737 (11/95)
 * [§7.7.7](https://www.itu.int/rec/T-REC-X.737-199511-I), A.7.
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
 * @description
 *
 * inProgress (0). Rec does not define this name.
 * @constant
 * @type {number}
 */
export const IntermediateResponse_inProgress: IntermediateResponse =
    IntermediateResponse.inProgress; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary inProgress
 * @description
 *
 * inProgress (0). Rec does not define this name.
 * @constant
 * @type {number}
 */
export const inProgress: IntermediateResponse =
    IntermediateResponse.inProgress; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IntermediateResponse_delayedMeasurement
 * @description
 *
 * delayedMeasurement (1). Rec does not define this name.
 * @constant
 * @type {number}
 */
export const IntermediateResponse_delayedMeasurement: IntermediateResponse =
    IntermediateResponse.delayedMeasurement; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary delayedMeasurement
 * @description
 *
 * delayedMeasurement (1). Rec does not define this name.
 * @constant
 * @type {number}
 */
export const delayedMeasurement: IntermediateResponse =
    IntermediateResponse.delayedMeasurement; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IntermediateResponse_interruptedMeasurement
 * @description
 *
 * interruptedMeasurement (2). Rec does not define this name.
 * @constant
 * @type {number}
 */
export const IntermediateResponse_interruptedMeasurement: IntermediateResponse =
    IntermediateResponse.interruptedMeasurement; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary interruptedMeasurement
 * @description
 *
 * interruptedMeasurement (2). Rec does not define this name.
 * @constant
 * @type {number}
 */
export const interruptedMeasurement: IntermediateResponse =
    IntermediateResponse.interruptedMeasurement; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IntermediateResponse_repeatLater
 * @description
 *
 * repeatLater (3). Rec does not define this name.
 * @constant
 * @type {number}
 */
export const IntermediateResponse_repeatLater: IntermediateResponse =
    IntermediateResponse.repeatLater; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary repeatLater
 * @description
 *
 * repeatLater (3). Rec does not define this name.
 * @constant
 * @type {number}
 */
export const repeatLater: IntermediateResponse =
    IntermediateResponse.repeatLater; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IntermediateResponse_noAcknowledgement
 * @description
 *
 * Abnormal condition; a correct response cannot be sent (4). X.737 A.7.
 * @constant
 * @type {number}
 */
export const IntermediateResponse_noAcknowledgement: IntermediateResponse =
    IntermediateResponse.noAcknowledgement; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary noAcknowledgement
 * @description
 *
 * Abnormal condition; a correct response cannot be sent (4). X.737 A.7.
 * @constant
 * @type {number}
 */
export const noAcknowledgement: IntermediateResponse =
    IntermediateResponse.noAcknowledgement; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_IntermediateResponse = $._decodeEnumerated;


export const _encode_IntermediateResponse = $._encodeEnumerated;


/* eslint-enable */
