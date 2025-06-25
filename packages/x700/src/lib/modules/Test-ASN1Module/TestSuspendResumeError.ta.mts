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
    TestSuspendResumeError_Item,
    _decode_TestSuspendResumeError_Item,
    _encode_TestSuspendResumeError_Item,
} from '../Test-ASN1Module/TestSuspendResumeError-Item.ta.mjs';
/**
 * @summary TestSuspendResumeError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TestSuspendResumeError  ::=
 *   SET OF
 *     CHOICE {testSuspendResumeSuccess  [0]  TestSuspendResumeElement,
 *             testSuspendResumeFailure  [1]  TestSuspendResumeElement}
 * ```
 */
export type TestSuspendResumeError = TestSuspendResumeError_Item[]; // SetOfType

let _cached_decoder_for_TestSuspendResumeError: $.ASN1Decoder<TestSuspendResumeError> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TestSuspendResumeError
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TestSuspendResumeError} The decoded data structure.
 */
export function _decode_TestSuspendResumeError(el: _Element): TestSuspendResumeError {
    if (!_cached_decoder_for_TestSuspendResumeError) {
        _cached_decoder_for_TestSuspendResumeError = $._decodeSetOf<TestSuspendResumeError_Item>(
            () => _decode_TestSuspendResumeError_Item
        );
    }
    return _cached_decoder_for_TestSuspendResumeError(el);
}

let _cached_encoder_for_TestSuspendResumeError: $.ASN1Encoder<TestSuspendResumeError> | null = null;

/**
 * @summary Encodes a(n) TestSuspendResumeError into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TestSuspendResumeError, encoded as an ASN.1 Element.
 */
export function _encode_TestSuspendResumeError(
    value: TestSuspendResumeError,
    elGetter: $.ASN1Encoder<TestSuspendResumeError>
): _Element {
    if (!_cached_encoder_for_TestSuspendResumeError) {
        _cached_encoder_for_TestSuspendResumeError = $._encodeSetOf<TestSuspendResumeError_Item>(
            () => _encode_TestSuspendResumeError_Item,
            $.BER
        );
    }
    return _cached_encoder_for_TestSuspendResumeError(value, elGetter);
}


/* eslint-enable */
