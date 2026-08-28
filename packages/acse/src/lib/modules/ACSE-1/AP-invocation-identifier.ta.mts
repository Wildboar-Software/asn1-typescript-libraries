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
 * @summary AP_invocation_identifier
 * @description
 *
 * Distinguishes an application-process invocation. ITU-T Rec. X.217
 * bis (1998) §8.1.1.4, §8.1.1.7.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AP-invocation-identifier  ::=  INTEGER
 * ```
 */
export type AP_invocation_identifier = INTEGER;


export const _decode_AP_invocation_identifier = $._decodeInteger;


export const _encode_AP_invocation_identifier = $._encodeInteger;


/* eslint-enable */
