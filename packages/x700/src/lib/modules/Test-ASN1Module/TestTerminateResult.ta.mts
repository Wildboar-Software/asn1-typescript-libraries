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
    TestInvocationId,
    _decode_TestInvocationId,
    _encode_TestInvocationId,
} from '../Test-ASN1Module/TestInvocationId.ta.mjs';
export {
    TestInvocationId,
    _decode_TestInvocationId,
    _encode_TestInvocationId,
} from '../Test-ASN1Module/TestInvocationId.ta.mjs';

/* START_OF_SYMBOL_DEFINITION TestTerminateResult */
/**
 * @summary TestTerminateResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TestTerminateResult  ::=  SET OF TestInvocationId
 * ```
 */
export type TestTerminateResult = TestInvocationId[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION TestTerminateResult */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TestTerminateResult */
let _cached_decoder_for_TestTerminateResult: $.ASN1Decoder<TestTerminateResult> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TestTerminateResult */

/* START_OF_SYMBOL_DEFINITION _decode_TestTerminateResult */
/**
 * @summary Decodes an ASN.1 element into a(n) TestTerminateResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TestTerminateResult} The decoded data structure.
 */
export function _decode_TestTerminateResult(el: _Element) {
    if (!_cached_decoder_for_TestTerminateResult) {
        _cached_decoder_for_TestTerminateResult = $._decodeSetOf<TestInvocationId>(
            () => _decode_TestInvocationId
        );
    }
    return _cached_decoder_for_TestTerminateResult(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TestTerminateResult */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TestTerminateResult */
let _cached_encoder_for_TestTerminateResult: $.ASN1Encoder<TestTerminateResult> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TestTerminateResult */

/* START_OF_SYMBOL_DEFINITION _encode_TestTerminateResult */
/**
 * @summary Encodes a(n) TestTerminateResult into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TestTerminateResult, encoded as an ASN.1 Element.
 */
export function _encode_TestTerminateResult(
    value: TestTerminateResult,
    elGetter: $.ASN1Encoder<TestTerminateResult>
) {
    if (!_cached_encoder_for_TestTerminateResult) {
        _cached_encoder_for_TestTerminateResult = $._encodeSetOf<TestInvocationId>(
            () => _encode_TestInvocationId,
            $.BER
        );
    }
    return _cached_encoder_for_TestTerminateResult(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TestTerminateResult */

/* eslint-enable */
