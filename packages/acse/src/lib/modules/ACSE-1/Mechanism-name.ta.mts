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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';

/**
 * @summary Mechanism_name
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Mechanism-name  ::=  OBJECT IDENTIFIER
 * ```
 */
export type Mechanism_name = OBJECT_IDENTIFIER; // ObjectIdentifierType


export const _decode_Mechanism_name = $._decodeObjectIdentifier;


export const _encode_Mechanism_name = $._encodeObjectIdentifier;


/* eslint-enable */
