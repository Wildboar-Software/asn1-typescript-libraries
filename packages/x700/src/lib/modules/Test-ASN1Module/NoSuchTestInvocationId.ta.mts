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
    TestInvocationId,
    _decode_TestInvocationId,
    _encode_TestInvocationId,
} from '../Test-ASN1Module/TestInvocationId.ta.mjs';
/**
 * @summary NoSuchTestInvocationId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NoSuchTestInvocationId  ::=  TestInvocationId
 * ```
 */
export type NoSuchTestInvocationId = TestInvocationId; // DefinedType

let _cached_decoder_for_NoSuchTestInvocationId: $.ASN1Decoder<NoSuchTestInvocationId> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NoSuchTestInvocationId
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NoSuchTestInvocationId} The decoded data structure.
 */
export function _decode_NoSuchTestInvocationId(el: _Element) {
    if (!_cached_decoder_for_NoSuchTestInvocationId) {
        _cached_decoder_for_NoSuchTestInvocationId = _decode_TestInvocationId;
    }
    return _cached_decoder_for_NoSuchTestInvocationId(el);
}

let _cached_encoder_for_NoSuchTestInvocationId: $.ASN1Encoder<NoSuchTestInvocationId> | null = null;

/**
 * @summary Encodes a(n) NoSuchTestInvocationId into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NoSuchTestInvocationId, encoded as an ASN.1 Element.
 */
export function _encode_NoSuchTestInvocationId(
    value: NoSuchTestInvocationId,
    elGetter: $.ASN1Encoder<NoSuchTestInvocationId>
) {
    if (!_cached_encoder_for_NoSuchTestInvocationId) {
        _cached_encoder_for_NoSuchTestInvocationId = _encode_TestInvocationId;
    }
    return _cached_encoder_for_NoSuchTestInvocationId(value, elGetter);
}


/* eslint-enable */
