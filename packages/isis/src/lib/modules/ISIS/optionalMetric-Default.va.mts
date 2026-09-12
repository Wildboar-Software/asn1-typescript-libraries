/* eslint-disable */
import {
  INTEGER,
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
 * @summary optionalMetric_Default
 * @description
 *
 * Default for optional circuit metrics (delay, expense, error): 0, which means
 * the metric is not supported.
 *
 * (ISO/IEC 10589:2002 clauses 7.2.2, 11.2.5.1 and 11.3.2).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * optionalMetric-Default INTEGER ::= 0
 * ```
 *
 * @constant
 */
export const optionalMetric_Default: INTEGER = 0;

/* eslint-enable */
