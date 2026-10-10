/* eslint-disable */
import {
    ASN1Element as _Element,
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CatSupportedClasses
 * @description
 * 
 * Card Application Toolkit classes the Device supports, from ETSI TS 102 223.
 * SGP.22 v3.1 Annex H names bits 0..38 as letter classes `a` through `z` and
 * then `aa` through `am`. This module types the value as an un-named BIT
 * STRING, so those bit numbers are not declared here. Included in `DeviceInfo`
 * only when the eUICC supports extensible DeviceInfo (§4.2).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CatSupportedClasses  ::=  BIT STRING
 * ```
 */
export
type CatSupportedClasses = BIT_STRING;
export const _decode_CatSupportedClasses = $._decodeBitString;
export const _encode_CatSupportedClasses = $._encodeBitString;


/* eslint-enable */
