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
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta.mjs';
/**
 * @summary ThreadId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ThreadId  ::=  ObjectInstance
 * ```
 */
export type ThreadId = ObjectInstance; // DefinedType

let _cached_decoder_for_ThreadId: $.ASN1Decoder<ThreadId> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ThreadId
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ThreadId} The decoded data structure.
 */
export function _decode_ThreadId(el: _Element) {
    if (!_cached_decoder_for_ThreadId) {
        _cached_decoder_for_ThreadId = _decode_ObjectInstance;
    }
    return _cached_decoder_for_ThreadId(el);
}

let _cached_encoder_for_ThreadId: $.ASN1Encoder<ThreadId> | null = null;

/**
 * @summary Encodes a(n) ThreadId into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ThreadId, encoded as an ASN.1 Element.
 */
export function _encode_ThreadId(
    value: ThreadId,
    elGetter: $.ASN1Encoder<ThreadId>
) {
    if (!_cached_encoder_for_ThreadId) {
        _cached_encoder_for_ThreadId = _encode_ObjectInstance;
    }
    return _cached_encoder_for_ThreadId(value, elGetter);
}


/* eslint-enable */
