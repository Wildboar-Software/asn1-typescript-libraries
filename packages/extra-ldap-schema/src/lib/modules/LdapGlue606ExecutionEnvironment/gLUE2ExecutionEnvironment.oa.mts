/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    type OPTIONAL,
    type BOOLEAN,
    type INTEGER,
    type BIT_STRING,
    type OCTET_STRING,
    type NULL,
    type OBJECT_IDENTIFIER,
    type ObjectDescriptor,
    type EXTERNAL,
    type REAL,
    type INSTANCE_OF,
    type ENUMERATED,
    type EMBEDDED_PDV,
    type UTF8String,
    type RELATIVE_OID,
    type SEQUENCE,
    type SEQUENCE_OF,
    type SET,
    type SET_OF,
    type GraphicString,
    type NumericString,
    type VisibleString,
    type PrintableString,
    type ISO646String,
    type TeletexString,
    type GeneralString,
    type T61String,
    type UniversalString,
    type VideotexString,
    type BMPString,
    type IA5String,
    type CharacterString,
    type UTCTime,
    type GeneralizedTime,
    type TIME,
    type DATE,
    type TIME_OF_DAY,
    type DATE_TIME,
    type DURATION,
    type OID_IRI,
    type RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    type TYPE_IDENTIFIER,
    type ABSTRACT_SYNTAX,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { gLUE2Resource } from "../LdapGlue510Resource/gLUE2Resource.oa.mjs";
import { id_oc_gLUE2ExecutionEnvironment } from "../LdapGlue606ExecutionEnvironment/id-oc-gLUE2ExecutionEnvironment.va.mjs";

