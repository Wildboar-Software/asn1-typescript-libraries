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
import * as $ from 'asn1-ts/dist/functional.mjs';


/**
 * @summary UnsignedInt
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UnsignedInt  ::=     INTEGER (0..4294967295)
 * ```
 */
export type UnsignedInt = INTEGER;




export const _decode_UnsignedInt = $._decodeInteger;




export const _encode_UnsignedInt = $._encodeInteger;


/* eslint-enable */
