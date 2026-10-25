/* eslint-disable */
import {
  type INTEGER,
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
 * @summary ThreeBit
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ThreeBit  ::=  INTEGER(0..7)
 * ```
 */
export type ThreeBit = INTEGER;


export const _decode_ThreeBit: $.ASN1Decoder<INTEGER> = $._decodeInteger;


export const _encode_ThreeBit: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
