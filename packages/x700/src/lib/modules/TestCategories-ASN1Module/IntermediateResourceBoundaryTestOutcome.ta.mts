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
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary IntermediateResourceBoundaryTestOutcome
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IntermediateResourceBoundaryTestOutcome  ::=  ENUMERATED {
 *   passed(0), unexpected(1), wrongSignalReceived(2), waitDurationTimerExpired(3)
 * }
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_IntermediateResourceBoundaryTestOutcome {
    passed = 0,
    unexpected = 1,
    wrongSignalReceived = 2,
    waitDurationTimerExpired = 3,
}

/**
 * @summary IntermediateResourceBoundaryTestOutcome
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IntermediateResourceBoundaryTestOutcome  ::=  ENUMERATED {
 *   passed(0), unexpected(1), wrongSignalReceived(2), waitDurationTimerExpired(3)
 * }
 * ```
 *
 * @enum {number}
 */
export type IntermediateResourceBoundaryTestOutcome = _enum_for_IntermediateResourceBoundaryTestOutcome;

/**
 * @summary IntermediateResourceBoundaryTestOutcome
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IntermediateResourceBoundaryTestOutcome  ::=  ENUMERATED {
 *   passed(0), unexpected(1), wrongSignalReceived(2), waitDurationTimerExpired(3)
 * }
 * ```
 *
 * @enum {number}
 */
export const IntermediateResourceBoundaryTestOutcome = _enum_for_IntermediateResourceBoundaryTestOutcome;

/**
 * @summary IntermediateResourceBoundaryTestOutcome_passed
 * @constant
 * @type {number}
 */
export const IntermediateResourceBoundaryTestOutcome_passed: IntermediateResourceBoundaryTestOutcome =
    IntermediateResourceBoundaryTestOutcome.passed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary passed
 * @constant
 * @type {number}
 */
export const passed: IntermediateResourceBoundaryTestOutcome =
    IntermediateResourceBoundaryTestOutcome.passed; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IntermediateResourceBoundaryTestOutcome_unexpected
 * @constant
 * @type {number}
 */
export const IntermediateResourceBoundaryTestOutcome_unexpected: IntermediateResourceBoundaryTestOutcome =
    IntermediateResourceBoundaryTestOutcome.unexpected; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unexpected
 * @constant
 * @type {number}
 */
export const unexpected: IntermediateResourceBoundaryTestOutcome =
    IntermediateResourceBoundaryTestOutcome.unexpected; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IntermediateResourceBoundaryTestOutcome_wrongSignalReceived
 * @constant
 * @type {number}
 */
export const IntermediateResourceBoundaryTestOutcome_wrongSignalReceived: IntermediateResourceBoundaryTestOutcome =
    IntermediateResourceBoundaryTestOutcome.wrongSignalReceived; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary wrongSignalReceived
 * @constant
 * @type {number}
 */
export const wrongSignalReceived: IntermediateResourceBoundaryTestOutcome =
    IntermediateResourceBoundaryTestOutcome.wrongSignalReceived; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IntermediateResourceBoundaryTestOutcome_waitDurationTimerExpired
 * @constant
 * @type {number}
 */
export const IntermediateResourceBoundaryTestOutcome_waitDurationTimerExpired: IntermediateResourceBoundaryTestOutcome =
    IntermediateResourceBoundaryTestOutcome.waitDurationTimerExpired; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary waitDurationTimerExpired
 * @constant
 * @type {number}
 */
export const waitDurationTimerExpired: IntermediateResourceBoundaryTestOutcome =
    IntermediateResourceBoundaryTestOutcome.waitDurationTimerExpired; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_IntermediateResourceBoundaryTestOutcome: $.ASN1Decoder<IntermediateResourceBoundaryTestOutcome> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IntermediateResourceBoundaryTestOutcome
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {IntermediateResourceBoundaryTestOutcome} The decoded data structure.
 */
export function _decode_IntermediateResourceBoundaryTestOutcome(el: _Element) {
    if (!_cached_decoder_for_IntermediateResourceBoundaryTestOutcome) {
        _cached_decoder_for_IntermediateResourceBoundaryTestOutcome =
            $._decodeEnumerated;
    }
    return _cached_decoder_for_IntermediateResourceBoundaryTestOutcome(el);
}

let _cached_encoder_for_IntermediateResourceBoundaryTestOutcome: $.ASN1Encoder<IntermediateResourceBoundaryTestOutcome> | null = null;

/**
 * @summary Encodes a(n) IntermediateResourceBoundaryTestOutcome into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IntermediateResourceBoundaryTestOutcome, encoded as an ASN.1 Element.
 */
export function _encode_IntermediateResourceBoundaryTestOutcome(
    value: IntermediateResourceBoundaryTestOutcome,
    elGetter: $.ASN1Encoder<IntermediateResourceBoundaryTestOutcome>
) {
    if (!_cached_encoder_for_IntermediateResourceBoundaryTestOutcome) {
        _cached_encoder_for_IntermediateResourceBoundaryTestOutcome =
            $._encodeEnumerated;
    }
    return _cached_encoder_for_IntermediateResourceBoundaryTestOutcome(
        value,
        elGetter
    );
}


/* eslint-enable */
