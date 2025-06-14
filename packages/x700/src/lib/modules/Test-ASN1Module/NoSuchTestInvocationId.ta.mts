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
/* START_OF_SYMBOL_DEFINITION NoSuchTestInvocationId */
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
/* END_OF_SYMBOL_DEFINITION NoSuchTestInvocationId */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_NoSuchTestInvocationId */
let _cached_decoder_for_NoSuchTestInvocationId: $.ASN1Decoder<NoSuchTestInvocationId> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_NoSuchTestInvocationId */

/* START_OF_SYMBOL_DEFINITION _decode_NoSuchTestInvocationId */
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
/* END_OF_SYMBOL_DEFINITION _decode_NoSuchTestInvocationId */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_NoSuchTestInvocationId */
let _cached_encoder_for_NoSuchTestInvocationId: $.ASN1Encoder<NoSuchTestInvocationId> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_NoSuchTestInvocationId */

/* START_OF_SYMBOL_DEFINITION _encode_NoSuchTestInvocationId */
/**
 * @summary Encodes a(n) NoSuchTestInvocationId into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
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

/* END_OF_SYMBOL_DEFINITION _encode_NoSuchTestInvocationId */

/* eslint-enable */
