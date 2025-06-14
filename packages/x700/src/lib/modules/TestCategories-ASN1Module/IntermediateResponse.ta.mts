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

/* START_OF_SYMBOL_DEFINITION _enum_for_IntermediateResponse */
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
 * ```@enum {number}
 */
export enum _enum_for_IntermediateResponse {
    inProgress = 0,
    delayedMeasurement = 1,
    interruptedMeasurement = 2,
    repeatLater = 3,
    noAcknowledgement = 4,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_IntermediateResponse */

/* START_OF_SYMBOL_DEFINITION IntermediateResponse */
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
 * ```@enum {number}
 */
export type IntermediateResponse = _enum_for_IntermediateResponse;
/* END_OF_SYMBOL_DEFINITION IntermediateResponse */

/* START_OF_SYMBOL_DEFINITION IntermediateResponse */
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
 * ```@enum {number}
 */
export const IntermediateResponse = _enum_for_IntermediateResponse;
/* END_OF_SYMBOL_DEFINITION IntermediateResponse */

/* START_OF_SYMBOL_DEFINITION IntermediateResponse_inProgress */
/**
 * @summary IntermediateResponse_inProgress
 * @constant
 * @type {number}
 */
export const IntermediateResponse_inProgress: IntermediateResponse =
    IntermediateResponse.inProgress; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION IntermediateResponse_inProgress */

/* START_OF_SYMBOL_DEFINITION inProgress */
/**
 * @summary inProgress
 * @constant
 * @type {number}
 */
export const inProgress: IntermediateResponse =
    IntermediateResponse.inProgress; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION inProgress */

/* START_OF_SYMBOL_DEFINITION IntermediateResponse_delayedMeasurement */
/**
 * @summary IntermediateResponse_delayedMeasurement
 * @constant
 * @type {number}
 */
export const IntermediateResponse_delayedMeasurement: IntermediateResponse =
    IntermediateResponse.delayedMeasurement; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION IntermediateResponse_delayedMeasurement */

/* START_OF_SYMBOL_DEFINITION delayedMeasurement */
/**
 * @summary delayedMeasurement
 * @constant
 * @type {number}
 */
export const delayedMeasurement: IntermediateResponse =
    IntermediateResponse.delayedMeasurement; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION delayedMeasurement */

/* START_OF_SYMBOL_DEFINITION IntermediateResponse_interruptedMeasurement */
/**
 * @summary IntermediateResponse_interruptedMeasurement
 * @constant
 * @type {number}
 */
export const IntermediateResponse_interruptedMeasurement: IntermediateResponse =
    IntermediateResponse.interruptedMeasurement; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION IntermediateResponse_interruptedMeasurement */

/* START_OF_SYMBOL_DEFINITION interruptedMeasurement */
/**
 * @summary interruptedMeasurement
 * @constant
 * @type {number}
 */
export const interruptedMeasurement: IntermediateResponse =
    IntermediateResponse.interruptedMeasurement; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION interruptedMeasurement */

/* START_OF_SYMBOL_DEFINITION IntermediateResponse_repeatLater */
/**
 * @summary IntermediateResponse_repeatLater
 * @constant
 * @type {number}
 */
export const IntermediateResponse_repeatLater: IntermediateResponse =
    IntermediateResponse.repeatLater; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION IntermediateResponse_repeatLater */

/* START_OF_SYMBOL_DEFINITION repeatLater */
/**
 * @summary repeatLater
 * @constant
 * @type {number}
 */
export const repeatLater: IntermediateResponse =
    IntermediateResponse.repeatLater; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION repeatLater */

/* START_OF_SYMBOL_DEFINITION IntermediateResponse_noAcknowledgement */
/**
 * @summary IntermediateResponse_noAcknowledgement
 * @constant
 * @type {number}
 */
export const IntermediateResponse_noAcknowledgement: IntermediateResponse =
    IntermediateResponse.noAcknowledgement; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION IntermediateResponse_noAcknowledgement */

/* START_OF_SYMBOL_DEFINITION noAcknowledgement */
/**
 * @summary noAcknowledgement
 * @constant
 * @type {number}
 */
export const noAcknowledgement: IntermediateResponse =
    IntermediateResponse.noAcknowledgement; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION noAcknowledgement */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_IntermediateResponse */
let _cached_decoder_for_IntermediateResponse: $.ASN1Decoder<IntermediateResponse> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_IntermediateResponse */

/* START_OF_SYMBOL_DEFINITION _decode_IntermediateResponse */
/**
 * @summary Decodes an ASN.1 element into a(n) IntermediateResponse
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {IntermediateResponse} The decoded data structure.
 */
export function _decode_IntermediateResponse(el: _Element) {
    if (!_cached_decoder_for_IntermediateResponse) {
        _cached_decoder_for_IntermediateResponse = $._decodeEnumerated;
    }
    return _cached_decoder_for_IntermediateResponse(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_IntermediateResponse */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_IntermediateResponse */
let _cached_encoder_for_IntermediateResponse: $.ASN1Encoder<IntermediateResponse> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_IntermediateResponse */

/* START_OF_SYMBOL_DEFINITION _encode_IntermediateResponse */
/**
 * @summary Encodes a(n) IntermediateResponse into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IntermediateResponse, encoded as an ASN.1 Element.
 */
export function _encode_IntermediateResponse(
    value: IntermediateResponse,
    elGetter: $.ASN1Encoder<IntermediateResponse>
) {
    if (!_cached_encoder_for_IntermediateResponse) {
        _cached_encoder_for_IntermediateResponse = $._encodeEnumerated;
    }
    return _cached_encoder_for_IntermediateResponse(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_IntermediateResponse */

/* eslint-enable */
