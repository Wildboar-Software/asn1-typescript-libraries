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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';

/* START_OF_SYMBOL_DEFINITION AP_invocation_identifier */
/**
 * @summary AP_invocation_identifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AP-invocation-identifier  ::=  INTEGER
 * ```
 */
export type AP_invocation_identifier = INTEGER;
/* END_OF_SYMBOL_DEFINITION AP_invocation_identifier */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AP_invocation_identifier */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AP_invocation_identifier */

/* START_OF_SYMBOL_DEFINITION _decode_AP_invocation_identifier */
export const _decode_AP_invocation_identifier = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_AP_invocation_identifier */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AP_invocation_identifier */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AP_invocation_identifier */

/* START_OF_SYMBOL_DEFINITION _encode_AP_invocation_identifier */
export const _encode_AP_invocation_identifier = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_AP_invocation_identifier */

/* eslint-enable */
