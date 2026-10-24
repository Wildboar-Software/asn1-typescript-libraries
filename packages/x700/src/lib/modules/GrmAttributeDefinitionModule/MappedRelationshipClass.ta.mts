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
    TemplateLabel,
    _decode_TemplateLabel,
    _encode_TemplateLabel,
} from '../DefinitionASN1Module/TemplateLabel.ta.mjs';
/**
 * @summary MappedRelationshipClass
 * @description
 *
 * GRM `RELATIONSHIP CLASS` construct: label of the managed
 * relationship class this mapping is related to. ITU-T Rec. X.750
 * Amd.1 (10/97)
 * [§8.1.2.13](https://www.itu.int/rec/T-REC-X.750-199710-I);
 * X.725 (11/95)
 * [A.2.3.1](https://www.itu.int/rec/T-REC-X.725-199511-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MappedRelationshipClass  ::=  TemplateLabel
 * ```
 */
export type MappedRelationshipClass = TemplateLabel; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) MappedRelationshipClass
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MappedRelationshipClass} The decoded data structure.
 */
export const _decode_MappedRelationshipClass: $.ASN1Decoder<MappedRelationshipClass> = _decode_TemplateLabel;

/**
 * @summary Encodes a(n) MappedRelationshipClass into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MappedRelationshipClass, encoded as an ASN.1 Element.
 */
export const _encode_MappedRelationshipClass: $.ASN1Encoder<MappedRelationshipClass> = _encode_TemplateLabel;


/* eslint-enable */
