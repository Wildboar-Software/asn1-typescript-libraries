/* eslint-disable */
import {
    ASN1Element as _Element,
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EuiccMemoryResetRequest_resetOptions
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EuiccMemoryResetRequest-resetOptions ::= BIT STRING { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type EuiccMemoryResetRequest_resetOptions = BIT_STRING;

/**
 * @summary EuiccMemoryResetRequest_resetOptions_deleteOperationalProfiles
 * @constant
 */
export
const EuiccMemoryResetRequest_resetOptions_deleteOperationalProfiles: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary deleteOperationalProfiles
 * @constant
 */
export
const deleteOperationalProfiles: number = EuiccMemoryResetRequest_resetOptions_deleteOperationalProfiles; /* SHORT_NAMED_BIT */

/**
 * @summary EuiccMemoryResetRequest_resetOptions_deleteFieldLoadedTestProfiles
 * @constant
 */
export
const EuiccMemoryResetRequest_resetOptions_deleteFieldLoadedTestProfiles: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary deleteFieldLoadedTestProfiles
 * @constant
 */
export
const deleteFieldLoadedTestProfiles: number = EuiccMemoryResetRequest_resetOptions_deleteFieldLoadedTestProfiles; /* SHORT_NAMED_BIT */

/**
 * @summary EuiccMemoryResetRequest_resetOptions_resetDefaultSmdpAddress
 * @constant
 */
export
const EuiccMemoryResetRequest_resetOptions_resetDefaultSmdpAddress: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary resetDefaultSmdpAddress
 * @constant
 */
export
const resetDefaultSmdpAddress: number = EuiccMemoryResetRequest_resetOptions_resetDefaultSmdpAddress; /* SHORT_NAMED_BIT */
export const _decode_EuiccMemoryResetRequest_resetOptions = $._decodeBitString;
export const _encode_EuiccMemoryResetRequest_resetOptions = $._encodeBitString;


/* eslint-enable */
