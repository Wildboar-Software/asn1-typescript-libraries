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
    TestSuspendResumeError_Item,
    _decode_TestSuspendResumeError_Item,
    _encode_TestSuspendResumeError_Item,
} from '../Test-ASN1Module/TestSuspendResumeError-Item.ta.js';
export {
    TestSuspendResumeError_Item,
    _decode_TestSuspendResumeError_Item,
    _encode_TestSuspendResumeError_Item,
} from '../Test-ASN1Module/TestSuspendResumeError-Item.ta.js';

/* START_OF_SYMBOL_DEFINITION TestSuspendResumeError */
/**
 * @summary TestSuspendResumeError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TestSuspendResumeError  ::=
 *   SET OF
 *     CHOICE {testSuspendResumeSuccess  [0]  TestSuspendResumeElement,
 *             testSuspendResumeFailure  [1]  TestSuspendResumeElement}
 * ```
 */
export type TestSuspendResumeError = TestSuspendResumeError_Item[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION TestSuspendResumeError */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TestSuspendResumeError */
let _cached_decoder_for_TestSuspendResumeError: $.ASN1Decoder<TestSuspendResumeError> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TestSuspendResumeError */

/* START_OF_SYMBOL_DEFINITION _decode_TestSuspendResumeError */
/**
 * @summary Decodes an ASN.1 element into a(n) TestSuspendResumeError
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TestSuspendResumeError} The decoded data structure.
 */
export function _decode_TestSuspendResumeError(el: _Element) {
    if (!_cached_decoder_for_TestSuspendResumeError) {
        _cached_decoder_for_TestSuspendResumeError = $._decodeSetOf<TestSuspendResumeError_Item>(
            () => _decode_TestSuspendResumeError_Item
        );
    }
    return _cached_decoder_for_TestSuspendResumeError(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TestSuspendResumeError */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TestSuspendResumeError */
let _cached_encoder_for_TestSuspendResumeError: $.ASN1Encoder<TestSuspendResumeError> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TestSuspendResumeError */

/* START_OF_SYMBOL_DEFINITION _encode_TestSuspendResumeError */
/**
 * @summary Encodes a(n) TestSuspendResumeError into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TestSuspendResumeError, encoded as an ASN.1 Element.
 */
export function _encode_TestSuspendResumeError(
    value: TestSuspendResumeError,
    elGetter: $.ASN1Encoder<TestSuspendResumeError>
) {
    if (!_cached_encoder_for_TestSuspendResumeError) {
        _cached_encoder_for_TestSuspendResumeError = $._encodeSetOf<TestSuspendResumeError_Item>(
            () => _encode_TestSuspendResumeError_Item,
            $.BER
        );
    }
    return _cached_encoder_for_TestSuspendResumeError(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TestSuspendResumeError */

/* eslint-enable */