import { gLUE2ExecutionEnvironmentVirtualMachine } from "../LdapGlue606ExecutionEnvironment/gLUE2ExecutionEnvironmentVirtualMachine.oa.mjs";
import { gLUE2ExecutionEnvironmentTotalInstances } from "../LdapGlue606ExecutionEnvironment/gLUE2ExecutionEnvironmentTotalInstances.oa.mjs";
import { gLUE2ExecutionEnvironmentUsedInstances } from "../LdapGlue606ExecutionEnvironment/gLUE2ExecutionEnvironmentUsedInstances.oa.mjs";
import { gLUE2ExecutionEnvironmentUnavailableInstances } from "../LdapGlue606ExecutionEnvironment/gLUE2ExecutionEnvironmentUnavailableInstances.oa.mjs";
import { gLUE2ExecutionEnvironmentPhysicalCPUs } from "../LdapGlue606ExecutionEnvironment/gLUE2ExecutionEnvironmentPhysicalCPUs.oa.mjs";
import { gLUE2ExecutionEnvironmentLogicalCPUs } from "../LdapGlue606ExecutionEnvironment/gLUE2ExecutionEnvironmentLogicalCPUs.oa.mjs";
import { gLUE2ExecutionEnvironmentCPUMultiplicity } from "../LdapGlue606ExecutionEnvironment/gLUE2ExecutionEnvironmentCPUMultiplicity.oa.mjs";
import { gLUE2ExecutionEnvironmentCPUVendor } from "../LdapGlue606ExecutionEnvironment/gLUE2ExecutionEnvironmentCPUVendor.oa.mjs";
import { gLUE2ExecutionEnvironmentCPUModel } from "../LdapGlue606ExecutionEnvironment/gLUE2ExecutionEnvironmentCPUModel.oa.mjs";
import { gLUE2ExecutionEnvironmentCPUVersion } from "../LdapGlue606ExecutionEnvironment/gLUE2ExecutionEnvironmentCPUVersion.oa.mjs";
import { gLUE2ExecutionEnvironmentCPUClockSpeed } from "../LdapGlue606ExecutionEnvironment/gLUE2ExecutionEnvironmentCPUClockSpeed.oa.mjs";
import { gLUE2ExecutionEnvironmentCPUTimeScalingFactor } from "../LdapGlue606ExecutionEnvironment/gLUE2ExecutionEnvironmentCPUTimeScalingFactor.oa.mjs";
import { gLUE2ExecutionEnvironmentWallTimeScalingFactor } from "../LdapGlue606ExecutionEnvironment/gLUE2ExecutionEnvironmentWallTimeScalingFactor.oa.mjs";
import { gLUE2ExecutionEnvironmentVirtualMemorySize } from "../LdapGlue606ExecutionEnvironment/gLUE2ExecutionEnvironmentVirtualMemorySize.oa.mjs";
import { gLUE2ExecutionEnvironmentOSName } from "../LdapGlue606ExecutionEnvironment/gLUE2ExecutionEnvironmentOSName.oa.mjs";
import { gLUE2ExecutionEnvironmentOSVersion } from "../LdapGlue606ExecutionEnvironment/gLUE2ExecutionEnvironmentOSVersion.oa.mjs";
import { gLUE2ExecutionEnvironmentNetworkInfo } from "../LdapGlue606ExecutionEnvironment/gLUE2ExecutionEnvironmentNetworkInfo.oa.mjs";
import { gLUE2ExecutionEnvironmentComputingManagerForeignKey } from "../LdapGlue606ExecutionEnvironment/gLUE2ExecutionEnvironmentComputingManagerForeignKey.oa.mjs";
import { gLUE2ExecutionEnvironmentPlatform } from "../LdapGlue606ExecutionEnvironment/gLUE2ExecutionEnvironmentPlatform.oa.mjs";
import { gLUE2ExecutionEnvironmentMainMemorySize } from "../LdapGlue606ExecutionEnvironment/gLUE2ExecutionEnvironmentMainMemorySize.oa.mjs";
import { gLUE2ExecutionEnvironmentOSFamily } from "../LdapGlue606ExecutionEnvironment/gLUE2ExecutionEnvironmentOSFamily.oa.mjs";
import { gLUE2ExecutionEnvironmentConnectivityIn } from "../LdapGlue606ExecutionEnvironment/gLUE2ExecutionEnvironmentConnectivityIn.oa.mjs";
import { gLUE2ExecutionEnvironmentConnectivityOut } from "../LdapGlue606ExecutionEnvironment/gLUE2ExecutionEnvironmentConnectivityOut.oa.mjs";
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
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ gLUE2Resource, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ gLUE2ExecutionEnvironmentPlatform, gLUE2ExecutionEnvironmentMainMemorySize, gLUE2ExecutionEnvironmentOSFamily, gLUE2ExecutionEnvironmentConnectivityIn, gLUE2ExecutionEnvironmentConnectivityOut, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ gLUE2ExecutionEnvironmentVirtualMachine, gLUE2ExecutionEnvironmentTotalInstances, gLUE2ExecutionEnvironmentUsedInstances, gLUE2ExecutionEnvironmentUnavailableInstances, gLUE2ExecutionEnvironmentPhysicalCPUs, gLUE2ExecutionEnvironmentLogicalCPUs, gLUE2ExecutionEnvironmentCPUMultiplicity, gLUE2ExecutionEnvironmentCPUVendor, gLUE2ExecutionEnvironmentCPUModel, gLUE2ExecutionEnvironmentCPUVersion, gLUE2ExecutionEnvironmentCPUClockSpeed, gLUE2ExecutionEnvironmentCPUTimeScalingFactor, gLUE2ExecutionEnvironmentWallTimeScalingFactor, gLUE2ExecutionEnvironmentVirtualMemorySize, gLUE2ExecutionEnvironmentOSName, gLUE2ExecutionEnvironmentOSVersion, gLUE2ExecutionEnvironmentNetworkInfo, gLUE2ExecutionEnvironmentComputingManagerForeignKey, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "GLUE2ExecutionEnvironment" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "A description of hardware, operating system and network characteristics that defines the environment available to and requestable by a Grid job when submitted to a Service via a Endpoint; the description also includes information about the total/available/used instances of the execution environment" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_gLUE2ExecutionEnvironment /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
