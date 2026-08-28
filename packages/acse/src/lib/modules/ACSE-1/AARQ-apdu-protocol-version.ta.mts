/* eslint-disable */
import {
  BIT_STRING,
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
 * @summary AARQ_apdu_protocol_version
 * @description
 *
 * AARQ Protocol Version bit string. Bit 0 (`version1`) is the only
 * named bit in this module. Multiple bits may be set. ITU-T Rec.
 * X.227 bis (1998) §7.1.4.1, §10.1(b) (systems shall support version 1).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AARQ-apdu-protocol-version ::= BIT STRING { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type AARQ_apdu_protocol_version = BIT_STRING;

/**
 * @summary AARQ_apdu_protocol_version_version1
 * @constant
 */
export const AARQ_apdu_protocol_version_version1: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary version1
 * @constant
 */
export const version1: number = AARQ_apdu_protocol_version_version1; /* SHORT_NAMED_BIT */


export const _decode_AARQ_apdu_protocol_version = $._decodeBitString;


export const _encode_AARQ_apdu_protocol_version = $._encodeBitString;


/* eslint-enable */
