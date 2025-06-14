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
/* START_OF_SYMBOL_DEFINITION partitionVirtualLinkChange */
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
export const partitionVirtualLinkChange: OBJECT_IDENTIFIER = new _OID(
  [/* partitionVirtualLinkChange */ 11],
  se
);
/* END_OF_SYMBOL_DEFINITION partitionVirtualLinkChange */

/* eslint-enable */
