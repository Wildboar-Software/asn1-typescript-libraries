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

/* START_OF_SYMBOL_DEFINITION Time */
/**
 * @summary Time
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Time  ::=  TIME ((SETTINGS "Basic=Time")
 *                          EXCEPT (SETTINGS "Midnight=End"))
 * (CONSTRAINED BY {/ *The time-zone shall be in the range -14 to +14* /})
 * (CONSTRAINED BY {/ *The seconds and fractions of a second shall be less
 *                    than 60 (no leap seconds supported, in accordance with
 *                    W3C XML Schema 1.0 Part 2, D.2)* /})
 * (CONSTRAINED BY {/ *Constrained to "Time=HMSFn" for any n* /})
 * ```
 */
export type Time = TIME; // TimeType
/* END_OF_SYMBOL_DEFINITION Time */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Time */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Time */

/* START_OF_SYMBOL_DEFINITION _decode_Time */
export const _decode_Time = $._decodeTime;
/* END_OF_SYMBOL_DEFINITION _decode_Time */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Time */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Time */

/* START_OF_SYMBOL_DEFINITION _encode_Time */
export const _encode_Time = $._encodeTime;

/* END_OF_SYMBOL_DEFINITION _encode_Time */

/* eslint-enable */
