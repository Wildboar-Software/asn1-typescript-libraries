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
 * @summary callEstablishmentMetricIncrement_Default
 * @description
 *
 * Default extra metric reported for an unestablished DA adjacency (0: no
 * increment). Used for default, delay, expense and error call-establishment
 * increments.
 *
 * (ISO/IEC 10589:2002 clauses 8.3.5.3, 11.2.5.4 and 11.3.2).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * callEstablishmentMetricIncrement-Default INTEGER ::= 0
 * ```
 *
 * @constant
 */
export const callEstablishmentMetricIncrement_Default: INTEGER = 0;

/* eslint-enable */
