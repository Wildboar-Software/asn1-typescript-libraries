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
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip';
import {
    InvocationId,
    _decode_InvocationId,
    _encode_InvocationId,
} from '../Test-ASN1Module/InvocationId.ta.mjs';
/**
 * @summary TestInvocationId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TestInvocationId  ::=  CHOICE {
 *   tOName        [0]  ObjectInstance,
 *   invocationId  [1]  InvocationId
 * }
 * ```
 */
export type TestInvocationId =
    | { tOName: ObjectInstance } /* CHOICE_ALT_ROOT */
    | { invocationId: InvocationId } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_TestInvocationId: $.ASN1Decoder<TestInvocationId> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TestInvocationId
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TestInvocationId} The decoded data structure.
 */
export function _decode_TestInvocationId(el: _Element): TestInvocationId {
    if (!_cached_decoder_for_TestInvocationId) {
        _cached_decoder_for_TestInvocationId = $._decode_inextensible_choice<TestInvocationId>(
            {
                'CONTEXT 0': [
                    'tOName',
                    $._decode_explicit<ObjectInstance>(
                        () => _decode_ObjectInstance
                    ),
                ],
                'CONTEXT 1': [
                    'invocationId',
                    $._decode_implicit<InvocationId>(
                        () => _decode_InvocationId
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_TestInvocationId(el);
}

let _cached_encoder_for_TestInvocationId: $.ASN1Encoder<TestInvocationId> | null = null;

/**
 * @summary Encodes a(n) TestInvocationId into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TestInvocationId, encoded as an ASN.1 Element.
 */
export function _encode_TestInvocationId(
    value: TestInvocationId,
    elGetter: $.ASN1Encoder<TestInvocationId>
): _Element {
    if (!_cached_encoder_for_TestInvocationId) {
        _cached_encoder_for_TestInvocationId = $._encode_choice<TestInvocationId>(
            {
                tOName: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => _encode_ObjectInstance,
                    $.BER
                ),
                invocationId: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_InvocationId,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_TestInvocationId(value, elGetter);
}


/* eslint-enable */
