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
    ExtensionField,
    _decode_ExtensionField,
    _encode_ExtensionField,
} from '../EDIMSInformationObjects/ExtensionField.ta.mjs';
/**
 * @summary FNExtensionsSubField
 * @description
 *
 * Defined in ITU-T X.435 (1999) (§8).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FNExtensionsSubField  ::=  ExtensionField
 * ```
 */
export type FNExtensionsSubField = ExtensionField; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) FNExtensionsSubField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {FNExtensionsSubField} The decoded data structure.
 */
export const _decode_FNExtensionsSubField: $.ASN1Decoder<FNExtensionsSubField> = _decode_ExtensionField;

/**
 * @summary Encodes a(n) FNExtensionsSubField into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FNExtensionsSubField, encoded as an ASN.1 Element.
 */
export const _encode_FNExtensionsSubField: $.ASN1Encoder<FNExtensionsSubField> = _encode_ExtensionField;


/* eslint-enable */
