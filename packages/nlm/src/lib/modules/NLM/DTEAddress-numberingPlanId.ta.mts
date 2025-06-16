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


/**
 * @summary DTEAddress_numberingPlanId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DTEAddress-numberingPlanId ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_DTEAddress_numberingPlanId {
    unknown = 0,
    x121 = 1,
    e164 = 2,
}


/**
 * @summary DTEAddress_numberingPlanId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DTEAddress-numberingPlanId ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export type DTEAddress_numberingPlanId = _enum_for_DTEAddress_numberingPlanId;


/**
 * @summary DTEAddress_numberingPlanId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DTEAddress-numberingPlanId ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export const DTEAddress_numberingPlanId = _enum_for_DTEAddress_numberingPlanId;


/**
 * @summary DTEAddress_numberingPlanId_unknown
 * @constant
 * @type {number}
 */
export const DTEAddress_numberingPlanId_unknown: DTEAddress_numberingPlanId =
    DTEAddress_numberingPlanId.unknown; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary unknown
 * @constant
 * @type {number}
 */
export const unknown: DTEAddress_numberingPlanId =
    DTEAddress_numberingPlanId.unknown; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary DTEAddress_numberingPlanId_x121
 * @constant
 * @type {number}
 */
export const DTEAddress_numberingPlanId_x121: DTEAddress_numberingPlanId =
    DTEAddress_numberingPlanId.x121; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary x121
 * @constant
 * @type {number}
 */
export const x121: DTEAddress_numberingPlanId =
    DTEAddress_numberingPlanId.x121; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary DTEAddress_numberingPlanId_e164
 * @constant
 * @type {number}
 */
export const DTEAddress_numberingPlanId_e164: DTEAddress_numberingPlanId =
    DTEAddress_numberingPlanId.e164; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary e164
 * @constant
 * @type {number}
 */
export const e164: DTEAddress_numberingPlanId =
    DTEAddress_numberingPlanId.e164; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_DTEAddress_numberingPlanId = $._decodeEnumerated;




export const _encode_DTEAddress_numberingPlanId = $._encodeEnumerated;


/* eslint-enable */
