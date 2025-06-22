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
 * @summary NonEmptyOctetString
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NonEmptyOctetString  ::=  OCTET STRING(SIZE (1..four-gig))
 * ```
 */
export type NonEmptyOctetString = OCTET_STRING; // OctetStringType


export const _decode_NonEmptyOctetString = $._decodeOctetString;


export const _encode_NonEmptyOctetString = $._encodeOctetString;


/* eslint-enable */
