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
 * @summary UInt32
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UInt32           ::=  INTEGER (0..4294967295)
 * ```
 */
export type UInt32 = INTEGER;




export const _decode_UInt32 = $._decodeInteger;




export const _encode_UInt32 = $._encodeInteger;


/* eslint-enable */
