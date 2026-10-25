/* eslint-disable */
import {
    type ASN1Element as _Element,
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
export const IntermediateResponse_inProgress =
    IntermediateResponse.inProgress satisfies IntermediateResponse; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary inProgress
 * @description
 *
 * inProgress (0). Rec does not define this name.
 * @constant
 * @type {number}
 */
export const inProgress =
    IntermediateResponse.inProgress satisfies IntermediateResponse; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IntermediateResponse_delayedMeasurement
 * @description
 *
 * delayedMeasurement (1). Rec does not define this name.
 * @constant
 * @type {number}
 */
export const IntermediateResponse_delayedMeasurement =
    IntermediateResponse.delayedMeasurement satisfies IntermediateResponse; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary delayedMeasurement
 * @description
 *
 * delayedMeasurement (1). Rec does not define this name.
 * @constant
 * @type {number}
 */
export const delayedMeasurement =
    IntermediateResponse.delayedMeasurement satisfies IntermediateResponse; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IntermediateResponse_interruptedMeasurement
 * @description
 *
 * interruptedMeasurement (2). Rec does not define this name.
 * @constant
 * @type {number}
 */
export const IntermediateResponse_interruptedMeasurement =
    IntermediateResponse.interruptedMeasurement satisfies IntermediateResponse; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary interruptedMeasurement
 * @description
 *
 * interruptedMeasurement (2). Rec does not define this name.
 * @constant
 * @type {number}
 */
export const interruptedMeasurement =
    IntermediateResponse.interruptedMeasurement satisfies IntermediateResponse; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IntermediateResponse_repeatLater
 * @description
 *
 * repeatLater (3). Rec does not define this name.
 * @constant
 * @type {number}
 */
export const IntermediateResponse_repeatLater =
    IntermediateResponse.repeatLater satisfies IntermediateResponse; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary repeatLater
 * @description
 *
 * repeatLater (3). Rec does not define this name.
 * @constant
 * @type {number}
 */
export const repeatLater =
    IntermediateResponse.repeatLater satisfies IntermediateResponse; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IntermediateResponse_noAcknowledgement
 * @description
 *
 * Abnormal condition; a correct response cannot be sent (4). X.737 A.7.
 * @constant
 * @type {number}
 */
export const IntermediateResponse_noAcknowledgement =
    IntermediateResponse.noAcknowledgement satisfies IntermediateResponse; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary noAcknowledgement
 * @description
 *
 * Abnormal condition; a correct response cannot be sent (4). X.737 A.7.
 * @constant
 * @type {number}
 */
export const noAcknowledgement =
    IntermediateResponse.noAcknowledgement satisfies IntermediateResponse; /* SHORT_NAMED_ENUMERATED_VALUE */


export function _decode_IntermediateResponse(el: _Element): IntermediateResponse {
    const enumerated = $._decodeEnumerated(el);
    switch (enumerated) {
        case IntermediateResponse.inProgress: return IntermediateResponse.inProgress;
        case IntermediateResponse.delayedMeasurement: return IntermediateResponse.delayedMeasurement;
        case IntermediateResponse.interruptedMeasurement: return IntermediateResponse.interruptedMeasurement;
        case IntermediateResponse.repeatLater: return IntermediateResponse.repeatLater;
        case IntermediateResponse.noAcknowledgement: return IntermediateResponse.noAcknowledgement;
        default:
            throw new _ConstructionError(
                'Invalid ENUMERATED value ' + enumerated + ' for IntermediateResponse.',
                el,
            );
    }
}


export const _encode_IntermediateResponse: $.ASN1Encoder<IntermediateResponse> = $._encodeEnumerated as $.ASN1Encoder<IntermediateResponse>;


/* eslint-enable */
