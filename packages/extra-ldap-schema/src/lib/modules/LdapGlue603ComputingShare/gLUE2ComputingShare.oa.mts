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
    NULL,
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
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
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
import { gLUE2Share } from "../LdapGlue508Share/gLUE2Share.oa.mjs";
// export { gLUE2Share } from "../LdapGlue508Share/gLUE2Share.oa.mjs";
import { gLUE2ComputingShareServingState } from "../LdapGlue603ComputingShare/gLUE2ComputingShareServingState.oa.mjs";
// export { gLUE2ComputingShareServingState } from "../LdapGlue603ComputingShare/gLUE2ComputingShareServingState.oa.mjs";
import { id_oc_gLUE2ComputingShare } from "../LdapGlue603ComputingShare/id-oc-gLUE2ComputingShare.va.mjs";
// export { id_oc_gLUE2ComputingShare } from "../LdapGlue603ComputingShare/id-oc-gLUE2ComputingShare.va.mjs";


/**
 * @summary gLUE2ComputingShare
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gLUE2ComputingShare OBJECT-CLASS ::= {
 *   SUBCLASS OF               { gLUE2Share }
 *   MUST CONTAIN              { gLUE2ComputingShareServingState }
 *   MAY CONTAIN               { gLUE2ComputingShareMappingQueue
 *                               | gLUE2ComputingShareMaxWallTime
 *                               | gLUE2ComputingShareMaxMultiSlotWallTime
 *                               | gLUE2ComputingShareMinWallTime
 *                               | gLUE2ComputingShareDefaultWallTime
 *                               | gLUE2ComputingShareMaxCPUTime
 *                               | gLUE2ComputingShareMaxTotalCPUTime
 *                               | gLUE2ComputingShareMinCPUTime
 *                               | gLUE2ComputingShareDefaultCPUTime
 *                               | gLUE2ComputingShareMaxTotalJobs
 *                               | gLUE2ComputingShareMaxRunningJobs
 *                               | gLUE2ComputingShareMaxWaitingJobs
 *                               | gLUE2ComputingShareMaxPreLRMSWaitingJobs
 *                               | gLUE2ComputingShareMaxUserRunningJobs
 *                               | gLUE2ComputingShareMaxSlotsPerJob
 *                               | gLUE2ComputingShareMaxStageInStreams
 *                               | gLUE2ComputingShareMaxStageOutStreams
 *                               | gLUE2ComputingShareSchedulingPolicy
 *                               | gLUE2ComputingShareMaxMainMemory
 *                               | gLUE2ComputingShareGuaranteedMainMemory
 *                               | gLUE2ComputingShareMaxVirtualMemory
 *                               | gLUE2ComputingShareGuaranteedVirtualMemory
 *                               | gLUE2ComputingShareMaxDiskSpace
 *                               | gLUE2ComputingShareDefaultStorageService
 *                               | gLUE2ComputingSharePreemption
 *                               | gLUE2ComputingShareTotalJobs
 *                               | gLUE2ComputingShareRunningJobs
 *                               | gLUE2ComputingShareLocalRunningJobs
 *                               | gLUE2ComputingShareWaitingJobs
 *                               | gLUE2ComputingShareLocalWaitingJobs
 *                               | gLUE2ComputingShareSuspendedJobs
 *                               | gLUE2ComputingShareLocalSuspendedJobs
 *                               | gLUE2ComputingShareStagingJobs
 *                               | gLUE2ComputingShareLocalStagingJobs
 *                               | gLUE2ComputingSharePreLRMSWaitingJobs
 *                               | gLUE2ComputingShareEstimatedAverageWaitingTime
 *                               | gLUE2ComputingShareEstimatedWorstWaitingTime
 *                               | gLUE2ComputingShareFreeSlots
 *                               | gLUE2ComputingShareFreeSlotsWithDuration
 *                               | gLUE2ComputingShareUsedSlots
 *                               | gLUE2ComputingShareRequestedSlots
 *                               | gLUE2ComputingShareReservationPolicy
 *                               | gLUE2ComputingShareTag
 *                               | gLUE2ComputingShareComputingEndpointForeignKey
 *                               | gLUE2ComputingShareExecutionEnvironmentForeignKey
 *                               | gLUE2ComputingShareComputingServiceForeignKey }
 *   LDAP-NAME                 {"GLUE2ComputingShare"}
 *   LDAP-DESC                 "A utilization target for a set of execution environments defined by a set of configuration parameters and characterized by status information"
 *   ID                        id-oc-gLUE2ComputingShare }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gLUE2ComputingShare: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ gLUE2Share, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ gLUE2ComputingShareServingState, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "GLUE2ComputingShare" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "A utilization target for a set of execution environments defined by a set of configuration parameters and characterized by status information" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_gLUE2ComputingShare /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
