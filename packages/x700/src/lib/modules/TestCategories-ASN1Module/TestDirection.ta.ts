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

/* START_OF_SYMBOL_DEFINITION TestDirection */
/**
 * @summary TestDirection
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TestDirection  ::=  INTEGER {
 *   atoZ(0), ztoA(1), bothDirections(2), transmitFromNearEnd(3),
 *   receiveFromNearEnd(4)}
 * ```
 */
export type TestDirection = INTEGER;
/* END_OF_SYMBOL_DEFINITION TestDirection */

/* START_OF_SYMBOL_DEFINITION TestDirection_atoZ */
/**
 * @summary TestDirection_atoZ
 * @constant
 * @type {number}
 */
export const TestDirection_atoZ: TestDirection = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TestDirection_atoZ */

/* START_OF_SYMBOL_DEFINITION atoZ */
/**
 * @summary TestDirection_atoZ
 * @constant
 * @type {number}
 */
export const atoZ: TestDirection = TestDirection_atoZ; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION atoZ */

/* START_OF_SYMBOL_DEFINITION TestDirection_ztoA */
/**
 * @summary TestDirection_ztoA
 * @constant
 * @type {number}
 */
export const TestDirection_ztoA: TestDirection = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TestDirection_ztoA */

/* START_OF_SYMBOL_DEFINITION ztoA */
/**
 * @summary TestDirection_ztoA
 * @constant
 * @type {number}
 */
export const ztoA: TestDirection = TestDirection_ztoA; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ztoA */

/* START_OF_SYMBOL_DEFINITION TestDirection_bothDirections */
/**
 * @summary TestDirection_bothDirections
 * @constant
 * @type {number}
 */
export const TestDirection_bothDirections: TestDirection = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TestDirection_bothDirections */

/* START_OF_SYMBOL_DEFINITION bothDirections */
/**
 * @summary TestDirection_bothDirections
 * @constant
 * @type {number}
 */
export const bothDirections: TestDirection = TestDirection_bothDirections; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION bothDirections */

/* START_OF_SYMBOL_DEFINITION TestDirection_transmitFromNearEnd */
/**
 * @summary TestDirection_transmitFromNearEnd
 * @constant
 * @type {number}
 */
export const TestDirection_transmitFromNearEnd: TestDirection = 3; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TestDirection_transmitFromNearEnd */

/* START_OF_SYMBOL_DEFINITION transmitFromNearEnd */
/**
 * @summary TestDirection_transmitFromNearEnd
 * @constant
 * @type {number}
 */
export const transmitFromNearEnd: TestDirection = TestDirection_transmitFromNearEnd; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION transmitFromNearEnd */

/* START_OF_SYMBOL_DEFINITION TestDirection_receiveFromNearEnd */
/**
 * @summary TestDirection_receiveFromNearEnd
 * @constant
 * @type {number}
 */
export const TestDirection_receiveFromNearEnd: TestDirection = 4; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TestDirection_receiveFromNearEnd */

/* START_OF_SYMBOL_DEFINITION receiveFromNearEnd */
/**
 * @summary TestDirection_receiveFromNearEnd
 * @constant
 * @type {number}
 */
export const receiveFromNearEnd: TestDirection = TestDirection_receiveFromNearEnd; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION receiveFromNearEnd */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TestDirection */
let _cached_decoder_for_TestDirection: $.ASN1Decoder<TestDirection> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TestDirection */

/* START_OF_SYMBOL_DEFINITION _decode_TestDirection */
/**
 * @summary Decodes an ASN.1 element into a(n) TestDirection
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TestDirection} The decoded data structure.
 */
export function _decode_TestDirection(el: _Element) {
    if (!_cached_decoder_for_TestDirection) {
        _cached_decoder_for_TestDirection = $._decodeInteger;
    }
    return _cached_decoder_for_TestDirection(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TestDirection */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TestDirection */
let _cached_encoder_for_TestDirection: $.ASN1Encoder<TestDirection> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TestDirection */

/* START_OF_SYMBOL_DEFINITION _encode_TestDirection */
/**
 * @summary Encodes a(n) TestDirection into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TestDirection, encoded as an ASN.1 Element.
 */
export function _encode_TestDirection(
    value: TestDirection,
    elGetter: $.ASN1Encoder<TestDirection>
) {
    if (!_cached_encoder_for_TestDirection) {
        _cached_encoder_for_TestDirection = $._encodeInteger;
    }
    return _cached_encoder_for_TestDirection(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TestDirection */

/* eslint-enable */
