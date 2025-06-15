/* eslint-disable */
import {
    INTEGER,
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

/* START_OF_SYMBOL_DEFINITION BilateralDeferral */
/**
 * @summary BilateralDeferral
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BilateralDeferral  ::=  INTEGER {agreement(0), no-agreement(1)}
 * ```
 */
export type BilateralDeferral = INTEGER;
/* END_OF_SYMBOL_DEFINITION BilateralDeferral */

/* START_OF_SYMBOL_DEFINITION BilateralDeferral_agreement */
/**
 * @summary BilateralDeferral_agreement
 * @constant
 * @type {number}
 */
export const BilateralDeferral_agreement: BilateralDeferral = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION BilateralDeferral_agreement */

/* START_OF_SYMBOL_DEFINITION agreement */
/**
 * @summary BilateralDeferral_agreement
 * @constant
 * @type {number}
 */
export const agreement: BilateralDeferral = BilateralDeferral_agreement; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION agreement */

/* START_OF_SYMBOL_DEFINITION BilateralDeferral_no_agreement */
/**
 * @summary BilateralDeferral_no_agreement
 * @constant
 * @type {number}
 */
export const BilateralDeferral_no_agreement: BilateralDeferral = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION BilateralDeferral_no_agreement */

/* START_OF_SYMBOL_DEFINITION no_agreement */
/**
 * @summary BilateralDeferral_no_agreement
 * @constant
 * @type {number}
 */
export const no_agreement: BilateralDeferral = BilateralDeferral_no_agreement; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION no_agreement */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BilateralDeferral */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BilateralDeferral */

/* START_OF_SYMBOL_DEFINITION _decode_BilateralDeferral */
export const _decode_BilateralDeferral = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_BilateralDeferral */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BilateralDeferral */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BilateralDeferral */

/* START_OF_SYMBOL_DEFINITION _encode_BilateralDeferral */
export const _encode_BilateralDeferral = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_BilateralDeferral */

/* eslint-enable */
