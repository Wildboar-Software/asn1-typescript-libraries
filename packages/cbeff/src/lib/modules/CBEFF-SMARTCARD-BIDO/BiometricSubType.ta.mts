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
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary BiometricSubType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BiometricSubType  ::=  OCTET STRING(SIZE (1))
 * ```
 */
export type BiometricSubType = OCTET_STRING; // OctetStringType


export const _decode_BiometricSubType = $._decodeOctetString;


export const _encode_BiometricSubType = $._encodeOctetString;


/* eslint-enable */
