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
 * @summary defaultMetric_Default
 * @description
 *
 * Default value of the (mandatory) default metric on a circuit or reachable
 * address: 20.
 *
 * (ISO/IEC 10589:2002 clauses 7.2.2, 11.2.5.1 and 11.3.2).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * defaultMetric-Default INTEGER ::= 20
 * ```
 *
 * @constant
 */
export const defaultMetric_Default: INTEGER = 20;

/* eslint-enable */
