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
} from '@wildboar/asn1';
import { se } from '../ISIS/se.va.mjs';
/**
 * @summary originatingLSPBufferSizeMismatch
 * @description
 *
 * `specificProblems` value when a received L1/L2 LSP is larger than the local
 * originating buffer size, or its originatingLSPBufferSize option disagrees
 * with the local value. LSP header is `notificationLSPHeader`. probableCause
 * `configurationOrCustomisationError`; severity Minor.
 *
 * (ISO/IEC 10589:2002 clause 11.2.2.1).
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
