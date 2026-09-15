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
 * @summary proi
 * @description
 *
 * GDMO parameter registration arc `{isisoi parameter(5)}`.
 *
 * (ISO/IEC 10589:2002 clause 11.3).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * proi OBJECT IDENTIFIER ::= {isisoi parameter(5)}
 * ```
 *
 * @constant
 */
export const proi: OBJECT_IDENTIFIER = _OID.fromParts([/* parameter */ 5], isisoi);

/* eslint-enable */
