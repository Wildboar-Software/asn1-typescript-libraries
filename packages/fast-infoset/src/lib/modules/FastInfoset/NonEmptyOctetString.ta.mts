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
 * @summary NonEmptyOctetString
 * @description
 *
 * Octet string of length 1..2³². In `initial-vocabulary` string
 * components, this is the UTF-8 encoding of a character string.
 * ITU-T Rec. X.891 (05/2005)
 * [§7.2.1](https://www.itu.int/rec/T-REC-X.891-200505-I),
 * §7.2.17.
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
