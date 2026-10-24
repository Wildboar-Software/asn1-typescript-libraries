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
    TextualRepresentation,
    _decode_TextualRepresentation,
    _encode_TextualRepresentation,
} from '../DefinitionASN1Module/TextualRepresentation.ta.mjs';

/**
 * @summary TemplateDefinition
 * @description
 *
 * Text of a template definition. In-line templates are omitted even if
 * they appear in the superior document; GDMO comments need not be
 * included. Present on a template managed object when the
 * template-definition conditional package is present (`PRESENT IF` the
 * template is represented as a text string); retrievable with
 * `getTextualRepresentation`. ITU-T Rec. X.750 (10/96)
 * [§8.1.2.12](https://www.itu.int/rec/T-REC-X.750-199610-I) (renumbered
 * §8.1.2.14 by Amd.1),
 * [A.3.1](https://www.itu.int/rec/T-REC-X.750-199610-I),
 * [A.3.3](https://www.itu.int/rec/T-REC-X.750-199610-I). Amd.1 [item
 * 8](https://www.itu.int/rec/T-REC-X.750-199710-I)
 * says "template" rather than "GDMO template" so GRM templates share
 * this encoding.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TemplateDefinition  ::=  TextualRepresentation
 * ```
 */
export type TemplateDefinition = TextualRepresentation; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) TemplateDefinition
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TemplateDefinition} The decoded data structure.
 */
export const _decode_TemplateDefinition: $.ASN1Decoder<TemplateDefinition> = _decode_TextualRepresentation;

/**
 * @summary Encodes a(n) TemplateDefinition into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TemplateDefinition, encoded as an ASN.1 Element.
 */
export const _encode_TemplateDefinition: $.ASN1Encoder<TemplateDefinition> = _encode_TextualRepresentation;


/* eslint-enable */
