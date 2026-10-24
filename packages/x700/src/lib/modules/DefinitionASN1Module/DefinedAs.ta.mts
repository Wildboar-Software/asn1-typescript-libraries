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
    type TextualRepresentation,
    _decode_TextualRepresentation,
    _encode_TextualRepresentation,
} from '../DefinitionASN1Module/TextualRepresentation.ta.mjs';

/**
 * @summary DefinedAs
 * @description
 *
 * GDMO behaviour `DEFINED AS` text. Syntax of `definedAs` on a
 * behaviour-template managed object; retrievable with
 * `getTextualRepresentation`. ITU-T Rec. X.750 (10/96)
 * [§8.1.2.5](https://www.itu.int/rec/T-REC-X.750-199610-I),
 * [A.3.1](https://www.itu.int/rec/T-REC-X.750-199610-I),
 * [A.3.3](https://www.itu.int/rec/T-REC-X.750-199610-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DefinedAs  ::=  TextualRepresentation
 * ```
 */
export type DefinedAs = TextualRepresentation; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) DefinedAs
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DefinedAs} The decoded data structure.
 */
export const _decode_DefinedAs: $.ASN1Decoder<DefinedAs> = _decode_TextualRepresentation;

/**
 * @summary Encodes a(n) DefinedAs into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DefinedAs, encoded as an ASN.1 Element.
 */
export const _encode_DefinedAs: $.ASN1Encoder<DefinedAs> = _encode_TextualRepresentation;


/* eslint-enable */
