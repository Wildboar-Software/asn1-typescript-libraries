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
    GdmoObjectClass,
    _decode_GdmoObjectClass,
    _encode_GdmoObjectClass,
} from '../RepertoireASN1Module/GdmoObjectClass.ta.mjs';
/**
 * @summary ManagedObjectClassRepertoireId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ManagedObjectClassRepertoireId  ::=  GdmoObjectClass
 * ```
 */
export type ManagedObjectClassRepertoireId = GdmoObjectClass; // DefinedType

let _cached_decoder_for_ManagedObjectClassRepertoireId: $.ASN1Decoder<ManagedObjectClassRepertoireId> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ManagedObjectClassRepertoireId
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ManagedObjectClassRepertoireId} The decoded data structure.
 */
export function _decode_ManagedObjectClassRepertoireId(el: _Element): ManagedObjectClassRepertoireId {
    if (!_cached_decoder_for_ManagedObjectClassRepertoireId) {
        _cached_decoder_for_ManagedObjectClassRepertoireId = _decode_GdmoObjectClass;
    }
    return _cached_decoder_for_ManagedObjectClassRepertoireId(el);
}

let _cached_encoder_for_ManagedObjectClassRepertoireId: $.ASN1Encoder<ManagedObjectClassRepertoireId> | null = null;

/**
 * @summary Encodes a(n) ManagedObjectClassRepertoireId into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ManagedObjectClassRepertoireId, encoded as an ASN.1 Element.
 */
export function _encode_ManagedObjectClassRepertoireId(
    value: ManagedObjectClassRepertoireId,
    elGetter: $.ASN1Encoder<ManagedObjectClassRepertoireId>
): _Element {
    if (!_cached_encoder_for_ManagedObjectClassRepertoireId) {
        _cached_encoder_for_ManagedObjectClassRepertoireId = _encode_GdmoObjectClass;
    }
    return _cached_encoder_for_ManagedObjectClassRepertoireId(value, elGetter);
}


/* eslint-enable */
