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
 * @summary Short
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Short  ::=  INTEGER (-32768..32767)
 * ```
 */
export type Short = INTEGER;




export const _decode_Short = $._decodeInteger;




export const _encode_Short = $._encodeInteger;


/* eslint-enable */
