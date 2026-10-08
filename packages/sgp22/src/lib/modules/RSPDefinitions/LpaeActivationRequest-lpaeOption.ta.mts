/* eslint-disable */
import {
    ASN1Element as _Element,
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary LpaeActivationRequest_lpaeOption
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LpaeActivationRequest-lpaeOption ::= BIT STRING { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type LpaeActivationRequest_lpaeOption = BIT_STRING;

/**
 * @summary LpaeActivationRequest_lpaeOption_activateCatBasedLpae
 * @constant
 */
export
const LpaeActivationRequest_lpaeOption_activateCatBasedLpae: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary activateCatBasedLpae
 * @constant
 */
export
const activateCatBasedLpae: number = LpaeActivationRequest_lpaeOption_activateCatBasedLpae; /* SHORT_NAMED_BIT */

/**
 * @summary LpaeActivationRequest_lpaeOption_activateScwsBasedLpae
 * @constant
 */
export
const LpaeActivationRequest_lpaeOption_activateScwsBasedLpae: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary activateScwsBasedLpae
 * @constant
 */
export
const activateScwsBasedLpae: number = LpaeActivationRequest_lpaeOption_activateScwsBasedLpae; /* SHORT_NAMED_BIT */
export const _decode_LpaeActivationRequest_lpaeOption = $._decodeBitString;
export const _encode_LpaeActivationRequest_lpaeOption = $._encodeBitString;


/* eslint-enable */
