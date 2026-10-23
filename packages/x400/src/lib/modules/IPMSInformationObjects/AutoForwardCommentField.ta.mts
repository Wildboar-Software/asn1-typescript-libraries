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
    AutoForwardComment,
    _decode_AutoForwardComment,
    _encode_AutoForwardComment,
} from '../IPMSInformationObjects/AutoForwardComment.ta.mjs';
/**
 * @summary AutoForwardCommentField
 * @description
 *
 * Defined in ITU-T X.420 (1999) (§7).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AutoForwardCommentField  ::=
 *   AutoForwardComment
 * ```
 */
export type AutoForwardCommentField = AutoForwardComment; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) AutoForwardCommentField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AutoForwardCommentField} The decoded data structure.
 */
export const _decode_AutoForwardCommentField: $.ASN1Decoder<AutoForwardCommentField> = _decode_AutoForwardComment;

/**
 * @summary Encodes a(n) AutoForwardCommentField into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AutoForwardCommentField, encoded as an ASN.1 Element.
 */
export const _encode_AutoForwardCommentField: $.ASN1Encoder<AutoForwardCommentField> = _encode_AutoForwardComment;


/* eslint-enable */
