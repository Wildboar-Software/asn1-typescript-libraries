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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';

/* START_OF_SYMBOL_DEFINITION RTTRapdu */
/**
 * @summary RTTRapdu
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RTTRapdu  ::=  OCTET STRING
 * ```
 */
export type RTTRapdu = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION RTTRapdu */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RTTRapdu */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RTTRapdu */

/* START_OF_SYMBOL_DEFINITION _decode_RTTRapdu */
export const _decode_RTTRapdu = $._decodeOctetString;
/* END_OF_SYMBOL_DEFINITION _decode_RTTRapdu */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RTTRapdu */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RTTRapdu */

/* START_OF_SYMBOL_DEFINITION _encode_RTTRapdu */
export const _encode_RTTRapdu = $._encodeOctetString;

/* END_OF_SYMBOL_DEFINITION _encode_RTTRapdu */

/* eslint-enable */
