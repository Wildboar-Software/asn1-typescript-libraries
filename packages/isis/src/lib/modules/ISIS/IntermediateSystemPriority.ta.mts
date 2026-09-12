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
 * @summary IntermediateSystemPriority
 * @description
 *
 * Priority for becoming LAN Designated Intermediate System (1–127; higher
 * wins). Used as `l1IntermediateSystemPriority` /
 * `l2IntermediateSystemPriority` on a broadcast circuit and as
 * `priorityOfNeighbour` on a broadcast IS adjacency. Default is 64.
 *
 * (ISO/IEC 10589:2002 clauses 9.5, 11.2.5.9 and 11.3.1).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IntermediateSystemPriority  ::=  INTEGER(1..127)
 * ```
 */
export type IntermediateSystemPriority = INTEGER;


export const _decode_IntermediateSystemPriority = $._decodeInteger;


export const _encode_IntermediateSystemPriority = $._encodeInteger;


/* eslint-enable */
