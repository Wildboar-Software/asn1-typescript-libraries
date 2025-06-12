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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';

/* START_OF_SYMBOL_DEFINITION _enum_for_IntermediateResourceBoundaryTestOutcome */
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
 * ```@enum {number}
 */
export enum _enum_for_IntermediateResourceBoundaryTestOutcome {
    passed = 0,
    unexpected = 1,
    wrongSignalReceived = 2,
    waitDurationTimerExpired = 3,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_IntermediateResourceBoundaryTestOutcome */

/* START_OF_SYMBOL_DEFINITION IntermediateResourceBoundaryTestOutcome */
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
 * ```@enum {number}
 */
export type IntermediateResourceBoundaryTestOutcome = _enum_for_IntermediateResourceBoundaryTestOutcome;
/* END_OF_SYMBOL_DEFINITION IntermediateResourceBoundaryTestOutcome */

/* START_OF_SYMBOL_DEFINITION IntermediateResourceBoundaryTestOutcome */
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
 * ```@enum {number}
 */
export const IntermediateResourceBoundaryTestOutcome = _enum_for_IntermediateResourceBoundaryTestOutcome;
/* END_OF_SYMBOL_DEFINITION IntermediateResourceBoundaryTestOutcome */

/* START_OF_SYMBOL_DEFINITION IntermediateResourceBoundaryTestOutcome_passed */
/**
 * @summary IntermediateResourceBoundaryTestOutcome_passed
 * @constant
 * @type {number}
 */
export const IntermediateResourceBoundaryTestOutcome_passed: IntermediateResourceBoundaryTestOutcome =
    IntermediateResourceBoundaryTestOutcome.passed; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION IntermediateResourceBoundaryTestOutcome_passed */

/* START_OF_SYMBOL_DEFINITION passed */
/**
 * @summary passed
 * @constant
 * @type {number}
 */
export const passed: IntermediateResourceBoundaryTestOutcome =
    IntermediateResourceBoundaryTestOutcome.passed; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION passed */

/* START_OF_SYMBOL_DEFINITION IntermediateResourceBoundaryTestOutcome_unexpected */
/**
 * @summary IntermediateResourceBoundaryTestOutcome_unexpected
 * @constant
 * @type {number}
 */
export const IntermediateResourceBoundaryTestOutcome_unexpected: IntermediateResourceBoundaryTestOutcome =
    IntermediateResourceBoundaryTestOutcome.unexpected; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION IntermediateResourceBoundaryTestOutcome_unexpected */

/* START_OF_SYMBOL_DEFINITION unexpected */
/**
 * @summary unexpected
 * @constant
 * @type {number}
 */
export const unexpected: IntermediateResourceBoundaryTestOutcome =
    IntermediateResourceBoundaryTestOutcome.unexpected; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION unexpected */

/* START_OF_SYMBOL_DEFINITION IntermediateResourceBoundaryTestOutcome_wrongSignalReceived */
/**
 * @summary IntermediateResourceBoundaryTestOutcome_wrongSignalReceived
 * @constant
 * @type {number}
 */
export const IntermediateResourceBoundaryTestOutcome_wrongSignalReceived: IntermediateResourceBoundaryTestOutcome =
    IntermediateResourceBoundaryTestOutcome.wrongSignalReceived; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION IntermediateResourceBoundaryTestOutcome_wrongSignalReceived */

/* START_OF_SYMBOL_DEFINITION wrongSignalReceived */
/**
 * @summary wrongSignalReceived
 * @constant
 * @type {number}
 */
export const wrongSignalReceived: IntermediateResourceBoundaryTestOutcome =
    IntermediateResourceBoundaryTestOutcome.wrongSignalReceived; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION wrongSignalReceived */

/* START_OF_SYMBOL_DEFINITION IntermediateResourceBoundaryTestOutcome_waitDurationTimerExpired */
/**
 * @summary IntermediateResourceBoundaryTestOutcome_waitDurationTimerExpired
 * @constant
 * @type {number}
 */
export const IntermediateResourceBoundaryTestOutcome_waitDurationTimerExpired: IntermediateResourceBoundaryTestOutcome =
    IntermediateResourceBoundaryTestOutcome.waitDurationTimerExpired; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION IntermediateResourceBoundaryTestOutcome_waitDurationTimerExpired */

/* START_OF_SYMBOL_DEFINITION waitDurationTimerExpired */
/**
 * @summary waitDurationTimerExpired
 * @constant
 * @type {number}
 */
export const waitDurationTimerExpired: IntermediateResourceBoundaryTestOutcome =
    IntermediateResourceBoundaryTestOutcome.waitDurationTimerExpired; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION waitDurationTimerExpired */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_IntermediateResourceBoundaryTestOutcome */
let _cached_decoder_for_IntermediateResourceBoundaryTestOutcome: $.ASN1Decoder<IntermediateResourceBoundaryTestOutcome> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_IntermediateResourceBoundaryTestOutcome */

/* START_OF_SYMBOL_DEFINITION _decode_IntermediateResourceBoundaryTestOutcome */
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
/* END_OF_SYMBOL_DEFINITION _decode_IntermediateResourceBoundaryTestOutcome */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_IntermediateResourceBoundaryTestOutcome */
let _cached_encoder_for_IntermediateResourceBoundaryTestOutcome: $.ASN1Encoder<IntermediateResourceBoundaryTestOutcome> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_IntermediateResourceBoundaryTestOutcome */

/* START_OF_SYMBOL_DEFINITION _encode_IntermediateResourceBoundaryTestOutcome */
/**
 * @summary Encodes a(n) IntermediateResourceBoundaryTestOutcome into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
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

/* END_OF_SYMBOL_DEFINITION _encode_IntermediateResourceBoundaryTestOutcome */

/* eslint-enable */
