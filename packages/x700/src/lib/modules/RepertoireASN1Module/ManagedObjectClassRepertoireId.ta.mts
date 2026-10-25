/* eslint-disable */
import {
    type ASN1Element as _Element,
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
    type GdmoObjectClass,
    _decode_GdmoObjectClass,
    _encode_GdmoObjectClass,
} from '../RepertoireASN1Module/GdmoObjectClass.ta.mjs';
/**
 * @summary ManagedObjectClassRepertoireId
 * @description
 *
 * Naming attribute of a managed-object-class repertoire object: the
 * OID with which that class was registered. ITU-T Rec. X.750 (10/96)
 * [§8.2.1.1](https://www.itu.int/rec/T-REC-X.750-199610-I),
 * A.2.3.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ManagedObjectClassRepertoireId  ::=  GdmoObjectClass
 * ```
 */
export type ManagedObjectClassRepertoireId = GdmoObjectClass; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) ManagedObjectClassRepertoireId
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ManagedObjectClassRepertoireId} The decoded data structure.
 */
export const _decode_ManagedObjectClassRepertoireId: $.ASN1Decoder<ManagedObjectClassRepertoireId> = _decode_GdmoObjectClass;

/**
 * @summary Encodes a(n) ManagedObjectClassRepertoireId into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ManagedObjectClassRepertoireId, encoded as an ASN.1 Element.
 */
export const _encode_ManagedObjectClassRepertoireId: $.ASN1Encoder<ManagedObjectClassRepertoireId> = _encode_GdmoObjectClass;


/* eslint-enable */
