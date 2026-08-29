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
 * @summary IntermediateResourceBoundaryTestOutcome
 * @description
 *
 * Why a resource-boundary intermediate report was emitted.
 * `passed` — last signal of the sequence completed (case 1, if
 * indicated). `unexpected` — signal at a PCO with no active
 * sequence (case 2). `wrongSignalReceived` — signal other than the
 * next expected receive (case 3). `waitDurationTimerExpired` —
 * expected receive did not arrive in time (case 4). ITU-T Rec.
 * X.737 (11/95) [§7.6.7](https://www.itu.int/rec/T-REC-X.737-199511-I), §7.6.8,
 * §8.1.16.
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
 * Why a resource-boundary intermediate report was emitted.
 * `passed` — last signal of the sequence completed (case 1, if
 * indicated). `unexpected` — signal at a PCO with no active
 * sequence (case 2). `wrongSignalReceived` — signal other than the
 * next expected receive (case 3). `waitDurationTimerExpired` —
 * expected receive did not arrive in time (case 4). ITU-T Rec.
 * X.737 (11/95) [§7.6.7](https://www.itu.int/rec/T-REC-X.737-199511-I), §7.6.8,
 * §8.1.16.
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
 * Why a resource-boundary intermediate report was emitted.
 * `passed` — last signal of the sequence completed (case 1, if
 * indicated). `unexpected` — signal at a PCO with no active
 * sequence (case 2). `wrongSignalReceived` — signal other than the
 * next expected receive (case 3). `waitDurationTimerExpired` —
 * expected receive did not arrive in time (case 4). ITU-T Rec.
 * X.737 (11/95) [§7.6.7](https://www.itu.int/rec/T-REC-X.737-199511-I), §7.6.8,
 * §8.1.16.
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
 * @description
 *
 * Sequence completed successfully (0). Case 1. X.737 §7.6.8.
 * @constant
 * @type {number}
 */
export const IntermediateResourceBoundaryTestOutcome_passed: IntermediateResourceBoundaryTestOutcome =
    IntermediateResourceBoundaryTestOutcome.passed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary passed
 * @description
 *
 * Sequence completed successfully (0). Case 1. X.737 §7.6.8.
 * @constant
 * @type {number}
 */
export const passed: IntermediateResourceBoundaryTestOutcome =
    IntermediateResourceBoundaryTestOutcome.passed; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IntermediateResourceBoundaryTestOutcome_unexpected
 * @description
 *
 * Signal with no active sequence (1). Case 2. X.737 §7.6.8.
 * @constant
 * @type {number}
 */
export const IntermediateResourceBoundaryTestOutcome_unexpected: IntermediateResourceBoundaryTestOutcome =
    IntermediateResourceBoundaryTestOutcome.unexpected; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unexpected
 * @description
 *
 * Signal with no active sequence (1). Case 2. X.737 §7.6.8.
 * @constant
 * @type {number}
 */
export const unexpected: IntermediateResourceBoundaryTestOutcome =
    IntermediateResourceBoundaryTestOutcome.unexpected; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IntermediateResourceBoundaryTestOutcome_wrongSignalReceived
 * @description
 *
 * Wrong signal vs expected receive (2). Case 3. X.737 §7.6.8.
 * @constant
 * @type {number}
 */
export const IntermediateResourceBoundaryTestOutcome_wrongSignalReceived: IntermediateResourceBoundaryTestOutcome =
    IntermediateResourceBoundaryTestOutcome.wrongSignalReceived; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary wrongSignalReceived
 * @description
 *
 * Wrong signal vs expected receive (2). Case 3. X.737 §7.6.8.
 * @constant
 * @type {number}
 */
export const wrongSignalReceived: IntermediateResourceBoundaryTestOutcome =
    IntermediateResourceBoundaryTestOutcome.wrongSignalReceived; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IntermediateResourceBoundaryTestOutcome_waitDurationTimerExpired
 * @description
 *
 * Expected receive timed out (3). Case 4. X.737 §7.6.8.
 * @constant
 * @type {number}
 */
export const IntermediateResourceBoundaryTestOutcome_waitDurationTimerExpired: IntermediateResourceBoundaryTestOutcome =
    IntermediateResourceBoundaryTestOutcome.waitDurationTimerExpired; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary waitDurationTimerExpired
 * @description
 *
 * Expected receive timed out (3). Case 4. X.737 §7.6.8.
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
export function _decode_IntermediateResourceBoundaryTestOutcome(el: _Element): IntermediateResourceBoundaryTestOutcome {
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
): _Element {
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
