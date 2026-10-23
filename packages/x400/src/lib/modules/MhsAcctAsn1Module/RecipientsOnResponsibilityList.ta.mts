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
    RecipientName,
    _decode_RecipientName,
    _encode_RecipientName,
} from '../MhsAcctAsn1Module/RecipientName.ta.mjs';
/**
 * @summary RecipientsOnResponsibilityList
 * @description
 *
 * Defined in ITU-T X.411 (1999) (accounting objects).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RecipientsOnResponsibilityList  ::=  RecipientName
 * ```
 */
export type RecipientsOnResponsibilityList = RecipientName; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) RecipientsOnResponsibilityList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RecipientsOnResponsibilityList} The decoded data structure.
 */
export const _decode_RecipientsOnResponsibilityList: $.ASN1Decoder<RecipientsOnResponsibilityList> = _decode_RecipientName;

/**
 * @summary Encodes a(n) RecipientsOnResponsibilityList into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RecipientsOnResponsibilityList, encoded as an ASN.1 Element.
 */
export const _encode_RecipientsOnResponsibilityList: $.ASN1Encoder<RecipientsOnResponsibilityList> = _encode_RecipientName;


/* eslint-enable */
