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
    ExtensionField,
    _decode_ExtensionField,
    _encode_ExtensionField,
} from '../EDIMSInformationObjects/ExtensionField.ta.mjs';
/**
 * @summary HeadingExtensionsSubField
 * @description
 *
 * Defined in ITU-T X.435 (1999) (§8).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * HeadingExtensionsSubField  ::=  ExtensionField
 * ```
 */
export type HeadingExtensionsSubField = ExtensionField; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) HeadingExtensionsSubField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {HeadingExtensionsSubField} The decoded data structure.
 */
export const _decode_HeadingExtensionsSubField: $.ASN1Decoder<HeadingExtensionsSubField> = _decode_ExtensionField;

/**
 * @summary Encodes a(n) HeadingExtensionsSubField into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HeadingExtensionsSubField, encoded as an ASN.1 Element.
 */
export const _encode_HeadingExtensionsSubField: $.ASN1Encoder<HeadingExtensionsSubField> = _encode_ExtensionField;


/* eslint-enable */
