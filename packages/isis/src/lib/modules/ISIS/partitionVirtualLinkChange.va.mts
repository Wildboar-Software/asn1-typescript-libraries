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
