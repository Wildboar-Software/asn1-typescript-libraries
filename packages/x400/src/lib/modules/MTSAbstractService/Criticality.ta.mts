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

/* START_OF_SYMBOL_DEFINITION Criticality */
/**
 * @summary Criticality
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Criticality  ::=  BIT STRING {for-submission(0), for-transfer(1), for-delivery(2)
 * }(SIZE (0..ub-bit-options))
 * ```
 */
export type Criticality = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION Criticality */

/* START_OF_SYMBOL_DEFINITION Criticality_for_submission */
/**
 * @summary Criticality_for_submission
 * @constant
 */
export const Criticality_for_submission: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Criticality_for_submission */

/* START_OF_SYMBOL_DEFINITION for_submission */
/**
 * @summary for_submission
 * @constant
 */
export const for_submission: number = Criticality_for_submission; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION for_submission */

/* START_OF_SYMBOL_DEFINITION Criticality_for_transfer */
/**
 * @summary Criticality_for_transfer
 * @constant
 */
export const Criticality_for_transfer: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Criticality_for_transfer */

/* START_OF_SYMBOL_DEFINITION for_transfer */
/**
 * @summary for_transfer
 * @constant
 */
export const for_transfer: number = Criticality_for_transfer; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION for_transfer */

/* START_OF_SYMBOL_DEFINITION Criticality_for_delivery */
/**
 * @summary Criticality_for_delivery
 * @constant
 */
export const Criticality_for_delivery: number = 2; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Criticality_for_delivery */

/* START_OF_SYMBOL_DEFINITION for_delivery */
/**
 * @summary for_delivery
 * @constant
 */
export const for_delivery: number = Criticality_for_delivery; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION for_delivery */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Criticality */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Criticality */

/* START_OF_SYMBOL_DEFINITION _decode_Criticality */
export const _decode_Criticality = $._decodeBitString;
/* END_OF_SYMBOL_DEFINITION _decode_Criticality */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Criticality */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Criticality */

/* START_OF_SYMBOL_DEFINITION _encode_Criticality */
export const _encode_Criticality = $._encodeBitString;

/* END_OF_SYMBOL_DEFINITION _encode_Criticality */

/* eslint-enable */
