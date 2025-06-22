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
    TestSuspendResumeElement,
    _decode_TestSuspendResumeElement,
    _encode_TestSuspendResumeElement,
} from '../Test-ASN1Module/TestSuspendResumeElement.ta.mjs';
/**
 * @summary TestSuspendResumeResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TestSuspendResumeResult  ::=  SET OF TestSuspendResumeElement
 * ```
 */
export type TestSuspendResumeResult = TestSuspendResumeElement[]; // SetOfType

let _cached_decoder_for_TestSuspendResumeResult: $.ASN1Decoder<TestSuspendResumeResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TestSuspendResumeResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TestSuspendResumeResult} The decoded data structure.
 */
export function _decode_TestSuspendResumeResult(el: _Element) {
    if (!_cached_decoder_for_TestSuspendResumeResult) {
        _cached_decoder_for_TestSuspendResumeResult = $._decodeSetOf<TestSuspendResumeElement>(
            () => _decode_TestSuspendResumeElement
        );
    }
    return _cached_decoder_for_TestSuspendResumeResult(el);
}

let _cached_encoder_for_TestSuspendResumeResult: $.ASN1Encoder<TestSuspendResumeResult> | null = null;

/**
 * @summary Encodes a(n) TestSuspendResumeResult into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TestSuspendResumeResult, encoded as an ASN.1 Element.
 */
export function _encode_TestSuspendResumeResult(
    value: TestSuspendResumeResult,
    elGetter: $.ASN1Encoder<TestSuspendResumeResult>
) {
    if (!_cached_encoder_for_TestSuspendResumeResult) {
        _cached_encoder_for_TestSuspendResumeResult = $._encodeSetOf<TestSuspendResumeElement>(
            () => _encode_TestSuspendResumeElement,
            $.BER
        );
    }
    return _cached_encoder_for_TestSuspendResumeResult(value, elGetter);
}


/* eslint-enable */
