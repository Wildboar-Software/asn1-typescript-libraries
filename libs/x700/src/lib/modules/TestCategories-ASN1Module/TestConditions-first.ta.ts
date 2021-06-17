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
import * as $ from 'asn1-ts/dist/node/functional';

/* START_OF_SYMBOL_DEFINITION TestConditions_first */
/**
 * @summary TestConditions_first
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TestConditions-first ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type TestConditions_first = INTEGER;
/* END_OF_SYMBOL_DEFINITION TestConditions_first */

/* START_OF_SYMBOL_DEFINITION TestConditions_first_testIfBusy */
/**
 * @summary TestConditions_first_testIfBusy
 * @constant
 * @type {number}
 */
export const TestConditions_first_testIfBusy: TestConditions_first = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TestConditions_first_testIfBusy */

/* START_OF_SYMBOL_DEFINITION testIfBusy */
/**
 * @summary TestConditions_first_testIfBusy
 * @constant
 * @type {number}
 */
export const testIfBusy: TestConditions_first = TestConditions_first_testIfBusy; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION testIfBusy */

/* START_OF_SYMBOL_DEFINITION TestConditions_first_rejectIfBusy */
/**
 * @summary TestConditions_first_rejectIfBusy
 * @constant
 * @type {number}
 */
export const TestConditions_first_rejectIfBusy: TestConditions_first = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TestConditions_first_rejectIfBusy */

/* START_OF_SYMBOL_DEFINITION rejectIfBusy */
/**
 * @summary TestConditions_first_rejectIfBusy
 * @constant
 * @type {number}
 */
export const rejectIfBusy: TestConditions_first = TestConditions_first_rejectIfBusy; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION rejectIfBusy */

/* START_OF_SYMBOL_DEFINITION TestConditions_first_waitIfBusy */
/**
 * @summary TestConditions_first_waitIfBusy
 * @constant
 * @type {number}
 */
export const TestConditions_first_waitIfBusy: TestConditions_first = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TestConditions_first_waitIfBusy */

/* START_OF_SYMBOL_DEFINITION waitIfBusy */
/**
 * @summary TestConditions_first_waitIfBusy
 * @constant
 * @type {number}
 */
export const waitIfBusy: TestConditions_first = TestConditions_first_waitIfBusy; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION waitIfBusy */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TestConditions_first */
let _cached_decoder_for_TestConditions_first: $.ASN1Decoder<TestConditions_first> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TestConditions_first */

/* START_OF_SYMBOL_DEFINITION _decode_TestConditions_first */
/**
 * @summary Decodes an ASN.1 element into a(n) TestConditions_first
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TestConditions_first} The decoded data structure.
 */
export function _decode_TestConditions_first(el: _Element) {
    if (!_cached_decoder_for_TestConditions_first) {
        _cached_decoder_for_TestConditions_first = $._decodeInteger;
    }
    return _cached_decoder_for_TestConditions_first(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TestConditions_first */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TestConditions_first */
let _cached_encoder_for_TestConditions_first: $.ASN1Encoder<TestConditions_first> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TestConditions_first */

/* START_OF_SYMBOL_DEFINITION _encode_TestConditions_first */
/**
 * @summary Encodes a(n) TestConditions_first into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TestConditions_first, encoded as an ASN.1 Element.
 */
export function _encode_TestConditions_first(
    value: TestConditions_first,
    elGetter: $.ASN1Encoder<TestConditions_first>
) {
    if (!_cached_encoder_for_TestConditions_first) {
        _cached_encoder_for_TestConditions_first = $._encodeInteger;
    }
    return _cached_encoder_for_TestConditions_first(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TestConditions_first */

/* eslint-enable */
