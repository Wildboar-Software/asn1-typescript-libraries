/* eslint-disable */
import {
  OBJECT_IDENTIFIER,
  ASN1Element as _Element,
  ASN1TagClass as _TagClass,
  ASN1Construction as _Construction,
  ASN1UniversalType as _UniversalType,
  ObjectIdentifier as _OID,
  External as _External,
  EmbeddedPDV as _PDV,
  ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import { se } from '../ISIS/se.va.mjs';
/**
 * @summary authenticationFailure
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * authenticationFailure OBJECT IDENTIFIER ::= {se authenticationFailure(2)}
 * ```
 *
 * @constant
 */
export const authenticationFailure: OBJECT_IDENTIFIER = _OID.fromParts(
  [/* authenticationFailure */ 2],
  se
);

/* eslint-enable */
