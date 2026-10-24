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
  type Association_data,
  _decode_Association_data,
  _encode_Association_data,
} from '../ACSE-1/Association-data.ta.mjs';
/**
 * @summary User_information
 * @description
 *
 * Alias of `Association-data`. User Information parameter of A-ASSOCIATE,
 * A-RELEASE, A-ABORT, and A-ALTER-CONTEXT. ITU-T Rec. X.227 bis (1998)
 * §9.1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * User-information  ::=  Association-data
 * ```
 */
export type User_information = Association_data; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) User_information
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {User_information} The decoded data structure.
 */
export const _decode_User_information: $.ASN1Decoder<User_information> = _decode_Association_data;

/**
 * @summary Encodes a(n) User_information into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The User_information, encoded as an ASN.1 Element.
 */
export const _encode_User_information: $.ASN1Encoder<User_information> = _encode_Association_data;


/* eslint-enable */
