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
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta.mjs';
/**
 * @summary PrimaryObject
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PrimaryObject  ::=  ObjectInstance
 * ```
 */
export type PrimaryObject = ObjectInstance; // DefinedType

let _cached_decoder_for_PrimaryObject: $.ASN1Decoder<PrimaryObject> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PrimaryObject
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PrimaryObject} The decoded data structure.
 */
export function _decode_PrimaryObject(el: _Element) {
    if (!_cached_decoder_for_PrimaryObject) {
        _cached_decoder_for_PrimaryObject = _decode_ObjectInstance;
    }
    return _cached_decoder_for_PrimaryObject(el);
}

let _cached_encoder_for_PrimaryObject: $.ASN1Encoder<PrimaryObject> | null = null;

/**
 * @summary Encodes a(n) PrimaryObject into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PrimaryObject, encoded as an ASN.1 Element.
 */
export function _encode_PrimaryObject(
    value: PrimaryObject,
    elGetter: $.ASN1Encoder<PrimaryObject>
) {
    if (!_cached_encoder_for_PrimaryObject) {
        _cached_encoder_for_PrimaryObject = _encode_ObjectInstance;
    }
    return _cached_encoder_for_PrimaryObject(value, elGetter);
}


/* eslint-enable */
