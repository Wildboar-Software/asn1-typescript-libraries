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
 * @summary UnsignedByte
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UnsignedByte  ::=  INTEGER(0..max-unsigned-byte)
 * ```
 */
export type UnsignedByte = INTEGER;




export const _decode_UnsignedByte = $._decodeInteger;




export const _encode_UnsignedByte = $._encodeInteger;


/* eslint-enable */
