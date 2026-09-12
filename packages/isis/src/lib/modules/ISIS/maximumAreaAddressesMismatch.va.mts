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
 * @summary maximumAreaAddressesMismatch
 * @description
 *
 * `specificProblems` value when a PDU's Maximum Area Addresses field differs
 * from this IS. Report received value and source ID via
 * `notificationMaximumAreaAddresses` and `notificationSourceId`. probableCause
 * `configurationOrCustomisationError`; severity Major.
 *
 * (ISO/IEC 10589:2002 clauses 7.1.5 and 11.2.2.1).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * maximumAreaAddressesMismatch OBJECT IDENTIFIER ::= {se maximumAreaAddressesMismatch(9)}
 * ```
 *
 * @constant
 */
export const maximumAreaAddressesMismatch: OBJECT_IDENTIFIER = _OID.fromParts(
  [/* maximumAreaAddressesMismatch */ 9],
  se
);

/* eslint-enable */
