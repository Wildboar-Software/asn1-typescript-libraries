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
    RecipientSpecifier,
    _decode_RecipientSpecifier,
    _encode_RecipientSpecifier,
} from '../IPMSInformationObjects/RecipientSpecifier.ta.mjs';
/**
 * @summary BlindCopyRecipientsSubfield
 * @description
 *
 * Defined in ITU-T X.420 (1999) (§7).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BlindCopyRecipientsSubfield  ::=  RecipientSpecifier
 * ```
 */
export type BlindCopyRecipientsSubfield = RecipientSpecifier; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) BlindCopyRecipientsSubfield
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BlindCopyRecipientsSubfield} The decoded data structure.
 */
export const _decode_BlindCopyRecipientsSubfield: $.ASN1Decoder<BlindCopyRecipientsSubfield> = _decode_RecipientSpecifier;

/**
 * @summary Encodes a(n) BlindCopyRecipientsSubfield into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BlindCopyRecipientsSubfield, encoded as an ASN.1 Element.
 */
export const _encode_BlindCopyRecipientsSubfield: $.ASN1Encoder<BlindCopyRecipientsSubfield> = _encode_RecipientSpecifier;


/* eslint-enable */
