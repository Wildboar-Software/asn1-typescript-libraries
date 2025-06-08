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
    Timespec,
    _decode_Timespec,
    _encode_Timespec,
} from '../Test-ASN1Module/Timespec.ta';
export {
    Timespec,
    _decode_Timespec,
    _encode_Timespec,
} from '../Test-ASN1Module/Timespec.ta';
import {
    TestDuration_signalLength,
    _decode_TestDuration_signalLength,
    _encode_TestDuration_signalLength,
} from '../TestCategories-ASN1Module/TestDuration-signalLength.ta';
export {
    TestDuration_signalLength,
    _decode_TestDuration_signalLength,
    _encode_TestDuration_signalLength,
} from '../TestCategories-ASN1Module/TestDuration-signalLength.ta';

/* START_OF_SYMBOL_DEFINITION TestDuration */
/**
 * @summary TestDuration
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TestDuration  ::=  CHOICE {
 *   signalDuration  Timespec,
 *   signalLength    SEQUENCE {size      INTEGER,
 *                             dataRate  DataRate OPTIONAL}
 * }
 * ```
 */
export type TestDuration =
    | { signalDuration: Timespec } /* CHOICE_ALT_ROOT */
    | { signalLength: TestDuration_signalLength } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION TestDuration */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TestDuration */
let _cached_decoder_for_TestDuration: $.ASN1Decoder<TestDuration> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TestDuration */

/* START_OF_SYMBOL_DEFINITION _decode_TestDuration */
/**
 * @summary Decodes an ASN.1 element into a(n) TestDuration
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TestDuration} The decoded data structure.
 */
export function _decode_TestDuration(el: _Element) {
    if (!_cached_decoder_for_TestDuration) {
        _cached_decoder_for_TestDuration = $._decode_inextensible_choice<TestDuration>(
            {
                'CONTEXT 22': ['signalDuration', _decode_Timespec],
                'CONTEXT 23': ['signalDuration', _decode_Timespec],
                'CONTEXT 24': ['signalDuration', _decode_Timespec],
                'CONTEXT 25': ['signalDuration', _decode_Timespec],
                'CONTEXT 26': ['signalDuration', _decode_Timespec],
                'CONTEXT 27': ['signalDuration', _decode_Timespec],
                'CONTEXT 28': ['signalDuration', _decode_Timespec],
                'UNIVERSAL 16': [
                    'signalLength',
                    _decode_TestDuration_signalLength,
                ],
            }
        );
    }
    return _cached_decoder_for_TestDuration(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TestDuration */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TestDuration */
let _cached_encoder_for_TestDuration: $.ASN1Encoder<TestDuration> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TestDuration */

/* START_OF_SYMBOL_DEFINITION _encode_TestDuration */
/**
 * @summary Encodes a(n) TestDuration into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TestDuration, encoded as an ASN.1 Element.
 */
export function _encode_TestDuration(
    value: TestDuration,
    elGetter: $.ASN1Encoder<TestDuration>
) {
    if (!_cached_encoder_for_TestDuration) {
        _cached_encoder_for_TestDuration = $._encode_choice<TestDuration>(
            {
                signalDuration: _encode_Timespec,
                signalLength: _encode_TestDuration_signalLength,
            },
            $.BER
        );
    }
    return _cached_encoder_for_TestDuration(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TestDuration */

/* eslint-enable */
