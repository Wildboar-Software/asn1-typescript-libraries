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
    TestSessionId,
    _decode_TestSessionId,
    _encode_TestSessionId,
} from '../Test-ASN1Module/TestSessionId.ta.js';
export {
    TestSessionId,
    _decode_TestSessionId,
    _encode_TestSessionId,
} from '../Test-ASN1Module/TestSessionId.ta.js';
import {
    TestInvocationId,
    _decode_TestInvocationId,
    _encode_TestInvocationId,
} from '../Test-ASN1Module/TestInvocationId.ta.js';
export {
    TestInvocationId,
    _decode_TestInvocationId,
    _encode_TestInvocationId,
} from '../Test-ASN1Module/TestInvocationId.ta.js';

/* START_OF_SYMBOL_DEFINITION IndicatedTests */
/**
 * @summary IndicatedTests
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IndicatedTests  ::=  CHOICE {
 *   testSessionId     [0]  TestSessionId,
 *   testInvocationId  [1]  SET OF TestInvocationId
 * }
 * ```
 */
export type IndicatedTests =
    | { testSessionId: TestSessionId } /* CHOICE_ALT_ROOT */
    | { testInvocationId: TestInvocationId[] } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION IndicatedTests */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_IndicatedTests */
let _cached_decoder_for_IndicatedTests: $.ASN1Decoder<IndicatedTests> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_IndicatedTests */

/* START_OF_SYMBOL_DEFINITION _decode_IndicatedTests */
/**
 * @summary Decodes an ASN.1 element into a(n) IndicatedTests
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {IndicatedTests} The decoded data structure.
 */
export function _decode_IndicatedTests(el: _Element) {
    if (!_cached_decoder_for_IndicatedTests) {
        _cached_decoder_for_IndicatedTests = $._decode_inextensible_choice<IndicatedTests>(
            {
                'CONTEXT 0': [
                    'testSessionId',
                    $._decode_implicit<TestSessionId>(
                        () => _decode_TestSessionId
                    ),
                ],
                'CONTEXT 1': [
                    'testInvocationId',
                    $._decode_implicit<TestInvocationId[]>(() =>
                        $._decodeSetOf<TestInvocationId>(
                            () => _decode_TestInvocationId
                        )
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_IndicatedTests(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_IndicatedTests */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_IndicatedTests */
let _cached_encoder_for_IndicatedTests: $.ASN1Encoder<IndicatedTests> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_IndicatedTests */

/* START_OF_SYMBOL_DEFINITION _encode_IndicatedTests */
/**
 * @summary Encodes a(n) IndicatedTests into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IndicatedTests, encoded as an ASN.1 Element.
 */
export function _encode_IndicatedTests(
    value: IndicatedTests,
    elGetter: $.ASN1Encoder<IndicatedTests>
) {
    if (!_cached_encoder_for_IndicatedTests) {
        _cached_encoder_for_IndicatedTests = $._encode_choice<IndicatedTests>(
            {
                testSessionId: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_TestSessionId,
                    $.BER
                ),
                testInvocationId: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () =>
                        $._encodeSetOf<TestInvocationId>(
                            () => _encode_TestInvocationId,
                            $.BER
                        ),
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_IndicatedTests(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_IndicatedTests */

/* eslint-enable */
