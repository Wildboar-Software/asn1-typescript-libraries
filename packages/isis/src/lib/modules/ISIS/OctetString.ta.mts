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
 * @summary OctetString
 * @description
 *
 * OCTET STRING alias. Used as `notificationLSPHeader` (header of the LSP that
 * caused originating-buffer-size mismatch or LSP-too-large-to-propagate).
 *
 * (ISO/IEC 10589:2002 clauses 11.2.1.3 and 11.3.1).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OctetString  ::=  OCTET STRING
 * ```
 */
export type OctetString = OCTET_STRING; // OctetStringType


export const _decode_OctetString = $._decodeOctetString;


export const _encode_OctetString = $._encodeOctetString;


/* eslint-enable */
