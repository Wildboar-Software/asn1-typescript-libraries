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
 * @summary UnsignedShort
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UnsignedShort  ::=  INTEGER (0..65535)
 * ```
 */
export type UnsignedShort = INTEGER;




export const _decode_UnsignedShort = $._decodeInteger;




export const _encode_UnsignedShort = $._encodeInteger;


/* eslint-enable */
