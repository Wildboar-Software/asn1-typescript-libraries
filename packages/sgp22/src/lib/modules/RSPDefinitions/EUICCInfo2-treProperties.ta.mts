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
 * How the tamper-resistant element is built. Mandatory for an integrated eUICC.
 * `usesRemoteMemory` means remote memory protected by the Remote Memory
 * Protection Function in SGP.21. SGP.22 v3.1 §4.3.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EUICCInfo2-treProperties ::= BIT STRING {
 *     isDiscrete(0),
 *     isIntegrated(1),
 *     usesRemoteMemory(2) -- refers to the usage of remote memory protected by the Remote Memory Protection Function described in SGP.21 [4]
 * }
 * ```
 */
export
type EUICCInfo2_treProperties = BIT_STRING;

/**
 * @summary EUICCInfo2_treProperties_isDiscrete
 * @description
 * 
 * The tamper-resistant element is a discrete secure element. SGP.22 v3.1 §4.3.
 * 
 * @constant
 */
export
const EUICCInfo2_treProperties_isDiscrete: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary isDiscrete
 * @description
 * 
 * The tamper-resistant element is a discrete secure element. SGP.22 v3.1 §4.3.
 * 
 * @constant
 */
export
const isDiscrete: number = EUICCInfo2_treProperties_isDiscrete; /* SHORT_NAMED_BIT */

/**
 * @summary EUICCInfo2_treProperties_isIntegrated
 * @description
 * 
 * The tamper-resistant element is integrated. This bitmap is mandatory for an
 * integrated eUICC. SGP.22 v3.1 §4.3.
 * 
 * @constant
 */
export
const EUICCInfo2_treProperties_isIntegrated: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary isIntegrated
 * @description
 * 
 * The tamper-resistant element is integrated. This bitmap is mandatory for an
 * integrated eUICC. SGP.22 v3.1 §4.3.
 * 
 * @constant
 */
export
const isIntegrated: number = EUICCInfo2_treProperties_isIntegrated; /* SHORT_NAMED_BIT */

/**
 * @summary EUICCInfo2_treProperties_usesRemoteMemory
 * @description
 * 
 * Uses remote memory protected by the Remote Memory Protection Function
 * described in SGP.21. SGP.22 v3.1 Annex H.
 * 
 * @constant
 */
export
const EUICCInfo2_treProperties_usesRemoteMemory: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary usesRemoteMemory
 * @description
 * 
 * Uses remote memory protected by the Remote Memory Protection Function
 * described in SGP.21. SGP.22 v3.1 Annex H.
 * 
 * @constant
 */
export
const usesRemoteMemory: number = EUICCInfo2_treProperties_usesRemoteMemory; /* SHORT_NAMED_BIT */
export const _decode_EUICCInfo2_treProperties = $._decodeBitString;
export const _encode_EUICCInfo2_treProperties = $._encodeBitString;


/* eslint-enable */
