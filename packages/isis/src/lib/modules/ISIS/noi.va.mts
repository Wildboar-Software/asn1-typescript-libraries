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
import { isisoi } from '../ISIS/isisoi.va.mjs';
/**
 * @summary noi
 * @description
 *
 * GDMO notification registration arc `{isisoi notification(10)}`.
 *
 * (ISO/IEC 10589:2002 clause 11.3).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * noi OBJECT IDENTIFIER ::= {isisoi notification(10)}
 * ```
 *
 * @constant
 */
export const noi: OBJECT_IDENTIFIER = _OID.fromParts([/* notification */ 10], isisoi);

/* eslint-enable */
