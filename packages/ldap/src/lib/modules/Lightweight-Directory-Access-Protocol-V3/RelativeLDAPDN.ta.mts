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
  LDAPString,
  _decode_LDAPString,
  _encode_LDAPString,
} from '../Lightweight-Directory-Access-Protocol-V3/LDAPString.ta.mjs';

/**
 * @summary RelativeLDAPDN
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RelativeLDAPDN  ::=
 *   LDAPString
 * ```
 */
export type RelativeLDAPDN = LDAPString; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) RelativeLDAPDN
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RelativeLDAPDN} The decoded data structure.
 */
export const _decode_RelativeLDAPDN: $.ASN1Decoder<RelativeLDAPDN> = _decode_LDAPString;

/**
 * @summary Encodes a(n) RelativeLDAPDN into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RelativeLDAPDN, encoded as an ASN.1 Element.
 */
export const _encode_RelativeLDAPDN: $.ASN1Encoder<RelativeLDAPDN> = _encode_LDAPString;

/* eslint-enable */
