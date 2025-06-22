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
} from 'asn1-ts';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary FourBit
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FourBit  ::=  INTEGER(0..15)
 * ```
 */
export type FourBit = INTEGER;


export const _decode_FourBit = $._decodeInteger;


export const _encode_FourBit = $._encodeInteger;


/* eslint-enable */
