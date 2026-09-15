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
 * @summary maxLinkMetric
 * @description
 *
 * Architectural constant: maximum routeing metric assignable to a circuit.
 * Upper bound of `HopMetric`.
 *
 * (ISO/IEC 10589:2002 clauses 7.5 table 2 and 11.3.1).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * maxLinkMetric INTEGER ::= 63
 * ```
 *
 * @constant
 */
export const maxLinkMetric: INTEGER = 63;

/* eslint-enable */
