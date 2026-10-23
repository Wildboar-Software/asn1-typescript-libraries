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
 * @summary AuthorizingUsersSubfield
 * @description
 *
 * Defined in ITU-T X.420 (1999) (§7).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AuthorizingUsersSubfield  ::=  ORDescriptor
 * ```
 */
export type AuthorizingUsersSubfield = ORDescriptor; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) AuthorizingUsersSubfield
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AuthorizingUsersSubfield} The decoded data structure.
 */
export const _decode_AuthorizingUsersSubfield: $.ASN1Decoder<AuthorizingUsersSubfield> = _decode_ORDescriptor;

/**
 * @summary Encodes a(n) AuthorizingUsersSubfield into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuthorizingUsersSubfield, encoded as an ASN.1 Element.
 */
export const _encode_AuthorizingUsersSubfield: $.ASN1Encoder<AuthorizingUsersSubfield> = _encode_ORDescriptor;


/* eslint-enable */
