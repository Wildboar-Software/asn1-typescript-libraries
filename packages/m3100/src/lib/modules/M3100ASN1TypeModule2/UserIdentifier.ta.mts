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
    type NameType,
    _decode_NameType,
    _encode_NameType,
} from '../ASN1DefinedTypesModule/NameType.ta.mjs';


/**
 * @summary UserIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UserIdentifier  ::=  NameType
 * ```
 */
export type UserIdentifier = NameType; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) UserIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UserIdentifier} The decoded data structure.
 */
export const _decode_UserIdentifier: $.ASN1Decoder<UserIdentifier> = _decode_NameType;

/**
 * @summary Encodes a(n) UserIdentifier into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UserIdentifier, encoded as an ASN.1 Element.
 */
export const _encode_UserIdentifier: $.ASN1Encoder<UserIdentifier> = _encode_NameType;


/* eslint-enable */
