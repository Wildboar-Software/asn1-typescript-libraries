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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TestResultEnrol, _decode_TestResultEnrol, _encode_TestResultEnrol } from "../MachineReadableBiometricTestingAndReportingTestReport/TestResultEnrol.ta.mjs";
// export { TestResultEnrol, _decode_TestResultEnrol, _encode_TestResultEnrol } from "../MachineReadableBiometricTestingAndReportingTestReport/TestResultEnrol.ta.mjs";
import { TestResultAcquire, _decode_TestResultAcquire, _encode_TestResultAcquire } from "../MachineReadableBiometricTestingAndReportingTestReport/TestResultAcquire.ta.mjs";
// export { TestResultAcquire, _decode_TestResultAcquire, _encode_TestResultAcquire } from "../MachineReadableBiometricTestingAndReportingTestReport/TestResultAcquire.ta.mjs";
import { TestResultVerify, _decode_TestResultVerify, _encode_TestResultVerify } from "../MachineReadableBiometricTestingAndReportingTestReport/TestResultVerify.ta.mjs";
// export { TestResultVerify, _decode_TestResultVerify, _encode_TestResultVerify } from "../MachineReadableBiometricTestingAndReportingTestReport/TestResultVerify.ta.mjs";
import { TestResultIdentify, _decode_TestResultIdentify, _encode_TestResultIdentify } from "../MachineReadableBiometricTestingAndReportingTestReport/TestResultIdentify.ta.mjs";
// export { TestResultIdentify, _decode_TestResultIdentify, _encode_TestResultIdentify } from "../MachineReadableBiometricTestingAndReportingTestReport/TestResultIdentify.ta.mjs";


/**
 * @summary TestResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TestResult  ::=  CHOICE {
 *     testResultEnrol     TestResultEnrol, -- enrolment
 *     testResultAcquire   TestResultAcquire, -- acquisition
 *     testResultVerify    TestResultVerify, -- verification
 *     testResultIdentify  TestResultIdentify -- identification
 * }
 * ```
 */
export
type TestResult =
    { testResultEnrol: TestResultEnrol } /* CHOICE_ALT_ROOT */
    | { testResultAcquire: TestResultAcquire } /* CHOICE_ALT_ROOT */
    | { testResultVerify: TestResultVerify } /* CHOICE_ALT_ROOT */
    | { testResultIdentify: TestResultIdentify } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_TestResult: $.ASN1Decoder<TestResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TestResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TestResult (el: _Element): TestResult {
    if (!_cached_decoder_for_TestResult) { _cached_decoder_for_TestResult = $._decode_inextensible_choice<TestResult>({
    "CONTEXT 0": [ "testResultEnrol", _decode_TestResultEnrol ],
    "CONTEXT 1": [ "testResultAcquire", _decode_TestResultAcquire ],
    "CONTEXT 2": [ "testResultVerify", _decode_TestResultVerify ],
    "CONTEXT 3": [ "testResultIdentify", _decode_TestResultIdentify ]
}); }
    return _cached_decoder_for_TestResult(el);
}

let _cached_encoder_for_TestResult: $.ASN1Encoder<TestResult> | null = null;

/**
 * @summary Encodes a(n) TestResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TestResult, encoded as an ASN.1 Element.
 */
export
function _encode_TestResult (value: TestResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TestResult) { _cached_encoder_for_TestResult = $._encode_choice<TestResult>({
    "testResultEnrol": $._encode_implicit(_TagClass.context, 0, () => _encode_TestResultEnrol, $.BER),
    "testResultAcquire": $._encode_implicit(_TagClass.context, 1, () => _encode_TestResultAcquire, $.BER),
    "testResultVerify": $._encode_implicit(_TagClass.context, 2, () => _encode_TestResultVerify, $.BER),
    "testResultIdentify": $._encode_implicit(_TagClass.context, 3, () => _encode_TestResultIdentify, $.BER),
}, $.BER); }
    return _cached_encoder_for_TestResult(value, elGetter);
}


/* eslint-enable */
