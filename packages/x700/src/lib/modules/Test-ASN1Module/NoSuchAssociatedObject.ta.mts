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
/**
 * @summary NoSuchAssociatedObject
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NoSuchAssociatedObject  ::=  SET OF ObjectInstance
 * ```
 */
export type NoSuchAssociatedObject = ObjectInstance[]; // SetOfType

let _cached_decoder_for_NoSuchAssociatedObject: $.ASN1Decoder<NoSuchAssociatedObject> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NoSuchAssociatedObject
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NoSuchAssociatedObject} The decoded data structure.
 */
export function _decode_NoSuchAssociatedObject(el: _Element): NoSuchAssociatedObject {
    if (!_cached_decoder_for_NoSuchAssociatedObject) {
        _cached_decoder_for_NoSuchAssociatedObject = $._decodeSetOf<ObjectInstance>(
            () => _decode_ObjectInstance
        );
    }
    return _cached_decoder_for_NoSuchAssociatedObject(el);
}

let _cached_encoder_for_NoSuchAssociatedObject: $.ASN1Encoder<NoSuchAssociatedObject> | null = null;

/**
 * @summary Encodes a(n) NoSuchAssociatedObject into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NoSuchAssociatedObject, encoded as an ASN.1 Element.
 */
export function _encode_NoSuchAssociatedObject(
    value: NoSuchAssociatedObject,
    elGetter: $.ASN1Encoder<NoSuchAssociatedObject>
): _Element {
    if (!_cached_encoder_for_NoSuchAssociatedObject) {
        _cached_encoder_for_NoSuchAssociatedObject = $._encodeSetOf<ObjectInstance>(
            () => _encode_ObjectInstance,
            $.BER
        );
    }
    return _cached_encoder_for_NoSuchAssociatedObject(value, elGetter);
}


/* eslint-enable */
