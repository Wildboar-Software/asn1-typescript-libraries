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
import {
  Passwords,
  _decode_Passwords,
  _encode_Passwords,
} from '../ISIS/Passwords.ta.mjs';
import {
  _decode_Password,
  _encode_Password,
} from '../ISIS/Password.ta.mjs';
/**
 * @summary passwords_Default
 * @description
 *
 * Default receive-password set: empty (no authentication check).
 *
 * (ISO/IEC 10589:2002 clauses 11.2.3 and 11.3.2).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * passwords-Default Passwords ::= {}
 * ```
 *
 * @constant
 */
export const passwords_Default: Passwords = [];

/* eslint-enable */
