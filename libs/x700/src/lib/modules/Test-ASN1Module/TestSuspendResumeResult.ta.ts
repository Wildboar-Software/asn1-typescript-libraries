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
import {
    TestSuspendResumeElement,
    _decode_TestSuspendResumeElement,
    _encode_TestSuspendResumeElement,
} from '../Test-ASN1Module/TestSuspendResumeElement.ta';
export {
    TestSuspendResumeElement,
    _decode_TestSuspendResumeElement,
    _encode_TestSuspendResumeElement,
} from '../Test-ASN1Module/TestSuspendResumeElement.ta';

/* START_OF_SYMBOL_DEFINITION TestSuspendResumeResult */
/**
 * @summary TestSuspendResumeResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TestSuspendResumeResult  ::=  SET OF TestSuspendResumeElement
 * ```
 */
export type TestSuspendResumeResult = TestSuspendResumeElement[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION TestSuspendResumeResult */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TestSuspendResumeResult */
let _cached_decoder_for_TestSuspendResumeResult: $.ASN1Decoder<TestSuspendResumeResult> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TestSuspendResumeResult */

/* START_OF_SYMBOL_DEFINITION _decode_TestSuspendResumeResult */
/**
 * @summary Decodes an ASN.1 element into a(n) TestSuspendResumeResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TestSuspendResumeResult} The decoded data structure.
 */
export function _decode_TestSuspendResumeResult(el: _Element) {
    if (!_cached_decoder_for_TestSuspendResumeResult) {
        _cached_decoder_for_TestSuspendResumeResult = $._decodeSetOf<TestSuspendResumeElement>(
            () => _decode_TestSuspendResumeElement
        );
    }
    return _cached_decoder_for_TestSuspendResumeResult(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TestSuspendResumeResult */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TestSuspendResumeResult */
let _cached_encoder_for_TestSuspendResumeResult: $.ASN1Encoder<TestSuspendResumeResult> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TestSuspendResumeResult */

/* START_OF_SYMBOL_DEFINITION _encode_TestSuspendResumeResult */
/**
 * @summary Encodes a(n) TestSuspendResumeResult into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TestSuspendResumeResult, encoded as an ASN.1 Element.
 */
export function _encode_TestSuspendResumeResult(
    value: TestSuspendResumeResult,
    elGetter: $.ASN1Encoder<TestSuspendResumeResult>
) {
    if (!_cached_encoder_for_TestSuspendResumeResult) {
        _cached_encoder_for_TestSuspendResumeResult = $._encodeSetOf<TestSuspendResumeElement>(
            () => _encode_TestSuspendResumeElement,
            $.BER
        );
    }
    return _cached_encoder_for_TestSuspendResumeResult(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TestSuspendResumeResult */

/* eslint-enable */
