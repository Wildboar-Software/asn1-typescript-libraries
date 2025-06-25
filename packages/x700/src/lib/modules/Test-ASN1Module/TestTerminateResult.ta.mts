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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    TestInvocationId,
    _decode_TestInvocationId,
    _encode_TestInvocationId,
} from '../Test-ASN1Module/TestInvocationId.ta.mjs';
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

let _cached_decoder_for_TestTerminateResult: $.ASN1Decoder<TestTerminateResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TestTerminateResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TestTerminateResult} The decoded data structure.
 */
export function _decode_TestTerminateResult(el: _Element): TestTerminateResult {
    if (!_cached_decoder_for_TestTerminateResult) {
        _cached_decoder_for_TestTerminateResult = $._decodeSetOf<TestInvocationId>(
            () => _decode_TestInvocationId
        );
    }
    return _cached_decoder_for_TestTerminateResult(el);
}

let _cached_encoder_for_TestTerminateResult: $.ASN1Encoder<TestTerminateResult> | null = null;

/**
 * @summary Encodes a(n) TestTerminateResult into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TestTerminateResult, encoded as an ASN.1 Element.
 */
export function _encode_TestTerminateResult(
    value: TestTerminateResult,
    elGetter: $.ASN1Encoder<TestTerminateResult>
): _Element {
    if (!_cached_encoder_for_TestTerminateResult) {
        _cached_encoder_for_TestTerminateResult = $._encodeSetOf<TestInvocationId>(
            () => _encode_TestInvocationId,
            $.BER
        );
    }
    return _cached_encoder_for_TestTerminateResult(value, elGetter);
}


/* eslint-enable */
