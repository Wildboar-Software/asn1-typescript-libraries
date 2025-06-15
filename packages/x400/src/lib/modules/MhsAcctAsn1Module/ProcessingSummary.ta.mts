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

/* START_OF_SYMBOL_DEFINITION ProcessingSummary */
/**
 * @summary ProcessingSummary
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProcessingSummary  ::=  BIT STRING {
 *   idle(0), processed(1), rejected(2), name-resolution(3), dl-expansion(4),
 *   redirection(5), deferred-delivery(6), conversion(7), securityContextCheck(8)
 * }
 * ```
 */
export type ProcessingSummary = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION ProcessingSummary */

/* START_OF_SYMBOL_DEFINITION ProcessingSummary_idle */
/**
 * @summary ProcessingSummary_idle
 * @constant
 */
export const ProcessingSummary_idle: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION ProcessingSummary_idle */

/* START_OF_SYMBOL_DEFINITION idle */
/**
 * @summary idle
 * @constant
 */
export const idle: number = ProcessingSummary_idle; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION idle */

/* START_OF_SYMBOL_DEFINITION ProcessingSummary_processed */
/**
 * @summary ProcessingSummary_processed
 * @constant
 */
export const ProcessingSummary_processed: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION ProcessingSummary_processed */

/* START_OF_SYMBOL_DEFINITION processed */
/**
 * @summary processed
 * @constant
 */
export const processed: number = ProcessingSummary_processed; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION processed */

/* START_OF_SYMBOL_DEFINITION ProcessingSummary_rejected */
/**
 * @summary ProcessingSummary_rejected
 * @constant
 */
export const ProcessingSummary_rejected: number = 2; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION ProcessingSummary_rejected */

/* START_OF_SYMBOL_DEFINITION rejected */
/**
 * @summary rejected
 * @constant
 */
export const rejected: number = ProcessingSummary_rejected; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION rejected */

/* START_OF_SYMBOL_DEFINITION ProcessingSummary_name_resolution */
/**
 * @summary ProcessingSummary_name_resolution
 * @constant
 */
export const ProcessingSummary_name_resolution: number = 3; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION ProcessingSummary_name_resolution */

/* START_OF_SYMBOL_DEFINITION name_resolution */
/**
 * @summary name_resolution
 * @constant
 */
export const name_resolution: number = ProcessingSummary_name_resolution; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION name_resolution */

/* START_OF_SYMBOL_DEFINITION ProcessingSummary_dl_expansion */
/**
 * @summary ProcessingSummary_dl_expansion
 * @constant
 */
export const ProcessingSummary_dl_expansion: number = 4; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION ProcessingSummary_dl_expansion */

/* START_OF_SYMBOL_DEFINITION dl_expansion */
/**
 * @summary dl_expansion
 * @constant
 */
export const dl_expansion: number = ProcessingSummary_dl_expansion; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION dl_expansion */

/* START_OF_SYMBOL_DEFINITION ProcessingSummary_redirection */
/**
 * @summary ProcessingSummary_redirection
 * @constant
 */
export const ProcessingSummary_redirection: number = 5; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION ProcessingSummary_redirection */

/* START_OF_SYMBOL_DEFINITION redirection */
/**
 * @summary redirection
 * @constant
 */
export const redirection: number = ProcessingSummary_redirection; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION redirection */

/* START_OF_SYMBOL_DEFINITION ProcessingSummary_deferred_delivery */
/**
 * @summary ProcessingSummary_deferred_delivery
 * @constant
 */
export const ProcessingSummary_deferred_delivery: number = 6; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION ProcessingSummary_deferred_delivery */

/* START_OF_SYMBOL_DEFINITION deferred_delivery */
/**
 * @summary deferred_delivery
 * @constant
 */
export const deferred_delivery: number = ProcessingSummary_deferred_delivery; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION deferred_delivery */

/* START_OF_SYMBOL_DEFINITION ProcessingSummary_conversion */
/**
 * @summary ProcessingSummary_conversion
 * @constant
 */
export const ProcessingSummary_conversion: number = 7; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION ProcessingSummary_conversion */

/* START_OF_SYMBOL_DEFINITION conversion */
/**
 * @summary conversion
 * @constant
 */
export const conversion: number = ProcessingSummary_conversion; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION conversion */

/* START_OF_SYMBOL_DEFINITION ProcessingSummary_securityContextCheck */
/**
 * @summary ProcessingSummary_securityContextCheck
 * @constant
 */
export const ProcessingSummary_securityContextCheck: number = 8; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION ProcessingSummary_securityContextCheck */

/* START_OF_SYMBOL_DEFINITION securityContextCheck */
/**
 * @summary securityContextCheck
 * @constant
 */
export const securityContextCheck: number = ProcessingSummary_securityContextCheck; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION securityContextCheck */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ProcessingSummary */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ProcessingSummary */

/* START_OF_SYMBOL_DEFINITION _decode_ProcessingSummary */
export const _decode_ProcessingSummary = $._decodeBitString;
/* END_OF_SYMBOL_DEFINITION _decode_ProcessingSummary */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ProcessingSummary */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ProcessingSummary */

/* START_OF_SYMBOL_DEFINITION _encode_ProcessingSummary */
export const _encode_ProcessingSummary = $._encodeBitString;

/* END_OF_SYMBOL_DEFINITION _encode_ProcessingSummary */

/* eslint-enable */
