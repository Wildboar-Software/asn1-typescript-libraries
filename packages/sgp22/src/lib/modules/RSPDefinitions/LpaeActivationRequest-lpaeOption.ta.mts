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
 * Which on-card LPA to activate. Exactly one bit is set. SGP.22 v3.1 §5.7.1.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LpaeActivationRequest-lpaeOption ::= BIT STRING {
 *     activateCatBasedLpae(0), -- LPAe with LUIe based on CAT
 *     activateScwsBasedLpae(1) -- LPAe with LUIe based on SCWS
 * }
 * ```
 */
export
type LpaeActivationRequest_lpaeOption = BIT_STRING;

/**
 * @summary LpaeActivationRequest_lpaeOption_activateCatBasedLpae
 * @description
 * 
 * Activate LPAe with the user interface driven by CAT. SGP.22 v3.1 §5.7.1.
 * 
 * @constant
 */
export
const LpaeActivationRequest_lpaeOption_activateCatBasedLpae: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary activateCatBasedLpae
 * @description
 * 
 * Activate LPAe with the user interface driven by CAT. SGP.22 v3.1 §5.7.1.
 * 
 * @constant
 */
export
const activateCatBasedLpae: number = LpaeActivationRequest_lpaeOption_activateCatBasedLpae; /* SHORT_NAMED_BIT */

/**
 * @summary LpaeActivationRequest_lpaeOption_activateScwsBasedLpae
 * @description
 * 
 * Activate LPAe with the user interface driven by the Smart Card Web Server.
 * SGP.22 v3.1 §5.7.1.
 * 
 * @constant
 */
export
const LpaeActivationRequest_lpaeOption_activateScwsBasedLpae: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary activateScwsBasedLpae
 * @description
 * 
 * Activate LPAe with the user interface driven by the Smart Card Web Server.
 * SGP.22 v3.1 §5.7.1.
 * 
 * @constant
 */
export
const activateScwsBasedLpae: number = LpaeActivationRequest_lpaeOption_activateScwsBasedLpae; /* SHORT_NAMED_BIT */
export const _decode_LpaeActivationRequest_lpaeOption = $._decodeBitString;
export const _encode_LpaeActivationRequest_lpaeOption = $._encodeBitString;


/* eslint-enable */
