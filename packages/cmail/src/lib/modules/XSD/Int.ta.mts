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
 * @summary Int
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Int  ::=  INTEGER (-2147483648..2147483647)
 * ```
 */
export type Int = INTEGER;




export const _decode_Int = $._decodeInteger;




export const _encode_Int = $._encodeInteger;


/* eslint-enable */
