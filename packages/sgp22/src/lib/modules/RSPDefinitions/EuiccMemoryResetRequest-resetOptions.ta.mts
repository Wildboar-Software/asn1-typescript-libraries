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
 * Which parts of eUICC memory to clear. At least the bits the LPA wants cleared
 * are set. SGP.22 v3.1 §5.7.19.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EuiccMemoryResetRequest-resetOptions ::= BIT STRING {
 *     deleteOperationalProfiles(0),
 *     deleteFieldLoadedTestProfiles(1),
 *     resetDefaultSmdpAddress(2)
 * }
 * ```
 */
export
type EuiccMemoryResetRequest_resetOptions = BIT_STRING;

/**
 * @summary EuiccMemoryResetRequest_resetOptions_deleteOperationalProfiles
 * @description
 * 
 * Delete installed operational Profiles. Does not delete a provisioning
 * Profile. SGP.22 v3.1 §5.7.19 and §2.4.5.2.
 * 
 * @constant
 */
export
const EuiccMemoryResetRequest_resetOptions_deleteOperationalProfiles: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary deleteOperationalProfiles
 * @description
 * 
 * Delete installed operational Profiles. Does not delete a provisioning
 * Profile. SGP.22 v3.1 §5.7.19 and §2.4.5.2.
 * 
 * @constant
 */
export
const deleteOperationalProfiles: number = EuiccMemoryResetRequest_resetOptions_deleteOperationalProfiles; /* SHORT_NAMED_BIT */

/**
 * @summary EuiccMemoryResetRequest_resetOptions_deleteFieldLoadedTestProfiles
 * @description
 * 
 * Delete test Profiles that were loaded in the field. SGP.22 v3.1 §5.7.19.
 * 
 * @constant
 */
export
const EuiccMemoryResetRequest_resetOptions_deleteFieldLoadedTestProfiles: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary deleteFieldLoadedTestProfiles
 * @description
 * 
 * Delete test Profiles that were loaded in the field. SGP.22 v3.1 §5.7.19.
 * 
 * @constant
 */
export
const deleteFieldLoadedTestProfiles: number = EuiccMemoryResetRequest_resetOptions_deleteFieldLoadedTestProfiles; /* SHORT_NAMED_BIT */

/**
 * @summary EuiccMemoryResetRequest_resetOptions_resetDefaultSmdpAddress
 * @description
 * 
 * Clear the configured default SM-DP+ address. SGP.22 v3.1 §5.7.19.
 * 
 * @constant
 */
export
const EuiccMemoryResetRequest_resetOptions_resetDefaultSmdpAddress: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary resetDefaultSmdpAddress
 * @description
 * 
 * Clear the configured default SM-DP+ address. SGP.22 v3.1 §5.7.19.
 * 
 * @constant
 */
export
const resetDefaultSmdpAddress: number = EuiccMemoryResetRequest_resetOptions_resetDefaultSmdpAddress; /* SHORT_NAMED_BIT */
export const _decode_EuiccMemoryResetRequest_resetOptions = $._decodeBitString;
export const _encode_EuiccMemoryResetRequest_resetOptions = $._encodeBitString;


/* eslint-enable */
