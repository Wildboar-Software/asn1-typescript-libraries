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
 * @summary ReplyRecipientsSubfield
 * @description
 *
 * Defined in ITU-T X.420 (1999) (§7).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReplyRecipientsSubfield  ::=
 *   ORDescriptor(WITH COMPONENTS {
 *                  ...,
 *                  formal-name  PRESENT
 *                })
 * ```
 */
export type ReplyRecipientsSubfield = ORDescriptor; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) ReplyRecipientsSubfield
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ReplyRecipientsSubfield} The decoded data structure.
 */
export const _decode_ReplyRecipientsSubfield: $.ASN1Decoder<ReplyRecipientsSubfield> = _decode_ORDescriptor;

/**
 * @summary Encodes a(n) ReplyRecipientsSubfield into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReplyRecipientsSubfield, encoded as an ASN.1 Element.
 */
export const _encode_ReplyRecipientsSubfield: $.ASN1Encoder<ReplyRecipientsSubfield> = _encode_ORDescriptor;


/* eslint-enable */
