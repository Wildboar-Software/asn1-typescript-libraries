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
    type RecipientField,
    _decode_RecipientField,
    _encode_RecipientField,
} from '../EDIMSInformationObjects/RecipientField.ta.mjs';
/**
 * @summary NewRecipient
 * @description
 *
 * A Recipient identifies the preferred recipient in question. It comprises an OR-name. See
 * ITU-T X.435 (1999), §8.2.3.1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NewRecipient  ::=  RecipientField
 * ```
 */
export type NewRecipient = RecipientField; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) NewRecipient
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NewRecipient} The decoded data structure.
 */
export const _decode_NewRecipient: $.ASN1Decoder<NewRecipient> = _decode_RecipientField;

/**
 * @summary Encodes a(n) NewRecipient into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NewRecipient, encoded as an ASN.1 Element.
 */
export const _encode_NewRecipient: $.ASN1Encoder<NewRecipient> = _encode_RecipientField;


/* eslint-enable */
