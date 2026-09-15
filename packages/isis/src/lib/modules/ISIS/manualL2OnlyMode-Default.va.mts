/* eslint-disable */
import {
  BOOLEAN,
  ASN1Element as _Element,
  ASN1TagClass as _TagClass,
  ASN1Construction as _Construction,
  ASN1UniversalType as _UniversalType,
  ObjectIdentifier as _OID,
  External as _External,
  EmbeddedPDV as _PDV,
  ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';

/**
 * @summary manualL2OnlyMode_Default
 * @description
 *
 * Default `manualL2OnlyMode`: FALSE (circuit is not restricted to Level 2).
 * When TRUE, the IIH Circuit Type field is Level 2 only. Replace is permitted
 * only while disabled.
 *
 * (ISO/IEC 10589:2002 clauses 9.5, 11.2.5.6 and 11.3.2).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * manualL2OnlyMode-Default BOOLEAN ::= FALSE
 * ```
 *
 * @constant
 */
export const manualL2OnlyMode_Default: BOOLEAN = false;

/* eslint-enable */
