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
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    TestInvocationId,
    _decode_TestInvocationId,
    _encode_TestInvocationId,
} from '../Test-ASN1Module/TestInvocationId.ta.mjs';
/* START_OF_SYMBOL_DEFINITION TestTerminateError_Item */
/**
 * @summary TestTerminateError_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TestTerminateError-Item ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type TestTerminateError_Item =
    | { testTerminateSuccess: TestInvocationId } /* CHOICE_ALT_ROOT */
    | { testTerminateFailure: TestInvocationId } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION TestTerminateError_Item */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TestTerminateError_Item */
let _cached_decoder_for_TestTerminateError_Item: $.ASN1Decoder<TestTerminateError_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TestTerminateError_Item */

/* START_OF_SYMBOL_DEFINITION _decode_TestTerminateError_Item */
/**
 * @summary Decodes an ASN.1 element into a(n) TestTerminateError_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TestTerminateError_Item} The decoded data structure.
 */
export function _decode_TestTerminateError_Item(el: _Element) {
    if (!_cached_decoder_for_TestTerminateError_Item) {
        _cached_decoder_for_TestTerminateError_Item = $._decode_inextensible_choice<TestTerminateError_Item>(
            {
                'CONTEXT 0': [
                    'testTerminateSuccess',
                    $._decode_explicit<TestInvocationId>(
                        () => _decode_TestInvocationId
                    ),
                ],
                'CONTEXT 1': [
                    'testTerminateFailure',
                    $._decode_explicit<TestInvocationId>(
                        () => _decode_TestInvocationId
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_TestTerminateError_Item(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TestTerminateError_Item */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TestTerminateError_Item */
let _cached_encoder_for_TestTerminateError_Item: $.ASN1Encoder<TestTerminateError_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TestTerminateError_Item */

/* START_OF_SYMBOL_DEFINITION _encode_TestTerminateError_Item */
/**
 * @summary Encodes a(n) TestTerminateError_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TestTerminateError_Item, encoded as an ASN.1 Element.
 */
export function _encode_TestTerminateError_Item(
    value: TestTerminateError_Item,
    elGetter: $.ASN1Encoder<TestTerminateError_Item>
) {
    if (!_cached_encoder_for_TestTerminateError_Item) {
        _cached_encoder_for_TestTerminateError_Item = $._encode_choice<TestTerminateError_Item>(
            {
                testTerminateSuccess: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => _encode_TestInvocationId,
                    $.BER
                ),
                testTerminateFailure: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () => _encode_TestInvocationId,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_TestTerminateError_Item(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TestTerminateError_Item */

/* eslint-enable */
