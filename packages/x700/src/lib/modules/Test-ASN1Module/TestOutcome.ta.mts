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

/* START_OF_SYMBOL_DEFINITION TestOutcome */
/**
 * @summary TestOutcome
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TestOutcome  ::=  INTEGER {
 *   inconclusive(0), pass(1), fail(2), timed-out(3), premature-termination(4)
 * }
 * ```
 */
export type TestOutcome = INTEGER;
/* END_OF_SYMBOL_DEFINITION TestOutcome */

/* START_OF_SYMBOL_DEFINITION TestOutcome_inconclusive */
/**
 * @summary TestOutcome_inconclusive
 * @constant
 * @type {number}
 */
export const TestOutcome_inconclusive: TestOutcome = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TestOutcome_inconclusive */

/* START_OF_SYMBOL_DEFINITION inconclusive */
/**
 * @summary TestOutcome_inconclusive
 * @constant
 * @type {number}
 */
export const inconclusive: TestOutcome = TestOutcome_inconclusive; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION inconclusive */

/* START_OF_SYMBOL_DEFINITION TestOutcome_pass */
/**
 * @summary TestOutcome_pass
 * @constant
 * @type {number}
 */
export const TestOutcome_pass: TestOutcome = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TestOutcome_pass */

/* START_OF_SYMBOL_DEFINITION pass */
/**
 * @summary TestOutcome_pass
 * @constant
 * @type {number}
 */
export const pass: TestOutcome = TestOutcome_pass; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION pass */

/* START_OF_SYMBOL_DEFINITION TestOutcome_fail */
/**
 * @summary TestOutcome_fail
 * @constant
 * @type {number}
 */
export const TestOutcome_fail: TestOutcome = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TestOutcome_fail */

/* START_OF_SYMBOL_DEFINITION fail */
/**
 * @summary TestOutcome_fail
 * @constant
 * @type {number}
 */
export const fail: TestOutcome = TestOutcome_fail; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION fail */

/* START_OF_SYMBOL_DEFINITION TestOutcome_timed_out */
/**
 * @summary TestOutcome_timed_out
 * @constant
 * @type {number}
 */
export const TestOutcome_timed_out: TestOutcome = 3; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TestOutcome_timed_out */

/* START_OF_SYMBOL_DEFINITION timed_out */
/**
 * @summary TestOutcome_timed_out
 * @constant
 * @type {number}
 */
export const timed_out: TestOutcome = TestOutcome_timed_out; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION timed_out */

/* START_OF_SYMBOL_DEFINITION TestOutcome_premature_termination */
/**
 * @summary TestOutcome_premature_termination
 * @constant
 * @type {number}
 */
export const TestOutcome_premature_termination: TestOutcome = 4; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TestOutcome_premature_termination */

/* START_OF_SYMBOL_DEFINITION premature_termination */
/**
 * @summary TestOutcome_premature_termination
 * @constant
 * @type {number}
 */
export const premature_termination: TestOutcome = TestOutcome_premature_termination; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION premature_termination */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TestOutcome */
let _cached_decoder_for_TestOutcome: $.ASN1Decoder<TestOutcome> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TestOutcome */

/* START_OF_SYMBOL_DEFINITION _decode_TestOutcome */
/**
 * @summary Decodes an ASN.1 element into a(n) TestOutcome
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TestOutcome} The decoded data structure.
 */
export function _decode_TestOutcome(el: _Element) {
    if (!_cached_decoder_for_TestOutcome) {
        _cached_decoder_for_TestOutcome = $._decodeInteger;
    }
    return _cached_decoder_for_TestOutcome(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TestOutcome */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TestOutcome */
let _cached_encoder_for_TestOutcome: $.ASN1Encoder<TestOutcome> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TestOutcome */

/* START_OF_SYMBOL_DEFINITION _encode_TestOutcome */
/**
 * @summary Encodes a(n) TestOutcome into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TestOutcome, encoded as an ASN.1 Element.
 */
export function _encode_TestOutcome(
    value: TestOutcome,
    elGetter: $.ASN1Encoder<TestOutcome>
) {
    if (!_cached_encoder_for_TestOutcome) {
        _cached_encoder_for_TestOutcome = $._encodeInteger;
    }
    return _cached_encoder_for_TestOutcome(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TestOutcome */

/* eslint-enable */
