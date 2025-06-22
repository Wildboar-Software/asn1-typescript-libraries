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
 * @summary SubheaderCount
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SubheaderCount  ::=  INTEGER(0..255)
 * ```
 */
export type SubheaderCount = INTEGER;


export const _decode_SubheaderCount = $._decodeInteger;


export const _encode_SubheaderCount = $._encodeInteger;


/* eslint-enable */
