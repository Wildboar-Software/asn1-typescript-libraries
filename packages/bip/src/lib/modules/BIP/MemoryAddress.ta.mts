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
 * @summary MemoryAddress
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MemoryAddress  ::=  INTEGER
 * ```
 */
export type MemoryAddress = INTEGER;




export const _decode_MemoryAddress = $._decodeInteger;




export const _encode_MemoryAddress = $._encodeInteger;


/* eslint-enable */
