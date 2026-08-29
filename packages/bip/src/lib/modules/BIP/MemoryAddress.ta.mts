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
 * @summary MemoryAddress
 * @description
 *
 * Stand-in for a C `void*` or function pointer. Mapping to
 * pointer values is implementation-defined; each pointer shall
 * map to a distinct integer that converts back to the same
 * pointer. Does not occur in BIP messages exchanged between
 * endpoints and is therefore never encoded. X.1083 §15.1.7.
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
