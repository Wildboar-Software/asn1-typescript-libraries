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
 * @summary partitionVirtualLinkChange
 * @description
 *
 * `informationType` when a Level 1 partition-repair virtual link is created or
 * deleted. Report direction and remote NET via `notificationVirtualLinkChange`
 * and `notificationVirtualLinkAddress`. Order per virtual link must be
 * preserved.
 *
 * (ISO/IEC 10589:2002 clauses 7.2.10 and 11.2.2.3).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * partitionVirtualLinkChange OBJECT IDENTIFIER ::= {se partitionVirtualLinkChange(11)}
 * ```
 *
 * @constant
 */
export const partitionVirtualLinkChange: OBJECT_IDENTIFIER = _OID.fromParts(
  [/* partitionVirtualLinkChange */ 11],
  se
);

/* eslint-enable */
