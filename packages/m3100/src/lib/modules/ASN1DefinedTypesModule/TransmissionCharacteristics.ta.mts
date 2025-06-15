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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';

/* START_OF_SYMBOL_DEFINITION TransmissionCharacteristics */
/**
 * @summary TransmissionCharacteristics
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TransmissionCharacteristics  ::=  BIT STRING {
 *   satellite(0), dCME(1), echoControl(2)}
 * ```
 */
export type TransmissionCharacteristics = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION TransmissionCharacteristics */

/* START_OF_SYMBOL_DEFINITION TransmissionCharacteristics_satellite */
/**
 * @summary TransmissionCharacteristics_satellite
 * @constant
 */
export const TransmissionCharacteristics_satellite: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION TransmissionCharacteristics_satellite */

/* START_OF_SYMBOL_DEFINITION satellite */
/**
 * @summary satellite
 * @constant
 */
export const satellite: number = TransmissionCharacteristics_satellite; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION satellite */

/* START_OF_SYMBOL_DEFINITION TransmissionCharacteristics_dCME */
/**
 * @summary TransmissionCharacteristics_dCME
 * @constant
 */
export const TransmissionCharacteristics_dCME: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION TransmissionCharacteristics_dCME */

/* START_OF_SYMBOL_DEFINITION dCME */
/**
 * @summary dCME
 * @constant
 */
export const dCME: number = TransmissionCharacteristics_dCME; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION dCME */

/* START_OF_SYMBOL_DEFINITION TransmissionCharacteristics_echoControl */
/**
 * @summary TransmissionCharacteristics_echoControl
 * @constant
 */
export const TransmissionCharacteristics_echoControl: number = 2; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION TransmissionCharacteristics_echoControl */

/* START_OF_SYMBOL_DEFINITION echoControl */
/**
 * @summary echoControl
 * @constant
 */
export const echoControl: number = TransmissionCharacteristics_echoControl; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION echoControl */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TransmissionCharacteristics */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TransmissionCharacteristics */

/* START_OF_SYMBOL_DEFINITION _decode_TransmissionCharacteristics */
export const _decode_TransmissionCharacteristics = $._decodeBitString;
/* END_OF_SYMBOL_DEFINITION _decode_TransmissionCharacteristics */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TransmissionCharacteristics */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TransmissionCharacteristics */

/* START_OF_SYMBOL_DEFINITION _encode_TransmissionCharacteristics */
export const _encode_TransmissionCharacteristics = $._encodeBitString;

/* END_OF_SYMBOL_DEFINITION _encode_TransmissionCharacteristics */

/* eslint-enable */
