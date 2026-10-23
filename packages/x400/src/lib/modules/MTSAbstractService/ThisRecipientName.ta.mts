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
    ORAddressAndOptionalDirectoryName,
    _decode_ORAddressAndOptionalDirectoryName,
    _encode_ORAddressAndOptionalDirectoryName,
} from '../MTSAbstractService/ORAddressAndOptionalDirectoryName.ta.mjs';
/**
 * @summary ThisRecipientName
 * @description
 *
 * This argument contains the OR-name of a recipient of the message. It shall be generated
 * by the originator of the message. See ITU-T X.411 (1999), §8.2.1.1.1.2.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ThisRecipientName  ::=  ORAddressAndOptionalDirectoryName
 * ```
 */
export type ThisRecipientName = ORAddressAndOptionalDirectoryName; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) ThisRecipientName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ThisRecipientName} The decoded data structure.
 */
export const _decode_ThisRecipientName: $.ASN1Decoder<ThisRecipientName> = _decode_ORAddressAndOptionalDirectoryName;

/**
 * @summary Encodes a(n) ThisRecipientName into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ThisRecipientName, encoded as an ASN.1 Element.
 */
export const _encode_ThisRecipientName: $.ASN1Encoder<ThisRecipientName> = _encode_ORAddressAndOptionalDirectoryName;


/* eslint-enable */
