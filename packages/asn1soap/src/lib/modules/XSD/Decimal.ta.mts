/* eslint-disable */
import {
  REAL,
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

/* START_OF_SYMBOL_DEFINITION Decimal */
/**
 * @summary Decimal
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Decimal  ::=  REAL    (0 | WITH COMPONENTS {..., base(10)})
 * ```
 */
export type Decimal = REAL; // RealType
/* END_OF_SYMBOL_DEFINITION Decimal */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Decimal */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Decimal */

/* START_OF_SYMBOL_DEFINITION _decode_Decimal */
export const _decode_Decimal = $._decodeReal;
/* END_OF_SYMBOL_DEFINITION _decode_Decimal */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Decimal */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Decimal */

/* START_OF_SYMBOL_DEFINITION _encode_Decimal */
export const _encode_Decimal = $._encodeReal;

/* END_OF_SYMBOL_DEFINITION _encode_Decimal */

/* eslint-enable */
