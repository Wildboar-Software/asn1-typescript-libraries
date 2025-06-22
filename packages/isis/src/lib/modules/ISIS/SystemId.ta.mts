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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary SystemId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SystemId  ::=  OCTET STRING(SIZE (0..8))
 * ```
 */
export type SystemId = OCTET_STRING; // OctetStringType


export const _decode_SystemId = $._decodeOctetString;


export const _encode_SystemId = $._encodeOctetString;


/* eslint-enable */
