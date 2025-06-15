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
} from 'asn1-ts';
import {
  Password,
  _decode_Password,
  _encode_Password,
} from '../ISIS/Password.ta.mjs';
/**
 * @summary password_Default
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * password-Default Password ::= ''H
 * ```
 *
 * @constant
 */
export const password_Default: Password = new Uint8Array(0);

/* eslint-enable */
