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

/* START_OF_SYMBOL_DEFINITION _enum_for_DTEAddress_numberingPlanId */
/**
 * @summary DTEAddress_numberingPlanId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DTEAddress-numberingPlanId ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export enum _enum_for_DTEAddress_numberingPlanId {
    unknown = 0,
    x121 = 1,
    e164 = 2,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_DTEAddress_numberingPlanId */

/* START_OF_SYMBOL_DEFINITION DTEAddress_numberingPlanId */
/**
 * @summary DTEAddress_numberingPlanId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DTEAddress-numberingPlanId ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export type DTEAddress_numberingPlanId = _enum_for_DTEAddress_numberingPlanId;
/* END_OF_SYMBOL_DEFINITION DTEAddress_numberingPlanId */

/* START_OF_SYMBOL_DEFINITION DTEAddress_numberingPlanId */
/**
 * @summary DTEAddress_numberingPlanId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DTEAddress-numberingPlanId ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export const DTEAddress_numberingPlanId = _enum_for_DTEAddress_numberingPlanId;
/* END_OF_SYMBOL_DEFINITION DTEAddress_numberingPlanId */

/* START_OF_SYMBOL_DEFINITION DTEAddress_numberingPlanId_unknown */
/**
 * @summary DTEAddress_numberingPlanId_unknown
 * @constant
 * @type {number}
 */
export const DTEAddress_numberingPlanId_unknown: DTEAddress_numberingPlanId =
    DTEAddress_numberingPlanId.unknown; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION DTEAddress_numberingPlanId_unknown */

/* START_OF_SYMBOL_DEFINITION unknown */
/**
 * @summary unknown
 * @constant
 * @type {number}
 */
export const unknown: DTEAddress_numberingPlanId =
    DTEAddress_numberingPlanId.unknown; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION unknown */

/* START_OF_SYMBOL_DEFINITION DTEAddress_numberingPlanId_x121 */
/**
 * @summary DTEAddress_numberingPlanId_x121
 * @constant
 * @type {number}
 */
export const DTEAddress_numberingPlanId_x121: DTEAddress_numberingPlanId =
    DTEAddress_numberingPlanId.x121; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION DTEAddress_numberingPlanId_x121 */

/* START_OF_SYMBOL_DEFINITION x121 */
/**
 * @summary x121
 * @constant
 * @type {number}
 */
export const x121: DTEAddress_numberingPlanId =
    DTEAddress_numberingPlanId.x121; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION x121 */

/* START_OF_SYMBOL_DEFINITION DTEAddress_numberingPlanId_e164 */
/**
 * @summary DTEAddress_numberingPlanId_e164
 * @constant
 * @type {number}
 */
export const DTEAddress_numberingPlanId_e164: DTEAddress_numberingPlanId =
    DTEAddress_numberingPlanId.e164; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION DTEAddress_numberingPlanId_e164 */

/* START_OF_SYMBOL_DEFINITION e164 */
/**
 * @summary e164
 * @constant
 * @type {number}
 */
export const e164: DTEAddress_numberingPlanId =
    DTEAddress_numberingPlanId.e164; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION e164 */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DTEAddress_numberingPlanId */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DTEAddress_numberingPlanId */

/* START_OF_SYMBOL_DEFINITION _decode_DTEAddress_numberingPlanId */
export const _decode_DTEAddress_numberingPlanId = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_DTEAddress_numberingPlanId */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DTEAddress_numberingPlanId */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DTEAddress_numberingPlanId */

/* START_OF_SYMBOL_DEFINITION _encode_DTEAddress_numberingPlanId */
export const _encode_DTEAddress_numberingPlanId = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_DTEAddress_numberingPlanId */

/* eslint-enable */
