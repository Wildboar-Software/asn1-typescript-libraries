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
 * @summary LDAPDN
 * @description
 *
 * Note that LDAP DNs are _reversed_. In X.500 protocols, the RDNs are arranged
 * in order of descending superiority, but in LDAP, it is the opposite.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LDAPDN  ::=  LDAPString
 * ```
 */
export type LDAPDN = LDAPString; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) LDAPDN
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {LDAPDN} The decoded data structure.
 */
export const _decode_LDAPDN: $.ASN1Decoder<LDAPDN> = _decode_LDAPString;

/**
 * @summary Encodes a(n) LDAPDN into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LDAPDN, encoded as an ASN.1 Element.
 */
export const _encode_LDAPDN: $.ASN1Encoder<LDAPDN> = _encode_LDAPString;

/* eslint-enable */
