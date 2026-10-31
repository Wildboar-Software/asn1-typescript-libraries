/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { gLUE2Resource } from "../LdapGlue510Resource/gLUE2Resource.oa.mjs";
// export { id_oc_gLUE2ExecutionEnvironment } from "../LdapGlue606ExecutionEnvironment/id-oc-gLUE2ExecutionEnvironment.va.mjs";


/**
 * @summary gLUE2ExecutionEnvironment
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gLUE2ExecutionEnvironment OBJECT-CLASS ::= {
 *   SUBCLASS OF               { gLUE2Resource }
 *   MUST CONTAIN              { gLUE2ExecutionEnvironmentPlatform
 *                               | gLUE2ExecutionEnvironmentMainMemorySize
 *                               | gLUE2ExecutionEnvironmentOSFamily
 *                               | gLUE2ExecutionEnvironmentConnectivityIn
 *                               | gLUE2ExecutionEnvironmentConnectivityOut }
 *   MAY CONTAIN               { gLUE2ExecutionEnvironmentVirtualMachine
 *                               | gLUE2ExecutionEnvironmentTotalInstances
 *                               | gLUE2ExecutionEnvironmentUsedInstances
 *                               | gLUE2ExecutionEnvironmentUnavailableInstances
 *                               | gLUE2ExecutionEnvironmentPhysicalCPUs
 *                               | gLUE2ExecutionEnvironmentLogicalCPUs
 *                               | gLUE2ExecutionEnvironmentCPUMultiplicity
 *                               | gLUE2ExecutionEnvironmentCPUVendor
 *                               | gLUE2ExecutionEnvironmentCPUModel
 *                               | gLUE2ExecutionEnvironmentCPUVersion
 *                               | gLUE2ExecutionEnvironmentCPUClockSpeed
 *                               | gLUE2ExecutionEnvironmentCPUTimeScalingFactor
 *                               | gLUE2ExecutionEnvironmentWallTimeScalingFactor
 *                               | gLUE2ExecutionEnvironmentVirtualMemorySize
 *                               | gLUE2ExecutionEnvironmentOSName
 *                               | gLUE2ExecutionEnvironmentOSVersion
 *                               | gLUE2ExecutionEnvironmentNetworkInfo
 *                               | gLUE2ExecutionEnvironmentComputingManagerForeignKey }
 *   LDAP-NAME                 {"GLUE2ExecutionEnvironment"}
 *   LDAP-DESC                 "A description of hardware, operating system and network characteristics that defines the environment available to and requestable by a Grid job when submitted to a Service via a Endpoint; the description also includes information about the total/available/used instances of the execution environment"
 *   ID                        id-oc-gLUE2ExecutionEnvironment }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gLUE2ExecutionEnvironment: OBJECT_CLASS = undefined;

/* eslint-enable */
