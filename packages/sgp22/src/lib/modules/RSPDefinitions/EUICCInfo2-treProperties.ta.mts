/* eslint-disable */
import {
    ASN1Element as _Element,
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EUICCInfo2_treProperties
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EUICCInfo2-treProperties ::= BIT STRING { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type EUICCInfo2_treProperties = BIT_STRING;

/**
 * @summary EUICCInfo2_treProperties_isDiscrete
 * @constant
 */
export
const EUICCInfo2_treProperties_isDiscrete: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary isDiscrete
 * @constant
 */
export
const isDiscrete: number = EUICCInfo2_treProperties_isDiscrete; /* SHORT_NAMED_BIT */

/**
 * @summary EUICCInfo2_treProperties_isIntegrated
 * @constant
 */
export
const EUICCInfo2_treProperties_isIntegrated: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary isIntegrated
 * @constant
 */
export
const isIntegrated: number = EUICCInfo2_treProperties_isIntegrated; /* SHORT_NAMED_BIT */

/**
 * @summary EUICCInfo2_treProperties_usesRemoteMemory
 * @constant
 */
export
const EUICCInfo2_treProperties_usesRemoteMemory: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary usesRemoteMemory
 * @constant
 */
export
const usesRemoteMemory: number = EUICCInfo2_treProperties_usesRemoteMemory; /* SHORT_NAMED_BIT */
export const _decode_EUICCInfo2_treProperties = $._decodeBitString;
export const _encode_EUICCInfo2_treProperties = $._encodeBitString;


/* eslint-enable */
