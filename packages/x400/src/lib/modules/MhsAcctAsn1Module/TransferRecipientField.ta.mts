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
    type MTAName,
    _decode_MTAName,
    _encode_MTAName,
} from '../MTSAbstractService/MTAName.ta.mjs';
/**
 * @summary TransferRecipientField
 * @description
 *
 * Defined in ITU-T X.411 (1999) (accounting objects).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TransferRecipientField  ::=  MTAName
 * ```
 */
export type TransferRecipientField = MTAName; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) TransferRecipientField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TransferRecipientField} The decoded data structure.
 */
export const _decode_TransferRecipientField: $.ASN1Decoder<TransferRecipientField> = _decode_MTAName;

/**
 * @summary Encodes a(n) TransferRecipientField into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TransferRecipientField, encoded as an ASN.1 Element.
 */
export const _encode_TransferRecipientField: $.ASN1Encoder<TransferRecipientField> = _encode_MTAName;


/* eslint-enable */
