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
 * @summary PathMetric
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PathMetric  ::=  INTEGER(0..maxPathMetric)
 * ```
 */
export type PathMetric = INTEGER;


export const _decode_PathMetric = $._decodeInteger;


export const _encode_PathMetric = $._encodeInteger;


/* eslint-enable */
