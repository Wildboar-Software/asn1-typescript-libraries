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
 * @summary FormatOwner
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FormatOwner  ::=  OCTET STRING(SIZE (2))
 * ```
 */
export type FormatOwner = OCTET_STRING; // OctetStringType


export const _decode_FormatOwner = $._decodeOctetString;


export const _encode_FormatOwner = $._encodeOctetString;


/* eslint-enable */
