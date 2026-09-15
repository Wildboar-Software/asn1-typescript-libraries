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
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary HopMetric
 * @description
 *
 * Per-circuit (one-hop) routeing metric, 0 through `maxLinkMetric` (63).
 * Default metric is mandatory; delay, expense and error metrics are optional
 * and use 0 to mean “not supported”. Higher values mean worse (lower capacity,
 * longer delay, greater expense, or higher residual error). Also used as a
 * call-establishment increment on unestablished DA adjacencies.
 *
 * (ISO/IEC 10589:2002 clauses 7.2.2, 7.5, 11.2.5.9 and 11.3.1).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * HopMetric  ::=  INTEGER(0..maxLinkMetric)
 * ```
 */
export type HopMetric = INTEGER;


export const _decode_HopMetric = $._decodeInteger;


export const _encode_HopMetric = $._encodeInteger;


/* eslint-enable */
