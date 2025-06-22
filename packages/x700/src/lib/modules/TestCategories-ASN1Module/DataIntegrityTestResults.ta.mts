/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from '@wildboar/asn1/functional';
import {
    DataIntegrityTestResults_testResult,
    _decode_DataIntegrityTestResults_testResult,
    _encode_DataIntegrityTestResults_testResult,
} from '../TestCategories-ASN1Module/DataIntegrityTestResults-testResult.ta.mjs';
import {
    TimeoutPeriod,
    _decode_TimeoutPeriod,
    _encode_TimeoutPeriod,
} from '../Test-ASN1Module/TimeoutPeriod.ta.mjs';
import {
    TestThreshold,
    _decode_TestThreshold,
    _encode_TestThreshold,
} from '../TestCategories-ASN1Module/TestThreshold.ta.mjs';
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

let _cached_decoder_for_DataIntegrityTestResults: $.ASN1Decoder<DataIntegrityTestResults> | null = null;

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

let _cached_encoder_for_DataIntegrityTestResults: $.ASN1Encoder<DataIntegrityTestResults> | null = null;

/**
 * @summary Encodes a(n) DataIntegrityTestResults into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
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


/* eslint-enable */
