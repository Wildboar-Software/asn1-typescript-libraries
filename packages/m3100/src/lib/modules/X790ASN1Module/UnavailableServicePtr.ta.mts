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
    RelatedObject,
    _decode_RelatedObject,
    _encode_RelatedObject,
} from '../X790ASN1Module/RelatedObject.ta.mjs';

/**
 * @summary UnavailableServicePtr
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UnavailableServicePtr  ::=  RelatedObject
 * ```
 */
export type UnavailableServicePtr = RelatedObject; // DefinedType


let _cached_decoder_for_UnavailableServicePtr: $.ASN1Decoder<UnavailableServicePtr> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) UnavailableServicePtr
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UnavailableServicePtr} The decoded data structure.
 */
export function _decode_UnavailableServicePtr(el: _Element) {
    if (!_cached_decoder_for_UnavailableServicePtr) {
        _cached_decoder_for_UnavailableServicePtr = _decode_RelatedObject;
    }
    return _cached_decoder_for_UnavailableServicePtr(el);
}


let _cached_encoder_for_UnavailableServicePtr: $.ASN1Encoder<UnavailableServicePtr> | null = null;


/**
 * @summary Encodes a(n) UnavailableServicePtr into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UnavailableServicePtr, encoded as an ASN.1 Element.
 */
export function _encode_UnavailableServicePtr(
    value: UnavailableServicePtr,
    elGetter: $.ASN1Encoder<UnavailableServicePtr>
) {
    if (!_cached_encoder_for_UnavailableServicePtr) {
        _cached_encoder_for_UnavailableServicePtr = _encode_RelatedObject;
    }
    return _cached_encoder_for_UnavailableServicePtr(value, elGetter);
}


/* eslint-enable */
