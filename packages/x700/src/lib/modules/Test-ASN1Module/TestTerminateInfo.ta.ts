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
    IndicatedTests,
    _decode_IndicatedTests,
    _encode_IndicatedTests,
} from '../Test-ASN1Module/IndicatedTests.ta.js';
export {
    IndicatedTests,
    _decode_IndicatedTests,
    _encode_IndicatedTests,
} from '../Test-ASN1Module/IndicatedTests.ta.js';

/* START_OF_SYMBOL_DEFINITION TestTerminateInfo */
/**
 * @summary TestTerminateInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TestTerminateInfo  ::=  IndicatedTests
 * ```
 */
export type TestTerminateInfo = IndicatedTests; // DefinedType
/* END_OF_SYMBOL_DEFINITION TestTerminateInfo */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TestTerminateInfo */
let _cached_decoder_for_TestTerminateInfo: $.ASN1Decoder<TestTerminateInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TestTerminateInfo */

/* START_OF_SYMBOL_DEFINITION _decode_TestTerminateInfo */
/**
 * @summary Decodes an ASN.1 element into a(n) TestTerminateInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TestTerminateInfo} The decoded data structure.
 */
export function _decode_TestTerminateInfo(el: _Element) {
    if (!_cached_decoder_for_TestTerminateInfo) {
        _cached_decoder_for_TestTerminateInfo = _decode_IndicatedTests;
    }
    return _cached_decoder_for_TestTerminateInfo(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TestTerminateInfo */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TestTerminateInfo */
let _cached_encoder_for_TestTerminateInfo: $.ASN1Encoder<TestTerminateInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TestTerminateInfo */

/* START_OF_SYMBOL_DEFINITION _encode_TestTerminateInfo */
/**
 * @summary Encodes a(n) TestTerminateInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TestTerminateInfo, encoded as an ASN.1 Element.
 */
export function _encode_TestTerminateInfo(
    value: TestTerminateInfo,
    elGetter: $.ASN1Encoder<TestTerminateInfo>
) {
    if (!_cached_encoder_for_TestTerminateInfo) {
        _cached_encoder_for_TestTerminateInfo = _encode_IndicatedTests;
    }
    return _cached_encoder_for_TestTerminateInfo(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TestTerminateInfo */

/* eslint-enable */
