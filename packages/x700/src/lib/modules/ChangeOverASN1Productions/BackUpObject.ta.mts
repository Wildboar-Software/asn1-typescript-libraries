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
    OptionalObject,
    _decode_OptionalObject,
    _encode_OptionalObject,
} from '../ChangeOverASN1Productions/OptionalObject.ta.mjs';
/**
 * @summary BackUpObject
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BackUpObject  ::=  OptionalObject
 * ```
 */
export type BackUpObject = OptionalObject; // DefinedType

let _cached_decoder_for_BackUpObject: $.ASN1Decoder<BackUpObject> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BackUpObject
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BackUpObject} The decoded data structure.
 */
export function _decode_BackUpObject(el: _Element): BackUpObject {
    if (!_cached_decoder_for_BackUpObject) {
        _cached_decoder_for_BackUpObject = _decode_OptionalObject;
    }
    return _cached_decoder_for_BackUpObject(el);
}

let _cached_encoder_for_BackUpObject: $.ASN1Encoder<BackUpObject> | null = null;

/**
 * @summary Encodes a(n) BackUpObject into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BackUpObject, encoded as an ASN.1 Element.
 */
export function _encode_BackUpObject(
    value: BackUpObject,
    elGetter: $.ASN1Encoder<BackUpObject>
): _Element {
    if (!_cached_encoder_for_BackUpObject) {
        _cached_encoder_for_BackUpObject = _encode_OptionalObject;
    }
    return _cached_encoder_for_BackUpObject(value, elGetter);
}


/* eslint-enable */
