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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';

/**
 * @summary SNPAPrefix
 * @description
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
