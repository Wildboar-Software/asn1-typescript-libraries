/* eslint-disable */
import {
  OBJECT_IDENTIFIER,
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
 * @summary ASO_context_name
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ASO-context-name  ::=  OBJECT IDENTIFIER
 * ```
 */
export type ASO_context_name = OBJECT_IDENTIFIER; // ObjectIdentifierType


export const _decode_ASO_context_name = $._decodeObjectIdentifier;


export const _encode_ASO_context_name = $._encodeObjectIdentifier;


/* eslint-enable */
