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
    DataIntegrityTestResults_testResult,
    _decode_DataIntegrityTestResults_testResult,
    _encode_DataIntegrityTestResults_testResult,
} from '../TestCategories-ASN1Module/DataIntegrityTestResults-testResult.ta';
export {
    DataIntegrityTestResults_testResult,
    _decode_DataIntegrityTestResults_testResult,
    _encode_DataIntegrityTestResults_testResult,
} from '../TestCategories-ASN1Module/DataIntegrityTestResults-testResult.ta';
import {
    TimeoutPeriod,
    _decode_TimeoutPeriod,
    _encode_TimeoutPeriod,
} from '../Test-ASN1Module/TimeoutPeriod.ta';
export {
    TimeoutPeriod,
    _decode_TimeoutPeriod,
    _encode_TimeoutPeriod,
} from '../Test-ASN1Module/TimeoutPeriod.ta';
import {
    TestThreshold,
    _decode_TestThreshold,
    _encode_TestThreshold,
} from '../TestCategories-ASN1Module/TestThreshold.ta';
export {
    TestThreshold,
    _decode_TestThreshold,
    _encode_TestThreshold,
} from '../TestCategories-ASN1Module/TestThreshold.ta';

/* START_OF_SYMBOL_DEFINITION DataIntegrityTestResults */
/**
 * @summary DataIntegrityTestResults
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DataIntegrityTestResults  ::=  CHOICE {
 *   testResult
 *     [0]  SEQUENCE {establishmentTime  [1]  EstablishmentTime OPTIONAL,
 *                    originalData       [2]  DataUnits,
 *                    corruptedData      [3]  DataUnits OPTIONAL},
 *   timeoutPeriod  [4]  TimeoutPeriod,
 *   testThreshold  [5] EXPLICIT TestThreshold
 * }
 * ```
 */
export type DataIntegrityTestResults =
    | { testResult: DataIntegrityTestResults_testResult } /* CHOICE_ALT_ROOT */
    | { timeoutPeriod: TimeoutPeriod } /* CHOICE_ALT_ROOT */
    | { testThreshold: TestThreshold } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION DataIntegrityTestResults */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DataIntegrityTestResults */
let _cached_decoder_for_DataIntegrityTestResults: $.ASN1Decoder<DataIntegrityTestResults> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DataIntegrityTestResults */

/* START_OF_SYMBOL_DEFINITION _decode_DataIntegrityTestResults */
/**
 * @summary Decodes an ASN.1 element into a(n) DataIntegrityTestResults
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DataIntegrityTestResults} The decoded data structure.
 */
export function _decode_DataIntegrityTestResults(el: _Element) {
    if (!_cached_decoder_for_DataIntegrityTestResults) {
        _cached_decoder_for_DataIntegrityTestResults = $._decode_inextensible_choice<DataIntegrityTestResults>(
            {
                'CONTEXT 0': [
                    'testResult',
                    $._decode_implicit<DataIntegrityTestResults_testResult>(
                        () => _decode_DataIntegrityTestResults_testResult
                    ),
                ],
                'CONTEXT 4': [
                    'timeoutPeriod',
                    $._decode_explicit<TimeoutPeriod>(
                        () => _decode_TimeoutPeriod
                    ),
                ],
                'CONTEXT 5': [
                    'testThreshold',
                    $._decode_explicit<TestThreshold>(
                        () => _decode_TestThreshold
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_DataIntegrityTestResults(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DataIntegrityTestResults */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DataIntegrityTestResults */
let _cached_encoder_for_DataIntegrityTestResults: $.ASN1Encoder<DataIntegrityTestResults> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DataIntegrityTestResults */

/* START_OF_SYMBOL_DEFINITION _encode_DataIntegrityTestResults */
/**
 * @summary Encodes a(n) DataIntegrityTestResults into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DataIntegrityTestResults, encoded as an ASN.1 Element.
 */
export function _encode_DataIntegrityTestResults(
    value: DataIntegrityTestResults,
    elGetter: $.ASN1Encoder<DataIntegrityTestResults>
) {
    if (!_cached_encoder_for_DataIntegrityTestResults) {
        _cached_encoder_for_DataIntegrityTestResults = $._encode_choice<DataIntegrityTestResults>(
            {
                testResult: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_DataIntegrityTestResults_testResult,
                    $.BER
                ),
                timeoutPeriod: $._encode_explicit(
                    _TagClass.context,
                    4,
                    () => _encode_TimeoutPeriod,
                    $.BER
                ),
                testThreshold: $._encode_explicit(
                    _TagClass.context,
                    5,
                    () => _encode_TestThreshold,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_DataIntegrityTestResults(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DataIntegrityTestResults */

/* eslint-enable */
