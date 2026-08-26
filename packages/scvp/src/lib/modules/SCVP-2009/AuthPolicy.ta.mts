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
 * @summary AuthPolicy
 * @description
 *
 * OID naming an authentication policy agreed between client and
 * server ([RFC 5055 §6.11](https://datatracker.ietf.org/doc/html/rfc5055#section-6.11)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AuthPolicy  ::=  OBJECT IDENTIFIER
 * ```
 */
export type AuthPolicy = OBJECT_IDENTIFIER; // ObjectIdentifierType


export const _decode_AuthPolicy = $._decodeObjectIdentifier;


export const _encode_AuthPolicy = $._encodeObjectIdentifier;


/* eslint-enable */
