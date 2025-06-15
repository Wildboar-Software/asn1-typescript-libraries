/* eslint-disable */
import {
  TIME,
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

/* START_OF_SYMBOL_DEFINITION Date_Time */
/**
 * @summary Date_Time
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Date-Time  ::=  TIME ((SETTINGS "Basic=Date-Time Date=YMD Year=Basic Time=HMS Midnight = Start Local-or-UTC=Z"))
 * ```
 */
export type Date_Time = TIME; // TimeType
/* END_OF_SYMBOL_DEFINITION Date_Time */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Date_Time */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Date_Time */

/* START_OF_SYMBOL_DEFINITION _decode_Date_Time */
export const _decode_Date_Time = $._decodeTime;
/* END_OF_SYMBOL_DEFINITION _decode_Date_Time */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Date_Time */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Date_Time */

/* START_OF_SYMBOL_DEFINITION _encode_Date_Time */
export const _encode_Date_Time = $._encodeTime;

/* END_OF_SYMBOL_DEFINITION _encode_Date_Time */

/* eslint-enable */
