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
 * @summary TestSuspendResumeError_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TestSuspendResumeError-Item ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type TestSuspendResumeError_Item =
    | {
          testSuspendResumeSuccess: TestSuspendResumeElement;
      } /* CHOICE_ALT_ROOT */
    | {
          testSuspendResumeFailure: TestSuspendResumeElement;
      } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_TestSuspendResumeError_Item: $.ASN1Decoder<TestSuspendResumeError_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TestSuspendResumeError_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TestSuspendResumeError_Item} The decoded data structure.
 */
export function _decode_TestSuspendResumeError_Item(el: _Element): TestSuspendResumeError_Item {
    if (!_cached_decoder_for_TestSuspendResumeError_Item) {
        _cached_decoder_for_TestSuspendResumeError_Item = $._decode_inextensible_choice<TestSuspendResumeError_Item>(
            {
                'CONTEXT 0': [
                    'testSuspendResumeSuccess',
                    $._decode_implicit<TestSuspendResumeElement>(
                        () => _decode_TestSuspendResumeElement
                    ),
                ],
                'CONTEXT 1': [
                    'testSuspendResumeFailure',
                    $._decode_implicit<TestSuspendResumeElement>(
                        () => _decode_TestSuspendResumeElement
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_TestSuspendResumeError_Item(el);
}

let _cached_encoder_for_TestSuspendResumeError_Item: $.ASN1Encoder<TestSuspendResumeError_Item> | null = null;

/**
 * @summary Encodes a(n) TestSuspendResumeError_Item into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TestSuspendResumeError_Item, encoded as an ASN.1 Element.
 */
export function _encode_TestSuspendResumeError_Item(
    value: TestSuspendResumeError_Item,
    elGetter: $.ASN1Encoder<TestSuspendResumeError_Item>
): _Element {
    if (!_cached_encoder_for_TestSuspendResumeError_Item) {
        _cached_encoder_for_TestSuspendResumeError_Item = $._encode_choice<TestSuspendResumeError_Item>(
            {
                testSuspendResumeSuccess: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_TestSuspendResumeElement,
                    $.BER
                ),
                testSuspendResumeFailure: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_TestSuspendResumeElement,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_TestSuspendResumeError_Item(value, elGetter);
}


/* eslint-enable */
