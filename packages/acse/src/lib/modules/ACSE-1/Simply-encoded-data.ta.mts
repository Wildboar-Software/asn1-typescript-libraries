/* eslint-disable */
import {
  OCTET_STRING,
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
 * @summary Simply_encoded_data
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Simply-encoded-data  ::=  OCTET STRING
 * ```
 */
export type Simply_encoded_data = OCTET_STRING; // OctetStringType


export const _decode_Simply_encoded_data = $._decodeOctetString;


export const _encode_Simply_encoded_data = $._encodeOctetString;


/* eslint-enable */
