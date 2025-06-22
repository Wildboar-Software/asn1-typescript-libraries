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
 * @summary originatingLSPBufferSizeMismatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * originatingLSPBufferSizeMismatch OBJECT IDENTIFIER ::= {se originatingLSPBufferSizeMismatch(15)}
 * ```
 *
 * @constant
 */
export const originatingLSPBufferSizeMismatch: OBJECT_IDENTIFIER = _OID.fromParts(
  [/* originatingLSPBufferSizeMismatch */ 15],
  se
);

/* eslint-enable */
