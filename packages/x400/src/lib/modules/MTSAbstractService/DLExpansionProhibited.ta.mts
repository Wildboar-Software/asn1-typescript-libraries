/* eslint-disable */
import {
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

/* START_OF_SYMBOL_DEFINITION _enum_for_DLExpansionProhibited */
/**
 * @summary DLExpansionProhibited
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DLExpansionProhibited  ::=  ENUMERATED {
 *   dl-expansion-allowed(0), dl-expansion-prohibited(1)}
 * ```@enum {number}
 */
export enum _enum_for_DLExpansionProhibited {
    dl_expansion_allowed = 0,
    dl_expansion_prohibited = 1,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_DLExpansionProhibited */

/* START_OF_SYMBOL_DEFINITION DLExpansionProhibited */
/**
 * @summary DLExpansionProhibited
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DLExpansionProhibited  ::=  ENUMERATED {
 *   dl-expansion-allowed(0), dl-expansion-prohibited(1)}
 * ```@enum {number}
 */
export type DLExpansionProhibited = _enum_for_DLExpansionProhibited;
/* END_OF_SYMBOL_DEFINITION DLExpansionProhibited */

/* START_OF_SYMBOL_DEFINITION DLExpansionProhibited */
/**
 * @summary DLExpansionProhibited
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DLExpansionProhibited  ::=  ENUMERATED {
 *   dl-expansion-allowed(0), dl-expansion-prohibited(1)}
 * ```@enum {number}
 */
export const DLExpansionProhibited = _enum_for_DLExpansionProhibited;
/* END_OF_SYMBOL_DEFINITION DLExpansionProhibited */

/* START_OF_SYMBOL_DEFINITION DLExpansionProhibited_dl_expansion_allowed */
/**
 * @summary DLExpansionProhibited_dl_expansion_allowed
 * @constant
 * @type {number}
 */
export const DLExpansionProhibited_dl_expansion_allowed: DLExpansionProhibited =
    DLExpansionProhibited.dl_expansion_allowed; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION DLExpansionProhibited_dl_expansion_allowed */

/* START_OF_SYMBOL_DEFINITION dl_expansion_allowed */
/**
 * @summary dl_expansion_allowed
 * @constant
 * @type {number}
 */
export const dl_expansion_allowed: DLExpansionProhibited =
    DLExpansionProhibited.dl_expansion_allowed; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION dl_expansion_allowed */

/* START_OF_SYMBOL_DEFINITION DLExpansionProhibited_dl_expansion_prohibited */
/**
 * @summary DLExpansionProhibited_dl_expansion_prohibited
 * @constant
 * @type {number}
 */
export const DLExpansionProhibited_dl_expansion_prohibited: DLExpansionProhibited =
    DLExpansionProhibited.dl_expansion_prohibited; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION DLExpansionProhibited_dl_expansion_prohibited */

/* START_OF_SYMBOL_DEFINITION dl_expansion_prohibited */
/**
 * @summary dl_expansion_prohibited
 * @constant
 * @type {number}
 */
export const dl_expansion_prohibited: DLExpansionProhibited =
    DLExpansionProhibited.dl_expansion_prohibited; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION dl_expansion_prohibited */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DLExpansionProhibited */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DLExpansionProhibited */

/* START_OF_SYMBOL_DEFINITION _decode_DLExpansionProhibited */
export const _decode_DLExpansionProhibited = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_DLExpansionProhibited */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DLExpansionProhibited */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DLExpansionProhibited */

/* START_OF_SYMBOL_DEFINITION _encode_DLExpansionProhibited */
export const _encode_DLExpansionProhibited = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_DLExpansionProhibited */

/* eslint-enable */
