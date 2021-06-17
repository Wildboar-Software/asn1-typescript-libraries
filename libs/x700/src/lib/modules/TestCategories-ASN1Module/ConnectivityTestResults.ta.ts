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

/* START_OF_SYMBOL_DEFINITION ConnectivityTestResults */
/**
 * @summary ConnectivityTestResults
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ConnectivityTestResults  ::=  CHOICE {
 *   establishmentTime  [0]  Timespec,
 *   timeoutPeriod      [1]  TimeoutPeriod,
 *   testThreshold      [2] EXPLICIT TestThreshold,
 *   specificError      [3]  OBJECT IDENTIFIER
 * }
 * ```
 */
export type ConnectivityTestResults =
    | { establishmentTime: Timespec } /* CHOICE_ALT_ROOT */
    | { timeoutPeriod: TimeoutPeriod } /* CHOICE_ALT_ROOT */
    | { testThreshold: TestThreshold } /* CHOICE_ALT_ROOT */
    | { specificError: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION ConnectivityTestResults */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ConnectivityTestResults */
let _cached_decoder_for_ConnectivityTestResults: $.ASN1Decoder<ConnectivityTestResults> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ConnectivityTestResults */

/* START_OF_SYMBOL_DEFINITION _decode_ConnectivityTestResults */
/**
 * @summary Decodes an ASN.1 element into a(n) ConnectivityTestResults
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ConnectivityTestResults} The decoded data structure.
 */
export function _decode_ConnectivityTestResults(el: _Element) {
    if (!_cached_decoder_for_ConnectivityTestResults) {
        _cached_decoder_for_ConnectivityTestResults = $._decode_inextensible_choice<ConnectivityTestResults>(
            {
                'CONTEXT 0': [
                    'establishmentTime',
                    $._decode_explicit<Timespec>(() => _decode_Timespec),
                ],
                'CONTEXT 1': [
                    'timeoutPeriod',
                    $._decode_explicit<TimeoutPeriod>(
                        () => _decode_TimeoutPeriod
                    ),
                ],
                'CONTEXT 2': [
                    'testThreshold',
                    $._decode_explicit<TestThreshold>(
                        () => _decode_TestThreshold
                    ),
                ],
                'CONTEXT 3': [
                    'specificError',
                    $._decode_implicit<OBJECT_IDENTIFIER>(
                        () => $._decodeObjectIdentifier
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_ConnectivityTestResults(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ConnectivityTestResults */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ConnectivityTestResults */
let _cached_encoder_for_ConnectivityTestResults: $.ASN1Encoder<ConnectivityTestResults> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ConnectivityTestResults */

/* START_OF_SYMBOL_DEFINITION _encode_ConnectivityTestResults */
/**
 * @summary Encodes a(n) ConnectivityTestResults into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConnectivityTestResults, encoded as an ASN.1 Element.
 */
export function _encode_ConnectivityTestResults(
    value: ConnectivityTestResults,
    elGetter: $.ASN1Encoder<ConnectivityTestResults>
) {
    if (!_cached_encoder_for_ConnectivityTestResults) {
        _cached_encoder_for_ConnectivityTestResults = $._encode_choice<ConnectivityTestResults>(
            {
                establishmentTime: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => _encode_Timespec,
                    $.BER
                ),
                timeoutPeriod: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () => _encode_TimeoutPeriod,
                    $.BER
                ),
                testThreshold: $._encode_explicit(
                    _TagClass.context,
                    2,
                    () => _encode_TestThreshold,
                    $.BER
                ),
                specificError: $._encode_implicit(
                    _TagClass.context,
                    3,
                    () => $._encodeObjectIdentifier,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_ConnectivityTestResults(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ConnectivityTestResults */

/* eslint-enable */
