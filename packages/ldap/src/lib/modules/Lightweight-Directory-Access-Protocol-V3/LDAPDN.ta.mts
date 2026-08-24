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
 * RFC 4514 string encoding of a Distinguished Name. LDAP DNs are
 * _reversed_ vs X.500: LDAP lists RDNs least-superior first
 * (`cn=x,dc=example,dc=com`); X.500 lists most-superior first.
 * Empty string is the root (anonymous bind name / root DSE).
 * Update ops MUST NOT alias-dereference when locating the named entry.
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
