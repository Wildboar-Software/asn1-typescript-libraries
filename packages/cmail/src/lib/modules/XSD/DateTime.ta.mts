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

/* START_OF_SYMBOL_DEFINITION DateTime */
/**
 * @summary DateTime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DateTime  ::=  TIME ((SETTINGS "Basic=Date-Time Date=YMD Midnight=Start"))
 * (CONSTRAINED BY {/ *The time-zone shall be in the range -14 to +14* /})
 * (CONSTRAINED BY {/ *The seconds and fractions of a second shall be less
 *                    than 60 (no leap seconds supported, in accordance with
 *                    W3C XML Schema 1.0 Part 2, 3.2.7)* /})
 * (CONSTRAINED BY {/ *The type is constrained to "Time=HMSFn" for any n* /})
 * ```
 */
export type DateTime = TIME; // TimeType
/* END_OF_SYMBOL_DEFINITION DateTime */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DateTime */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DateTime */

/* START_OF_SYMBOL_DEFINITION _decode_DateTime */
export const _decode_DateTime = $._decodeTime;
/* END_OF_SYMBOL_DEFINITION _decode_DateTime */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DateTime */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DateTime */

/* START_OF_SYMBOL_DEFINITION _encode_DateTime */
export const _encode_DateTime = $._encodeTime;

/* END_OF_SYMBOL_DEFINITION _encode_DateTime */

/* eslint-enable */
