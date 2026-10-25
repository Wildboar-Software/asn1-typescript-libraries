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
    type ORAddressAndOrDirectoryName,
    _decode_ORAddressAndOrDirectoryName,
    _encode_ORAddressAndOrDirectoryName,
} from '../MTSAbstractService/ORAddressAndOrDirectoryName.ta.mjs';
/**
 * @summary RecipientAssignedAlternateRecipient
 * @description
 *
 * Defined in ITU-T X.411 (1999) (§8).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RecipientAssignedAlternateRecipient  ::=
 *   ORAddressAndOrDirectoryName
 * ```
 */
export type RecipientAssignedAlternateRecipient = ORAddressAndOrDirectoryName; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) RecipientAssignedAlternateRecipient
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RecipientAssignedAlternateRecipient} The decoded data structure.
 */
export const _decode_RecipientAssignedAlternateRecipient: $.ASN1Decoder<RecipientAssignedAlternateRecipient> = _decode_ORAddressAndOrDirectoryName;

/**
 * @summary Encodes a(n) RecipientAssignedAlternateRecipient into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RecipientAssignedAlternateRecipient, encoded as an ASN.1 Element.
 */
export const _encode_RecipientAssignedAlternateRecipient: $.ASN1Encoder<RecipientAssignedAlternateRecipient> = _encode_ORAddressAndOrDirectoryName;


/* eslint-enable */
