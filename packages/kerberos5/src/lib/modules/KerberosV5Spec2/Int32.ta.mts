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
 * @summary Int32
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Int32            ::=  INTEGER (-2147483648..2147483647)
 * ```
 */
export type Int32 = INTEGER;




export const _decode_Int32 = $._decodeInteger;




export const _encode_Int32 = $._encodeInteger;


/* eslint-enable */
