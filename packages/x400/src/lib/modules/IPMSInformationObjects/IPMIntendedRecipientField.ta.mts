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
    ORDescriptor,
    _decode_ORDescriptor,
    _encode_ORDescriptor,
} from '../IPMSInformationObjects/ORDescriptor.ta.mjs';
/**
 * @summary IPMIntendedRecipientField
 * @description
 *
 * Defined in ITU-T X.420 (1999) (§7).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IPMIntendedRecipientField  ::=  ORDescriptor
 * ```
 */
export type IPMIntendedRecipientField = ORDescriptor; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) IPMIntendedRecipientField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {IPMIntendedRecipientField} The decoded data structure.
 */
export const _decode_IPMIntendedRecipientField: $.ASN1Decoder<IPMIntendedRecipientField> = _decode_ORDescriptor;

/**
 * @summary Encodes a(n) IPMIntendedRecipientField into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IPMIntendedRecipientField, encoded as an ASN.1 Element.
 */
export const _encode_IPMIntendedRecipientField: $.ASN1Encoder<IPMIntendedRecipientField> = _encode_ORDescriptor;


/* eslint-enable */
