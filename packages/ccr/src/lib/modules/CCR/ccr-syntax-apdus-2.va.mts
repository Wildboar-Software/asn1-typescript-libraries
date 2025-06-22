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
import { joint_CCR } from '../CCR/joint-CCR.va.mjs';

/**
 * @summary ccr_syntax_apdus_2
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ccr-syntax-apdus-2 OBJECT IDENTIFIER ::= {joint-CCR abstract-syntax(2) apdus(1) version2(2)}
 * ```
 *
 * @constant
 */
export const ccr_syntax_apdus_2: OBJECT_IDENTIFIER = _OID.fromParts(
  [/* abstract-syntax */ 2, /* apdus */ 1, /* version2 */ 2],
  joint_CCR
);

/* eslint-enable */
