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
 * @summary sequenceNumberSkip
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sequenceNumberSkip OBJECT IDENTIFIER ::= {se sequenceNumberSkip(13)}
 * ```
 *
 * @constant
 */
export const sequenceNumberSkip: OBJECT_IDENTIFIER = _OID.fromParts(
  [/* sequenceNumberSkip */ 13],
  se
);

/* eslint-enable */
