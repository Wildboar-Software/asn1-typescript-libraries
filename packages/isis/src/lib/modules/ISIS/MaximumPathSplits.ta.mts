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
 * @summary MaximumPathSplits
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MaximumPathSplits  ::=  INTEGER(1..32)
 * ```
 */
export type MaximumPathSplits = INTEGER;


export const _decode_MaximumPathSplits = $._decodeInteger;


export const _encode_MaximumPathSplits = $._encodeInteger;


/* eslint-enable */
