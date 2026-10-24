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
    type ORAddressAndOrDirectoryName,
    _decode_ORAddressAndOrDirectoryName,
    _encode_ORAddressAndOrDirectoryName,
} from '../MTSAbstractService/ORAddressAndOrDirectoryName.ta.mjs';
/**
 * @summary RecipientName
 * @description
 *
 * This argument contains the OR-name of a recipient of the message. It shall be generated
 * by the originator of the message. See ITU-T X.411 (1999), §8.2.1.1.1.2.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RecipientName  ::=  ORAddressAndOrDirectoryName
 * ```
 */
export type RecipientName = ORAddressAndOrDirectoryName; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) RecipientName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RecipientName} The decoded data structure.
 */
export const _decode_RecipientName: $.ASN1Decoder<RecipientName> = _decode_ORAddressAndOrDirectoryName;

/**
 * @summary Encodes a(n) RecipientName into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RecipientName, encoded as an ASN.1 Element.
 */
export const _encode_RecipientName: $.ASN1Encoder<RecipientName> = _encode_ORAddressAndOrDirectoryName;


/* eslint-enable */
