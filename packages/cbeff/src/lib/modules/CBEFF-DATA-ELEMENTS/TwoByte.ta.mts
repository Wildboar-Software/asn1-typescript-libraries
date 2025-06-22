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
 * @summary TwoByte
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TwoByte  ::=  INTEGER(0..65535)
 * ```
 */
export type TwoByte = INTEGER;


export const _decode_TwoByte = $._decodeInteger;


export const _encode_TwoByte = $._encodeInteger;


/* eslint-enable */
