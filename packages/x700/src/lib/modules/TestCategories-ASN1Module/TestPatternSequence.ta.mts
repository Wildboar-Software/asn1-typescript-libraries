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
import {
    TestPattern,
    _decode_TestPattern,
    _encode_TestPattern,
} from '../TestCategories-ASN1Module/TestPattern.ta.mjs';
export {
    TestPattern,
    _decode_TestPattern,
    _encode_TestPattern,
} from '../TestCategories-ASN1Module/TestPattern.ta.mjs';

/* START_OF_SYMBOL_DEFINITION TestPatternSequence */
/**
 * @summary TestPatternSequence
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TestPatternSequence  ::=
 *   SEQUENCE OF TestPattern
 * ```
 */
export type TestPatternSequence = TestPattern[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION TestPatternSequence */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TestPatternSequence */
let _cached_decoder_for_TestPatternSequence: $.ASN1Decoder<TestPatternSequence> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TestPatternSequence */

/* START_OF_SYMBOL_DEFINITION _decode_TestPatternSequence */
/**
 * @summary Decodes an ASN.1 element into a(n) TestPatternSequence
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TestPatternSequence} The decoded data structure.
 */
export function _decode_TestPatternSequence(el: _Element) {
    if (!_cached_decoder_for_TestPatternSequence) {
        _cached_decoder_for_TestPatternSequence = $._decodeSequenceOf<TestPattern>(
            () => _decode_TestPattern
        );
    }
    return _cached_decoder_for_TestPatternSequence(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TestPatternSequence */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TestPatternSequence */
let _cached_encoder_for_TestPatternSequence: $.ASN1Encoder<TestPatternSequence> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TestPatternSequence */

/* START_OF_SYMBOL_DEFINITION _encode_TestPatternSequence */
/**
 * @summary Encodes a(n) TestPatternSequence into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TestPatternSequence, encoded as an ASN.1 Element.
 */
export function _encode_TestPatternSequence(
    value: TestPatternSequence,
    elGetter: $.ASN1Encoder<TestPatternSequence>
) {
    if (!_cached_encoder_for_TestPatternSequence) {
        _cached_encoder_for_TestPatternSequence = $._encodeSequenceOf<TestPattern>(
            () => _encode_TestPattern,
            $.BER
        );
    }
    return _cached_encoder_for_TestPatternSequence(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TestPatternSequence */

/* eslint-enable */
