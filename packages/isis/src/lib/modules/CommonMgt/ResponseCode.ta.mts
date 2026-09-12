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
 * @summary ResponseCode
 * @description
 *
 * Action-reply response code (OBJECT IDENTIFIER). Specific values are
 * registered under `responseCode`.
 *
 * (ISO/IEC 10589:2002 Annex E.2).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ResponseCode  ::=  OBJECT IDENTIFIER
 * ```
 */
export type ResponseCode = OBJECT_IDENTIFIER; // ObjectIdentifierType


export const _decode_ResponseCode = $._decodeObjectIdentifier;


export const _encode_ResponseCode = $._encodeObjectIdentifier;


/* eslint-enable */
