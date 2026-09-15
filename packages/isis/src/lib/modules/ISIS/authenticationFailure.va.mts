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
 * @summary authenticationFailure
 * @description
 *
 * `specificProblems` value when a PDU is received with an incorrect
 * Authentication Information field. Source system ID is reported via
 * `notificationSystemId`. probableCause `configurationOrCustomisationError`;
 * severity Major.
 *
 * (ISO/IEC 10589:2002 clauses 11.2.3 and 11.2.5.8).
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
