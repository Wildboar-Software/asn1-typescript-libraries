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
import { gLUE2Entity } from "../LdapGlue501Entity/gLUE2Entity.oa.mjs";
// export { gLUE2Entity } from "../LdapGlue501Entity/gLUE2Entity.oa.mjs";
import { id_oc_gLUE2ApplicationEnvironment } from "../LdapGlue607ApplicationEnvironment/id-oc-gLUE2ApplicationEnvironment.va.mjs";
import { gLUE2ApplicationEnvironmentID } from "../LdapGlue607ApplicationEnvironment/gLUE2ApplicationEnvironmentID.oa.mjs";
import { gLUE2ApplicationEnvironmentAppName } from "../LdapGlue607ApplicationEnvironment/gLUE2ApplicationEnvironmentAppName.oa.mjs";
import { gLUE2ApplicationEnvironmentComputingManagerForeignKey } from "../LdapGlue607ApplicationEnvironment/gLUE2ApplicationEnvironmentComputingManagerForeignKey.oa.mjs";
import { gLUE2ApplicationEnvironmentAppVersion } from "../LdapGlue607ApplicationEnvironment/gLUE2ApplicationEnvironmentAppVersion.oa.mjs";
import { gLUE2ApplicationEnvironmentRepository } from "../LdapGlue607ApplicationEnvironment/gLUE2ApplicationEnvironmentRepository.oa.mjs";
import { gLUE2ApplicationEnvironmentState } from "../LdapGlue607ApplicationEnvironment/gLUE2ApplicationEnvironmentState.oa.mjs";
import { gLUE2ApplicationEnvironmentRemovalDate } from "../LdapGlue607ApplicationEnvironment/gLUE2ApplicationEnvironmentRemovalDate.oa.mjs";
import { gLUE2ApplicationEnvironmentLicense } from "../LdapGlue607ApplicationEnvironment/gLUE2ApplicationEnvironmentLicense.oa.mjs";
import { gLUE2ApplicationEnvironmentDescription } from "../LdapGlue607ApplicationEnvironment/gLUE2ApplicationEnvironmentDescription.oa.mjs";
import { gLUE2ApplicationEnvironmentBestBenchmark } from "../LdapGlue607ApplicationEnvironment/gLUE2ApplicationEnvironmentBestBenchmark.oa.mjs";
import { gLUE2ApplicationEnvironmentParallelSupport } from "../LdapGlue607ApplicationEnvironment/gLUE2ApplicationEnvironmentParallelSupport.oa.mjs";
import { gLUE2ApplicationEnvironmentMaxSlots } from "../LdapGlue607ApplicationEnvironment/gLUE2ApplicationEnvironmentMaxSlots.oa.mjs";
import { gLUE2ApplicationEnvironmentMaxJobs } from "../LdapGlue607ApplicationEnvironment/gLUE2ApplicationEnvironmentMaxJobs.oa.mjs";
import { gLUE2ApplicationEnvironmentMaxUserSeats } from "../LdapGlue607ApplicationEnvironment/gLUE2ApplicationEnvironmentMaxUserSeats.oa.mjs";
import { gLUE2ApplicationEnvironmentFreeSlots } from "../LdapGlue607ApplicationEnvironment/gLUE2ApplicationEnvironmentFreeSlots.oa.mjs";
import { gLUE2ApplicationEnvironmentFreeJobs } from "../LdapGlue607ApplicationEnvironment/gLUE2ApplicationEnvironmentFreeJobs.oa.mjs";
import { gLUE2ApplicationEnvironmentFreeUserSeats } from "../LdapGlue607ApplicationEnvironment/gLUE2ApplicationEnvironmentFreeUserSeats.oa.mjs";
import { gLUE2ApplicationEnvironmentExecutionEnvironmentForeignKey } from "../LdapGlue607ApplicationEnvironment/gLUE2ApplicationEnvironmentExecutionEnvironmentForeignKey.oa.mjs";
// export { id_oc_gLUE2ApplicationEnvironment } from "../LdapGlue607ApplicationEnvironment/id-oc-gLUE2ApplicationEnvironment.va.mjs";


/**
 * @summary gLUE2ApplicationEnvironment
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gLUE2ApplicationEnvironment OBJECT-CLASS ::= {
 *   SUBCLASS OF               { gLUE2Entity }
 *   MUST CONTAIN              { gLUE2ApplicationEnvironmentID
 *                               | gLUE2ApplicationEnvironmentAppName
 *                               | gLUE2ApplicationEnvironmentComputingManagerForeignKey }
 *   MAY CONTAIN               { gLUE2ApplicationEnvironmentAppVersion
 *                               | gLUE2ApplicationEnvironmentRepository
 *                               | gLUE2ApplicationEnvironmentState
 *                               | gLUE2ApplicationEnvironmentRemovalDate
 *                               | gLUE2ApplicationEnvironmentLicense
 *                               | gLUE2ApplicationEnvironmentDescription
 *                               | gLUE2ApplicationEnvironmentBestBenchmark
 *                               | gLUE2ApplicationEnvironmentParallelSupport
 *                               | gLUE2ApplicationEnvironmentMaxSlots
 *                               | gLUE2ApplicationEnvironmentMaxJobs
 *                               | gLUE2ApplicationEnvironmentMaxUserSeats
 *                               | gLUE2ApplicationEnvironmentFreeSlots
 *                               | gLUE2ApplicationEnvironmentFreeJobs
 *                               | gLUE2ApplicationEnvironmentFreeUserSeats
 *                               | gLUE2ApplicationEnvironmentExecutionEnvironmentForeignKey }
 *   LDAP-NAME                 {"GLUE2ApplicationEnvironment"}
 *   LDAP-DESC                 "Description of the application software or environment characteristic available within one or more execution environments"
 *   ID                        id-oc-gLUE2ApplicationEnvironment }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gLUE2ApplicationEnvironment: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ gLUE2Entity, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ gLUE2ApplicationEnvironmentID, gLUE2ApplicationEnvironmentAppName, gLUE2ApplicationEnvironmentComputingManagerForeignKey, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ gLUE2ApplicationEnvironmentAppVersion, gLUE2ApplicationEnvironmentRepository, gLUE2ApplicationEnvironmentState, gLUE2ApplicationEnvironmentRemovalDate, gLUE2ApplicationEnvironmentLicense, gLUE2ApplicationEnvironmentDescription, gLUE2ApplicationEnvironmentBestBenchmark, gLUE2ApplicationEnvironmentParallelSupport, gLUE2ApplicationEnvironmentMaxSlots, gLUE2ApplicationEnvironmentMaxJobs, gLUE2ApplicationEnvironmentMaxUserSeats, gLUE2ApplicationEnvironmentFreeSlots, gLUE2ApplicationEnvironmentFreeJobs, gLUE2ApplicationEnvironmentFreeUserSeats, gLUE2ApplicationEnvironmentExecutionEnvironmentForeignKey, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "GLUE2ApplicationEnvironment" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Description of the application software or environment characteristic available within one or more execution environments" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_gLUE2ApplicationEnvironment /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
