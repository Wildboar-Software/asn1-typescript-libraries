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
    TestTerminateError_Item,
    _decode_TestTerminateError_Item,
    _encode_TestTerminateError_Item,
} from '../Test-ASN1Module/TestTerminateError-Item.ta.mjs';
/**
 * @summary TestTerminateError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TestTerminateError  ::=
 *   SET OF
 *     CHOICE {testTerminateSuccess  [0]  TestInvocationId,
 *             testTerminateFailure  [1]  TestInvocationId}
 * ```
 */
export type TestTerminateError = TestTerminateError_Item[]; // SetOfType

let _cached_decoder_for_TestTerminateError: $.ASN1Decoder<TestTerminateError> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TestTerminateError
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TestTerminateError} The decoded data structure.
 */
export function _decode_TestTerminateError(el: _Element) {
    if (!_cached_decoder_for_TestTerminateError) {
        _cached_decoder_for_TestTerminateError = $._decodeSetOf<TestTerminateError_Item>(
            () => _decode_TestTerminateError_Item
        );
    }
    return _cached_decoder_for_TestTerminateError(el);
}

let _cached_encoder_for_TestTerminateError: $.ASN1Encoder<TestTerminateError> | null = null;

/**
 * @summary Encodes a(n) TestTerminateError into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TestTerminateError, encoded as an ASN.1 Element.
 */
export function _encode_TestTerminateError(
    value: TestTerminateError,
    elGetter: $.ASN1Encoder<TestTerminateError>
) {
    if (!_cached_encoder_for_TestTerminateError) {
        _cached_encoder_for_TestTerminateError = $._encodeSetOf<TestTerminateError_Item>(
            () => _encode_TestTerminateError_Item,
            $.BER
        );
    }
    return _cached_encoder_for_TestTerminateError(value, elGetter);
}


/* eslint-enable */
