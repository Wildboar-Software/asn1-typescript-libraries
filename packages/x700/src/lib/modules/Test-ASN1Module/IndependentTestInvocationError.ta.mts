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
    IndependentTestInvocationError_Item,
    _decode_IndependentTestInvocationError_Item,
    _encode_IndependentTestInvocationError_Item,
} from '../Test-ASN1Module/IndependentTestInvocationError-Item.ta.mjs';
/**
 * @summary IndependentTestInvocationError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IndependentTestInvocationError  ::=
 *   SEQUENCE OF
 *     CHOICE {testInstanceCreated  [0]  IndependentTestResponse,
 *             tONotCreated         TONotCreated}
 * ```
 */
export type IndependentTestInvocationError = IndependentTestInvocationError_Item[]; // SequenceOfType

let _cached_decoder_for_IndependentTestInvocationError: $.ASN1Decoder<IndependentTestInvocationError> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IndependentTestInvocationError
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {IndependentTestInvocationError} The decoded data structure.
 */
export function _decode_IndependentTestInvocationError(el: _Element): IndependentTestInvocationError {
    if (!_cached_decoder_for_IndependentTestInvocationError) {
        _cached_decoder_for_IndependentTestInvocationError = $._decodeSequenceOf<IndependentTestInvocationError_Item>(
            () => _decode_IndependentTestInvocationError_Item
        );
    }
    return _cached_decoder_for_IndependentTestInvocationError(el);
}

let _cached_encoder_for_IndependentTestInvocationError: $.ASN1Encoder<IndependentTestInvocationError> | null = null;

/**
 * @summary Encodes a(n) IndependentTestInvocationError into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IndependentTestInvocationError, encoded as an ASN.1 Element.
 */
export function _encode_IndependentTestInvocationError(
    value: IndependentTestInvocationError,
    elGetter: $.ASN1Encoder<IndependentTestInvocationError>
): _Element {
    if (!_cached_encoder_for_IndependentTestInvocationError) {
        _cached_encoder_for_IndependentTestInvocationError = $._encodeSequenceOf<IndependentTestInvocationError_Item>(
            () => _encode_IndependentTestInvocationError_Item,
            $.BER
        );
    }
    return _cached_encoder_for_IndependentTestInvocationError(value, elGetter);
}


/* eslint-enable */
