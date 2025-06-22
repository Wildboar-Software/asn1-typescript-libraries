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
    TestSessionId,
    _decode_TestSessionId,
    _encode_TestSessionId,
} from '../Test-ASN1Module/TestSessionId.ta.mjs';
/**
 * @summary NoSuchTestSessionId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NoSuchTestSessionId  ::=  TestSessionId
 * ```
 */
export type NoSuchTestSessionId = TestSessionId; // DefinedType

let _cached_decoder_for_NoSuchTestSessionId: $.ASN1Decoder<NoSuchTestSessionId> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NoSuchTestSessionId
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NoSuchTestSessionId} The decoded data structure.
 */
export function _decode_NoSuchTestSessionId(el: _Element) {
    if (!_cached_decoder_for_NoSuchTestSessionId) {
        _cached_decoder_for_NoSuchTestSessionId = _decode_TestSessionId;
    }
    return _cached_decoder_for_NoSuchTestSessionId(el);
}

let _cached_encoder_for_NoSuchTestSessionId: $.ASN1Encoder<NoSuchTestSessionId> | null = null;

/**
 * @summary Encodes a(n) NoSuchTestSessionId into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NoSuchTestSessionId, encoded as an ASN.1 Element.
 */
export function _encode_NoSuchTestSessionId(
    value: NoSuchTestSessionId,
    elGetter: $.ASN1Encoder<NoSuchTestSessionId>
) {
    if (!_cached_encoder_for_NoSuchTestSessionId) {
        _cached_encoder_for_NoSuchTestSessionId = _encode_TestSessionId;
    }
    return _cached_encoder_for_NoSuchTestSessionId(value, elGetter);
}


/* eslint-enable */
