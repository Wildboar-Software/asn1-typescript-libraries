/* eslint-disable */
import {
  type OCTET_STRING,
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
 * @summary BIRIndex
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BIRIndex  ::=  OCTET STRING(SIZE (16))
 * ```
 */
export type BIRIndex = OCTET_STRING; // OctetStringType


export const _decode_BIRIndex: $.ASN1Decoder<OCTET_STRING> = $._decodeOctetString;


export const _encode_BIRIndex: $.ASN1Encoder<OCTET_STRING> = $._encodeOctetString;


/* eslint-enable */
