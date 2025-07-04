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
 * @summary Pointer
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Pointer  ::=  ObjectInstance
 * ```
 */
export type Pointer = ObjectInstance; // DefinedType


let _cached_decoder_for_Pointer: $.ASN1Decoder<Pointer> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Pointer
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Pointer} The decoded data structure.
 */
export function _decode_Pointer(el: _Element): Pointer {
    if (!_cached_decoder_for_Pointer) {
        _cached_decoder_for_Pointer = _decode_ObjectInstance;
    }
    return _cached_decoder_for_Pointer(el);
}


let _cached_encoder_for_Pointer: $.ASN1Encoder<Pointer> | null = null;


/**
 * @summary Encodes a(n) Pointer into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Pointer, encoded as an ASN.1 Element.
 */
export function _encode_Pointer(
    value: Pointer,
    elGetter: $.ASN1Encoder<Pointer>
): _Element {
    if (!_cached_encoder_for_Pointer) {
        _cached_encoder_for_Pointer = _encode_ObjectInstance;
    }
    return _cached_encoder_for_Pointer(value, elGetter);
}


/* eslint-enable */
