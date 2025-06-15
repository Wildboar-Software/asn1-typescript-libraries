/* eslint-disable */
import {
  ENUMERATED,
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

/* START_OF_SYMBOL_DEFINITION _enum_for_DigitalPostmarkType_deliveryType */
export enum _enum_for_DigitalPostmarkType_deliveryType {
  certifiedMail = 0,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_DigitalPostmarkType_deliveryType */

/* START_OF_SYMBOL_DEFINITION DigitalPostmarkType_deliveryType */
/**
 * @summary DigitalPostmarkType_deliveryType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DigitalPostmarkType-deliveryType ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export type DigitalPostmarkType_deliveryType =
  | _enum_for_DigitalPostmarkType_deliveryType
  | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION DigitalPostmarkType_deliveryType */

/* START_OF_SYMBOL_DEFINITION DigitalPostmarkType_deliveryType_certifiedMail */
/**
 * @summary DigitalPostmarkType_deliveryType_certifiedMail
 * @constant
 * @type {number}
 */
export const DigitalPostmarkType_deliveryType_certifiedMail: DigitalPostmarkType_deliveryType = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION DigitalPostmarkType_deliveryType_certifiedMail */

/* START_OF_SYMBOL_DEFINITION certifiedMail */
/**
 * @summary certifiedMail
 * @constant
 * @type {number}
 */
export const certifiedMail: DigitalPostmarkType_deliveryType = DigitalPostmarkType_deliveryType_certifiedMail; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION certifiedMail */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DigitalPostmarkType_deliveryType */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DigitalPostmarkType_deliveryType */

/* START_OF_SYMBOL_DEFINITION _decode_DigitalPostmarkType_deliveryType */
export const _decode_DigitalPostmarkType_deliveryType = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_DigitalPostmarkType_deliveryType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DigitalPostmarkType_deliveryType */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DigitalPostmarkType_deliveryType */

/* START_OF_SYMBOL_DEFINITION _encode_DigitalPostmarkType_deliveryType */
export const _encode_DigitalPostmarkType_deliveryType = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_DigitalPostmarkType_deliveryType */

/* eslint-enable */
