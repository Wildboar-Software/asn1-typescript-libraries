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
 * @summary ASOI_identifier
 * @description
 *
 * Distinguishes concurrent invocations of the same ASO (`INTEGER (1..128, ...)`).
 * Conditional on A-DATA and related APDUs: required only if multiple
 * instances are active. ITU-T Rec. X.227 bis (1998) §7.4.4.2, §9.1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ASOI-identifier  ::=  INTEGER(1..128, ...)
 * ```
 */
export type ASOI_identifier = INTEGER;


export const _decode_ASOI_identifier = $._decodeInteger;


export const _encode_ASOI_identifier = $._encodeInteger;


/* eslint-enable */
