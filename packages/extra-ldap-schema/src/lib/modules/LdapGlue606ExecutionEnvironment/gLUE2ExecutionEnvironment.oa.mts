/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { gLUE2Resource } from "../LdapGlue510Resource/gLUE2Resource.oa.mjs";
import { id_oc_gLUE2ExecutionEnvironment } from "../LdapGlue606ExecutionEnvironment/id-oc-gLUE2ExecutionEnvironment.va.mjs";
import { gLUE2ExecutionEnvironmentCPUClockSpeed } from "./gLUE2ExecutionEnvironmentCPUClockSpeed.oa.mjs";
import { gLUE2ExecutionEnvironmentCPUModel } from "./gLUE2ExecutionEnvironmentCPUModel.oa.mjs";
import { gLUE2ExecutionEnvironmentCPUMultiplicity } from "./gLUE2ExecutionEnvironmentCPUMultiplicity.oa.mjs";
import { gLUE2ExecutionEnvironmentCPUTimeScalingFactor } from "./gLUE2ExecutionEnvironmentCPUTimeScalingFactor.oa.mjs";
import { gLUE2ExecutionEnvironmentCPUVendor } from "./gLUE2ExecutionEnvironmentCPUVendor.oa.mjs";
import { gLUE2ExecutionEnvironmentCPUVersion } from "./gLUE2ExecutionEnvironmentCPUVersion.oa.mjs";
import { gLUE2ExecutionEnvironmentComputingManagerForeignKey } from "./gLUE2ExecutionEnvironmentComputingManagerForeignKey.oa.mjs";
import { gLUE2ExecutionEnvironmentConnectivityIn } from "./gLUE2ExecutionEnvironmentConnectivityIn.oa.mjs";
import { gLUE2ExecutionEnvironmentConnectivityOut } from "./gLUE2ExecutionEnvironmentConnectivityOut.oa.mjs";
import { gLUE2ExecutionEnvironmentLogicalCPUs } from "./gLUE2ExecutionEnvironmentLogicalCPUs.oa.mjs";
import { gLUE2ExecutionEnvironmentMainMemorySize } from "./gLUE2ExecutionEnvironmentMainMemorySize.oa.mjs";
import { gLUE2ExecutionEnvironmentNetworkInfo } from "./gLUE2ExecutionEnvironmentNetworkInfo.oa.mjs";
import { gLUE2ExecutionEnvironmentOSFamily } from "./gLUE2ExecutionEnvironmentOSFamily.oa.mjs";
import { gLUE2ExecutionEnvironmentOSName } from "./gLUE2ExecutionEnvironmentOSName.oa.mjs";
import { gLUE2ExecutionEnvironmentOSVersion } from "./gLUE2ExecutionEnvironmentOSVersion.oa.mjs";
import { gLUE2ExecutionEnvironmentPhysicalCPUs } from "./gLUE2ExecutionEnvironmentPhysicalCPUs.oa.mjs";
import { gLUE2ExecutionEnvironmentPlatform } from "./gLUE2ExecutionEnvironmentPlatform.oa.mjs";
import { gLUE2ExecutionEnvironmentTotalInstances } from "./gLUE2ExecutionEnvironmentTotalInstances.oa.mjs";
import { gLUE2ExecutionEnvironmentUnavailableInstances } from "./gLUE2ExecutionEnvironmentUnavailableInstances.oa.mjs";
import { gLUE2ExecutionEnvironmentUsedInstances } from "./gLUE2ExecutionEnvironmentUsedInstances.oa.mjs";
import { gLUE2ExecutionEnvironmentVirtualMachine } from "./gLUE2ExecutionEnvironmentVirtualMachine.oa.mjs";
import { gLUE2ExecutionEnvironmentVirtualMemorySize } from "./gLUE2ExecutionEnvironmentVirtualMemorySize.oa.mjs";
import { gLUE2ExecutionEnvironmentWallTimeScalingFactor } from "./gLUE2ExecutionEnvironmentWallTimeScalingFactor.oa.mjs";

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
const gLUE2ExecutionEnvironment: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [gLUE2Resource] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [gLUE2ExecutionEnvironmentPlatform, gLUE2ExecutionEnvironmentMainMemorySize, gLUE2ExecutionEnvironmentOSFamily, gLUE2ExecutionEnvironmentConnectivityIn, gLUE2ExecutionEnvironmentConnectivityOut] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [gLUE2ExecutionEnvironmentVirtualMachine, gLUE2ExecutionEnvironmentTotalInstances, gLUE2ExecutionEnvironmentUsedInstances, gLUE2ExecutionEnvironmentUnavailableInstances, gLUE2ExecutionEnvironmentPhysicalCPUs, gLUE2ExecutionEnvironmentLogicalCPUs, gLUE2ExecutionEnvironmentCPUMultiplicity, gLUE2ExecutionEnvironmentCPUVendor, gLUE2ExecutionEnvironmentCPUModel, gLUE2ExecutionEnvironmentCPUVersion, gLUE2ExecutionEnvironmentCPUClockSpeed, gLUE2ExecutionEnvironmentCPUTimeScalingFactor, gLUE2ExecutionEnvironmentWallTimeScalingFactor, gLUE2ExecutionEnvironmentVirtualMemorySize, gLUE2ExecutionEnvironmentOSName, gLUE2ExecutionEnvironmentOSVersion, gLUE2ExecutionEnvironmentNetworkInfo, gLUE2ExecutionEnvironmentComputingManagerForeignKey] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["GLUE2ExecutionEnvironment"],
    "&ldapDesc": "A description of hardware, operating system and network characteristics that defines the environment available to and requestable by a Grid job when submitted to a Service via a Endpoint; the description also includes information about the total/available/used instances of the execution environment" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_gLUE2ExecutionEnvironment /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
