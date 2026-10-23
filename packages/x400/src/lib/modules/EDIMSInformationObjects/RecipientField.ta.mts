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
    ORName,
    _decode_ORName,
    _encode_ORName,
} from '../MTSAbstractService/ORName.ta.mjs';
/**
 * @summary RecipientField
 * @description
 *
 * Defined in ITU-T X.435 (1999) (§8).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RecipientField  ::=  ORName
 * ```
 */
export type RecipientField = ORName; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) RecipientField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RecipientField} The decoded data structure.
 */
export const _decode_RecipientField: $.ASN1Decoder<RecipientField> = _decode_ORName;

/**
 * @summary Encodes a(n) RecipientField into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RecipientField, encoded as an ASN.1 Element.
 */
export const _encode_RecipientField: $.ASN1Encoder<RecipientField> = _encode_ORName;


/* eslint-enable */
