/* eslint-disable */
import {
  INTEGER,
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
 * @summary AE_invocation_identifier
 * @description
 *
 * Distinguishes an application-entity invocation (classic ACSE).
 * ITU-T Rec. X.217 (1995) §9.1.1.6, §9.1.1.10.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AE-invocation-identifier  ::=  INTEGER
 * ```
 */
export type AE_invocation_identifier = INTEGER;


export const _decode_AE_invocation_identifier = $._decodeInteger;


export const _encode_AE_invocation_identifier = $._encodeInteger;


/* eslint-enable */
