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

/* START_OF_SYMBOL_DEFINITION Presentation_requirements */
/**
 * @summary Presentation_requirements
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Presentation-requirements  ::=  BIT STRING {context-management(0), restoration(1)
 * }
 * ```
 */
export type Presentation_requirements = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION Presentation_requirements */

/* START_OF_SYMBOL_DEFINITION Presentation_requirements_context_management */
/**
 * @summary Presentation_requirements_context_management
 * @constant
 */
export const Presentation_requirements_context_management: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Presentation_requirements_context_management */

/* START_OF_SYMBOL_DEFINITION context_management */
/**
 * @summary context_management
 * @constant
 */
export const context_management: number = Presentation_requirements_context_management; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION context_management */

/* START_OF_SYMBOL_DEFINITION Presentation_requirements_restoration */
/**
 * @summary Presentation_requirements_restoration
 * @constant
 */
export const Presentation_requirements_restoration: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Presentation_requirements_restoration */

/* START_OF_SYMBOL_DEFINITION restoration */
/**
 * @summary restoration
 * @constant
 */
export const restoration: number = Presentation_requirements_restoration; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION restoration */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Presentation_requirements */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Presentation_requirements */

/* START_OF_SYMBOL_DEFINITION _decode_Presentation_requirements */
export const _decode_Presentation_requirements = $._decodeBitString;
/* END_OF_SYMBOL_DEFINITION _decode_Presentation_requirements */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Presentation_requirements */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Presentation_requirements */

/* START_OF_SYMBOL_DEFINITION _encode_Presentation_requirements */
export const _encode_Presentation_requirements = $._encodeBitString;

/* END_OF_SYMBOL_DEFINITION _encode_Presentation_requirements */

/* eslint-enable */
