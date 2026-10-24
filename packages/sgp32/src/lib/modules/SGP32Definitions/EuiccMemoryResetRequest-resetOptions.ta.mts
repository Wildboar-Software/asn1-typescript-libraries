/* eslint-disable */
import {
    ASN1Element as _Element,
    type BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EuiccMemoryResetRequest_resetOptions
 * @description
 * 
 * Which subsets ES10b.eUICCMemoryReset deletes or resets. Any combination of
 * bits may be set (SGP.32 v1.2, section 5.9.5). A request to delete Test
 * Profiles is ignored when the eUICC does not support Test Profiles. While the
 * Emergency Profile is enabled the whole command returns ecallActive.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EuiccMemoryResetRequest-resetOptions ::= BIT STRING {
 *     deleteOperationalProfiles(0),
 *     deleteFieldLoadedTestProfiles(1),
 *     resetDefaultSmdpAddress(2),
 *     deletePreLoadedTestProfiles(3),
 *     deleteProvisioningProfiles(4),
 *     resetEimConfigData(5),
 *     resetImmediateEnableConfig(6)
 * }
 * ```
 */
export
type EuiccMemoryResetRequest_resetOptions = BIT_STRING;

/**
 * @summary EuiccMemoryResetRequest_resetOptions_deleteOperationalProfiles
 * @constant
 * @description
 * Delete every Operational Profile, enabled or not, and regardless of Profile
 * Policy Rules, plus the related metadata in the ISD-R (SGP.32 v1.2, section
 * 5.9.5).
 */
export
const EuiccMemoryResetRequest_resetOptions_deleteOperationalProfiles: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary deleteOperationalProfiles
 * @constant
 * @description
 * Delete all Operational Profiles, regardless of state or policy (SGP.32 v1.2,
 * section 5.9.5).
 */
export
const deleteOperationalProfiles: number = EuiccMemoryResetRequest_resetOptions_deleteOperationalProfiles; /* SHORT_NAMED_BIT */

/**
 * @summary EuiccMemoryResetRequest_resetOptions_deleteFieldLoadedTestProfiles
 * @constant
 * @description
 * Delete Test Profiles that were loaded in the field, that is, Test Profiles
 * that were not pre-installed (SGP.32 v1.2, section 5.9.5).
 */
export
const EuiccMemoryResetRequest_resetOptions_deleteFieldLoadedTestProfiles: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary deleteFieldLoadedTestProfiles
 * @constant
 * @description
 * Delete field-loaded Test Profiles (SGP.32 v1.2, section 5.9.5).
 */
export
const deleteFieldLoadedTestProfiles: number = EuiccMemoryResetRequest_resetOptions_deleteFieldLoadedTestProfiles; /* SHORT_NAMED_BIT */

/**
 * @summary EuiccMemoryResetRequest_resetOptions_resetDefaultSmdpAddress
 * @constant
 * @description
 * Reset the default SM-DP+ address to its initial value (SGP.32 v1.2, section
 * 5.9.5). Both ok and nothingToDelete in resetResult mean this reset
 * succeeded.
 */
export
const EuiccMemoryResetRequest_resetOptions_resetDefaultSmdpAddress: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary resetDefaultSmdpAddress
 * @constant
 * @description
 * Reset the default SM-DP+ address to its initial value (SGP.32 v1.2, section
 * 5.9.5).
 */
export
const resetDefaultSmdpAddress: number = EuiccMemoryResetRequest_resetOptions_resetDefaultSmdpAddress; /* SHORT_NAMED_BIT */

/**
 * @summary EuiccMemoryResetRequest_resetOptions_deletePreLoadedTestProfiles
 * @constant
 * @description
 * Delete Test Profiles that were pre-installed in the factory (SGP.32 v1.2,
 * section 5.9.5). How those Profiles are identified is out of scope.
 */
export
const EuiccMemoryResetRequest_resetOptions_deletePreLoadedTestProfiles: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary deletePreLoadedTestProfiles
 * @constant
 * @description
 * Delete factory pre-installed Test Profiles (SGP.32 v1.2, section 5.9.5).
 */
export
const deletePreLoadedTestProfiles: number = EuiccMemoryResetRequest_resetOptions_deletePreLoadedTestProfiles; /* SHORT_NAMED_BIT */

/**
 * @summary EuiccMemoryResetRequest_resetOptions_deleteProvisioningProfiles
 * @constant
 * @description
 * Delete Provisioning Profiles, regardless of enabled state or Profile Policy
 * Rules (SGP.32 v1.2, section 5.9.5).
 */
export
const EuiccMemoryResetRequest_resetOptions_deleteProvisioningProfiles: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary deleteProvisioningProfiles
 * @constant
 * @description
 * Delete Provisioning Profiles regardless of state or policy (SGP.32 v1.2,
 * section 5.9.5).
 */
export
const deleteProvisioningProfiles: number = EuiccMemoryResetRequest_resetOptions_deleteProvisioningProfiles; /* SHORT_NAMED_BIT */

/**
 * @summary EuiccMemoryResetRequest_resetOptions_resetEimConfigData
 * @constant
 * @description
 * Remove eIM Configuration Data of every Associated eIM (SGP.32 v1.2, sections
 * 5.9.5 and 2.10.2). The outcome is resetEimResult, included only when
 * resetResult is ok or nothingToDelete. The association-token counter stays
 * unchanged across this reset (section 2.11.1.1).
 */
export
const EuiccMemoryResetRequest_resetOptions_resetEimConfigData: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary resetEimConfigData
 * @constant
 * @description
 * Remove all Associated eIM Configuration Data (SGP.32 v1.2, section 5.9.5).
 */
export
const resetEimConfigData: number = EuiccMemoryResetRequest_resetOptions_resetEimConfigData; /* SHORT_NAMED_BIT */

/**
 * @summary EuiccMemoryResetRequest_resetOptions_resetImmediateEnableConfig
 * @constant
 * @description
 * Deactivate immediate Profile enabling and delete the data stored for it
 * (SGP.32 v1.2, section 5.9.5). The outcome is
 * resetImmediateEnableConfigResult, included only when resetResult is ok or
 * nothingToDelete.
 */
export
const EuiccMemoryResetRequest_resetOptions_resetImmediateEnableConfig: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary resetImmediateEnableConfig
 * @constant
 * @description
 * Deactivate immediate Profile enabling and clear its stored data (SGP.32
 * v1.2, section 5.9.5).
 */
export
const resetImmediateEnableConfig: number = EuiccMemoryResetRequest_resetOptions_resetImmediateEnableConfig; /* SHORT_NAMED_BIT */
export const _decode_EuiccMemoryResetRequest_resetOptions: $.ASN1Decoder<EuiccMemoryResetRequest_resetOptions> = $._decodeBitString;
export const _encode_EuiccMemoryResetRequest_resetOptions: $.ASN1Encoder<EuiccMemoryResetRequest_resetOptions> = $._encodeBitString;


/* eslint-enable */
