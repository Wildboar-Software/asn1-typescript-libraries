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
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ISDRProprietaryApplicationTemplate-lpaeSupport ::= BIT STRING { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type ISDRProprietaryApplicationTemplate_lpaeSupport = BIT_STRING;

/**
 * @summary ISDRProprietaryApplicationTemplate_lpaeSupport_lpaeUsingCat
 * @constant
 */
export
const ISDRProprietaryApplicationTemplate_lpaeSupport_lpaeUsingCat: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary lpaeUsingCat
 * @constant
 */
export
const lpaeUsingCat: number = ISDRProprietaryApplicationTemplate_lpaeSupport_lpaeUsingCat; /* SHORT_NAMED_BIT */

/**
 * @summary ISDRProprietaryApplicationTemplate_lpaeSupport_lpaeUsingScws
 * @constant
 */
export
const ISDRProprietaryApplicationTemplate_lpaeSupport_lpaeUsingScws: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary lpaeUsingScws
 * @constant
 */
export
const lpaeUsingScws: number = ISDRProprietaryApplicationTemplate_lpaeSupport_lpaeUsingScws; /* SHORT_NAMED_BIT */
export const _decode_ISDRProprietaryApplicationTemplate_lpaeSupport = $._decodeBitString;
export const _encode_ISDRProprietaryApplicationTemplate_lpaeSupport = $._encodeBitString;


/* eslint-enable */
