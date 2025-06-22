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
    TestSessionId,
    _decode_TestSessionId,
    _encode_TestSessionId,
} from '../Test-ASN1Module/TestSessionId.ta.mjs';
import {
    TestInvocationId,
    _decode_TestInvocationId,
    _encode_TestInvocationId,
} from '../Test-ASN1Module/TestInvocationId.ta.mjs';
/**
 * @summary IndicatedTests
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IndicatedTests  ::=  CHOICE {
 *   testSessionId     [0]  TestSessionId,
 *   testInvocationId  [1]  SET OF TestInvocationId
 * }
 * ```
 */
export type IndicatedTests =
    | { testSessionId: TestSessionId } /* CHOICE_ALT_ROOT */
    | { testInvocationId: TestInvocationId[] } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_IndicatedTests: $.ASN1Decoder<IndicatedTests> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IndicatedTests
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {IndicatedTests} The decoded data structure.
 */
export function _decode_IndicatedTests(el: _Element) {
    if (!_cached_decoder_for_IndicatedTests) {
        _cached_decoder_for_IndicatedTests = $._decode_inextensible_choice<IndicatedTests>(
            {
                'CONTEXT 0': [
                    'testSessionId',
                    $._decode_implicit<TestSessionId>(
                        () => _decode_TestSessionId
                    ),
                ],
                'CONTEXT 1': [
                    'testInvocationId',
                    $._decode_implicit<TestInvocationId[]>(() =>
                        $._decodeSetOf<TestInvocationId>(
                            () => _decode_TestInvocationId
                        )
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_IndicatedTests(el);
}

let _cached_encoder_for_IndicatedTests: $.ASN1Encoder<IndicatedTests> | null = null;

/**
 * @summary Encodes a(n) IndicatedTests into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IndicatedTests, encoded as an ASN.1 Element.
 */
export function _encode_IndicatedTests(
    value: IndicatedTests,
    elGetter: $.ASN1Encoder<IndicatedTests>
) {
    if (!_cached_encoder_for_IndicatedTests) {
        _cached_encoder_for_IndicatedTests = $._encode_choice<IndicatedTests>(
            {
                testSessionId: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_TestSessionId,
                    $.BER
                ),
                testInvocationId: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () =>
                        $._encodeSetOf<TestInvocationId>(
                            () => _encode_TestInvocationId,
                            $.BER
                        ),
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_IndicatedTests(value, elGetter);
}


/* eslint-enable */
