/* eslint-disable */
import {
  BIT_STRING,
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
 * @summary KerberosFlags
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KerberosFlags    ::=  BIT STRING (SIZE (32..MAX))
 * ```
 */
export type KerberosFlags = BIT_STRING;




export const _decode_KerberosFlags = $._decodeBitString;




export const _encode_KerberosFlags = $._encodeBitString;


/* eslint-enable */
