/* eslint-disable */
import {
    ASN1Element as _Element,
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ISDRProprietaryApplicationTemplate_lpaeSupport
 * @description
 * 
 * Which on-card LPA options the ISD-R reports at selection time. The Device may
 * activate exactly one of them with `LpaeActivationRequest` when it supports
 * that option. SGP.22 v3.1 §5.7.1. v3.1 also allocates bits for "an enabled
 * Profile is present" and for E4 ENVELOPE, which this module does not declare.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ISDRProprietaryApplicationTemplate-lpaeSupport ::= BIT STRING {
 *     lpaeUsingCat(0), -- LPA in the eUICC using Card Application Toolkit
 *     lpaeUsingScws(1) -- LPA in the eUICC using Smartcard Web Server
 * }
 * ```
 */
export
type ISDRProprietaryApplicationTemplate_lpaeSupport = BIT_STRING;

/**
 * @summary ISDRProprietaryApplicationTemplate_lpaeSupport_lpaeUsingCat
 * @description
 * 
 * An LPA in the eUICC can use the Card Application Toolkit. SGP.22 v3.1 §5.7.1.
 * 
 * @constant
 */
export
const ISDRProprietaryApplicationTemplate_lpaeSupport_lpaeUsingCat: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary lpaeUsingCat
 * @description
 * 
 * An LPA in the eUICC can use the Card Application Toolkit. SGP.22 v3.1 §5.7.1.
 * 
 * @constant
 */
export
const lpaeUsingCat: number = ISDRProprietaryApplicationTemplate_lpaeSupport_lpaeUsingCat; /* SHORT_NAMED_BIT */

/**
 * @summary ISDRProprietaryApplicationTemplate_lpaeSupport_lpaeUsingScws
 * @description
 * 
 * An LPA in the eUICC can use the Smart Card Web Server. SGP.22 v3.1 §5.7.1.
 * 
 * @constant
 */
export
const ISDRProprietaryApplicationTemplate_lpaeSupport_lpaeUsingScws: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary lpaeUsingScws
 * @description
 * 
 * An LPA in the eUICC can use the Smart Card Web Server. SGP.22 v3.1 §5.7.1.
 * 
 * @constant
 */
export
const lpaeUsingScws: number = ISDRProprietaryApplicationTemplate_lpaeSupport_lpaeUsingScws; /* SHORT_NAMED_BIT */
export const _decode_ISDRProprietaryApplicationTemplate_lpaeSupport = $._decodeBitString;
export const _encode_ISDRProprietaryApplicationTemplate_lpaeSupport = $._encodeBitString;


/* eslint-enable */
