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
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { gLUE2Manager } from "../LdapGlue509Manager/gLUE2Manager.oa.mjs";
// export { gLUE2Manager } from "../LdapGlue509Manager/gLUE2Manager.oa.mjs";
import { id_oc_gLUE2ComputingManager } from "../LdapGlue604ComputingManager/id-oc-gLUE2ComputingManager.va.mjs";
// export { id_oc_gLUE2ComputingManager } from "../LdapGlue604ComputingManager/id-oc-gLUE2ComputingManager.va.mjs";


import { gLUE2ComputingManagerReservation } from "../LdapGlue604ComputingManager/gLUE2ComputingManagerReservation.oa.mjs";
import { gLUE2ComputingManagerBulkSubmission } from "../LdapGlue604ComputingManager/gLUE2ComputingManagerBulkSubmission.oa.mjs";
import { gLUE2ComputingManagerTotalPhysicalCPUs } from "../LdapGlue604ComputingManager/gLUE2ComputingManagerTotalPhysicalCPUs.oa.mjs";
import { gLUE2ComputingManagerTotalLogicalCPUs } from "../LdapGlue604ComputingManager/gLUE2ComputingManagerTotalLogicalCPUs.oa.mjs";
import { gLUE2ComputingManagerTotalSlots } from "../LdapGlue604ComputingManager/gLUE2ComputingManagerTotalSlots.oa.mjs";
import { gLUE2ComputingManagerSlotsUsedByLocalJobs } from "../LdapGlue604ComputingManager/gLUE2ComputingManagerSlotsUsedByLocalJobs.oa.mjs";
import { gLUE2ComputingManagerSlotsUsedByGridJobs } from "../LdapGlue604ComputingManager/gLUE2ComputingManagerSlotsUsedByGridJobs.oa.mjs";
import { gLUE2ComputingManagerHomogeneous } from "../LdapGlue604ComputingManager/gLUE2ComputingManagerHomogeneous.oa.mjs";
import { gLUE2ComputingManagerNetworkInfo } from "../LdapGlue604ComputingManager/gLUE2ComputingManagerNetworkInfo.oa.mjs";
import { gLUE2ComputingManagerLogicalCPUDistribution } from "../LdapGlue604ComputingManager/gLUE2ComputingManagerLogicalCPUDistribution.oa.mjs";
import { gLUE2ComputingManagerWorkingAreaShared } from "../LdapGlue604ComputingManager/gLUE2ComputingManagerWorkingAreaShared.oa.mjs";
import { gLUE2ComputingManagerWorkingAreaGuaranteed } from "../LdapGlue604ComputingManager/gLUE2ComputingManagerWorkingAreaGuaranteed.oa.mjs";
import { gLUE2ComputingManagerWorkingAreaTotal } from "../LdapGlue604ComputingManager/gLUE2ComputingManagerWorkingAreaTotal.oa.mjs";
import { gLUE2ComputingManagerWorkingAreaFree } from "../LdapGlue604ComputingManager/gLUE2ComputingManagerWorkingAreaFree.oa.mjs";
import { gLUE2ComputingManagerWorkingAreaLifeTime } from "../LdapGlue604ComputingManager/gLUE2ComputingManagerWorkingAreaLifeTime.oa.mjs";
import { gLUE2ComputingManagerWorkingAreaMultiSlotTotal } from "../LdapGlue604ComputingManager/gLUE2ComputingManagerWorkingAreaMultiSlotTotal.oa.mjs";
import { gLUE2ComputingManagerWorkingAreaMultiSlotFree } from "../LdapGlue604ComputingManager/gLUE2ComputingManagerWorkingAreaMultiSlotFree.oa.mjs";
import { gLUE2ComputingManagerWorkingAreaMultiSlotLifeTime } from "../LdapGlue604ComputingManager/gLUE2ComputingManagerWorkingAreaMultiSlotLifeTime.oa.mjs";
import { gLUE2ComputingManagerCacheTotal } from "../LdapGlue604ComputingManager/gLUE2ComputingManagerCacheTotal.oa.mjs";
import { gLUE2ComputingManagerCacheFree } from "../LdapGlue604ComputingManager/gLUE2ComputingManagerCacheFree.oa.mjs";
import { gLUE2ComputingManagerTmpDir } from "../LdapGlue604ComputingManager/gLUE2ComputingManagerTmpDir.oa.mjs";
import { gLUE2ComputingManagerScratchDir } from "../LdapGlue604ComputingManager/gLUE2ComputingManagerScratchDir.oa.mjs";
import { gLUE2ComputingManagerApplicationDir } from "../LdapGlue604ComputingManager/gLUE2ComputingManagerApplicationDir.oa.mjs";
import { gLUE2ComputingManagerComputingServiceForeignKey } from "../LdapGlue604ComputingManager/gLUE2ComputingManagerComputingServiceForeignKey.oa.mjs";
/**
 * @summary gLUE2ComputingManager
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gLUE2ComputingManager OBJECT-CLASS ::= {
 *   SUBCLASS OF               { gLUE2Manager }
 *   MAY CONTAIN               { gLUE2ComputingManagerReservation
 *                               | gLUE2ComputingManagerBulkSubmission
 *                               | gLUE2ComputingManagerTotalPhysicalCPUs
 *                               | gLUE2ComputingManagerTotalLogicalCPUs
 *                               | gLUE2ComputingManagerTotalSlots
 *                               | gLUE2ComputingManagerSlotsUsedByLocalJobs
 *                               | gLUE2ComputingManagerSlotsUsedByGridJobs
 *                               | gLUE2ComputingManagerHomogeneous
 *                               | gLUE2ComputingManagerNetworkInfo
 *                               | gLUE2ComputingManagerLogicalCPUDistribution
 *                               | gLUE2ComputingManagerWorkingAreaShared
 *                               | gLUE2ComputingManagerWorkingAreaGuaranteed
 *                               | gLUE2ComputingManagerWorkingAreaTotal
 *                               | gLUE2ComputingManagerWorkingAreaFree
 *                               | gLUE2ComputingManagerWorkingAreaLifeTime
 *                               | gLUE2ComputingManagerWorkingAreaMultiSlotTotal
 *                               | gLUE2ComputingManagerWorkingAreaMultiSlotFree
 *                               | gLUE2ComputingManagerWorkingAreaMultiSlotLifeTime
 *                               | gLUE2ComputingManagerCacheTotal
 *                               | gLUE2ComputingManagerCacheFree
 *                               | gLUE2ComputingManagerTmpDir
 *                               | gLUE2ComputingManagerScratchDir
 *                               | gLUE2ComputingManagerApplicationDir
 *                               | gLUE2ComputingManagerComputingServiceForeignKey }
 *   LDAP-NAME                 {"GLUE2ComputingManager"}
 *   LDAP-DESC                 "A software component locally managing one or more execution environments. It can describe also aggregated information about the managed resources. The computing manager is also known as Local Resource Management System (LRMS)."
 *   ID                        id-oc-gLUE2ComputingManager }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gLUE2ComputingManager: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ gLUE2Manager, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ gLUE2ComputingManagerReservation, gLUE2ComputingManagerBulkSubmission, gLUE2ComputingManagerTotalPhysicalCPUs, gLUE2ComputingManagerTotalLogicalCPUs, gLUE2ComputingManagerTotalSlots, gLUE2ComputingManagerSlotsUsedByLocalJobs, gLUE2ComputingManagerSlotsUsedByGridJobs, gLUE2ComputingManagerHomogeneous, gLUE2ComputingManagerNetworkInfo, gLUE2ComputingManagerLogicalCPUDistribution, gLUE2ComputingManagerWorkingAreaShared, gLUE2ComputingManagerWorkingAreaGuaranteed, gLUE2ComputingManagerWorkingAreaTotal, gLUE2ComputingManagerWorkingAreaFree, gLUE2ComputingManagerWorkingAreaLifeTime, gLUE2ComputingManagerWorkingAreaMultiSlotTotal, gLUE2ComputingManagerWorkingAreaMultiSlotFree, gLUE2ComputingManagerWorkingAreaMultiSlotLifeTime, gLUE2ComputingManagerCacheTotal, gLUE2ComputingManagerCacheFree, gLUE2ComputingManagerTmpDir, gLUE2ComputingManagerScratchDir, gLUE2ComputingManagerApplicationDir, gLUE2ComputingManagerComputingServiceForeignKey, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "GLUE2ComputingManager" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "A software component locally managing one or more execution environments. It can describe also aggregated information about the managed resources. The computing manager is also known as Local Resource Management System (LRMS)." /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_gLUE2ComputingManager /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
