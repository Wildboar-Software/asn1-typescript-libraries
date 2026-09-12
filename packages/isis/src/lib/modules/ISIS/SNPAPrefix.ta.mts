/* eslint-disable */
import {
  BIT_STRING,
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
 * @summary SNPAPrefix
 * @description
 *
 * Prefix concatenated with bits extracted from the destination NSAP DSP (those
 * indicated by 1-bits in `sNPAMask`) to form the next-hop SNPA when
 * `mappingType` is `extractDSP`.
 *
 * (ISO/IEC 10589:2002 clauses 8.1, 11.2.12.2 and 11.3.1).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SNPAPrefix  ::=  BIT STRING(SIZE (0..120))
 * ```
 */
export type SNPAPrefix = BIT_STRING;


export const _decode_SNPAPrefix = $._decodeBitString;


export const _encode_SNPAPrefix = $._encodeBitString;


/* eslint-enable */
