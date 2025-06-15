/* eslint-disable */
import {
    UTCTime,
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

/* START_OF_SYMBOL_DEFINITION DateAndTimeOfPreparationField */
/**
 * @summary DateAndTimeOfPreparationField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DateAndTimeOfPreparationField  ::=  UTCTime
 * ```
 */
export type DateAndTimeOfPreparationField = UTCTime; // UTCTime
/* END_OF_SYMBOL_DEFINITION DateAndTimeOfPreparationField */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DateAndTimeOfPreparationField */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DateAndTimeOfPreparationField */

/* START_OF_SYMBOL_DEFINITION _decode_DateAndTimeOfPreparationField */
export const _decode_DateAndTimeOfPreparationField = $._decodeUTCTime;
/* END_OF_SYMBOL_DEFINITION _decode_DateAndTimeOfPreparationField */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DateAndTimeOfPreparationField */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DateAndTimeOfPreparationField */

/* START_OF_SYMBOL_DEFINITION _encode_DateAndTimeOfPreparationField */
export const _encode_DateAndTimeOfPreparationField = $._encodeUTCTime;

/* END_OF_SYMBOL_DEFINITION _encode_DateAndTimeOfPreparationField */

/* eslint-enable */
