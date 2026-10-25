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
 * @summary EDIApplicationSecurityExtension
 * @description
 *
 * Defined in ITU-T X.435 (1999) (§8).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EDIApplicationSecurityExtension  ::=  ExtensionField
 * ```
 */
export type EDIApplicationSecurityExtension = ExtensionField; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) EDIApplicationSecurityExtension
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EDIApplicationSecurityExtension} The decoded data structure.
 */
export const _decode_EDIApplicationSecurityExtension: $.ASN1Decoder<EDIApplicationSecurityExtension> = _decode_ExtensionField;

/**
 * @summary Encodes a(n) EDIApplicationSecurityExtension into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EDIApplicationSecurityExtension, encoded as an ASN.1 Element.
 */
export const _encode_EDIApplicationSecurityExtension: $.ASN1Encoder<EDIApplicationSecurityExtension> = _encode_ExtensionField;


/* eslint-enable */
