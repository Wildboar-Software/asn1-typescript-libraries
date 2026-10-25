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
    RecipientSpecifier,
    _decode_RecipientSpecifier,
    _encode_RecipientSpecifier,
} from '../IPMSInformationObjects/RecipientSpecifier.ta.mjs';
/**
 * @summary CopyRecipientsSubfield
 * @description
 *
 * Defined in ITU-T X.420 (1999) (§7).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CopyRecipientsSubfield  ::=  RecipientSpecifier
 * ```
 */
export type CopyRecipientsSubfield = RecipientSpecifier; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) CopyRecipientsSubfield
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CopyRecipientsSubfield} The decoded data structure.
 */
export const _decode_CopyRecipientsSubfield: $.ASN1Decoder<CopyRecipientsSubfield> = _decode_RecipientSpecifier;

/**
 * @summary Encodes a(n) CopyRecipientsSubfield into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CopyRecipientsSubfield, encoded as an ASN.1 Element.
 */
export const _encode_CopyRecipientsSubfield: $.ASN1Encoder<CopyRecipientsSubfield> = _encode_RecipientSpecifier;


/* eslint-enable */
