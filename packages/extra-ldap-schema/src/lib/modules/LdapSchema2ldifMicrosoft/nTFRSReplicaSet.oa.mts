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
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_nTFRSReplicaSet } from "../LdapSchema2ldifMicrosoft/id-oc-nTFRSReplicaSet.va.mjs";

import { fRSReplicaSetType } from "../MSUser/fRSReplicaSetType.oa.mjs";
import { fRSVersionGUID } from "../MSUser/fRSVersionGUID.oa.mjs";
import { schedule } from "../MSUser/schedule.oa.mjs";
import { fRSFileFilter } from "../MSUser/fRSFileFilter.oa.mjs";
import { fRSDirectoryFilter } from "../MSUser/fRSDirectoryFilter.oa.mjs";
import { fRSDSPoll } from "../MSUser/fRSDSPoll.oa.mjs";
import { fRSServiceCommand } from "../MSUser/fRSServiceCommand.oa.mjs";
import { fRSReplicaSetGUID } from "../MSUser/fRSReplicaSetGUID.oa.mjs";
import { fRSLevelLimit } from "../MSUser/fRSLevelLimit.oa.mjs";
import { fRSRootSecurity } from "../MSUser/fRSRootSecurity.oa.mjs";
import { fRSExtensions } from "../MSUser/fRSExtensions.oa.mjs";
import { managedBy } from "../MSUser/managedBy.oa.mjs";
import { fRSFlags } from "../MSUser/fRSFlags.oa.mjs";
import { fRSPartnerAuthLevel } from "../MSUser/fRSPartnerAuthLevel.oa.mjs";
import { fRSPrimaryMember } from "../MSUser/fRSPrimaryMember.oa.mjs";
/**
 * @summary nTFRSReplicaSet
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * nTFRSReplicaSet OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MAY CONTAIN               { fRSReplicaSetType
 *                               | fRSVersionGUID
 *                               | schedule
 *                               | fRSFileFilter
 *                               | fRSDirectoryFilter
 *                               | fRSDSPoll
 *                               | fRSServiceCommand
 *                               | fRSReplicaSetGUID
 *                               | fRSLevelLimit
 *                               | fRSRootSecurity
 *                               | fRSExtensions
 *                               | managedBy
 *                               | fRSFlags
 *                               | fRSPartnerAuthLevel
 *                               | fRSPrimaryMember }
 *   LDAP-NAME                 {"nTFRSReplicaSet"}
 *   ID                        id-oc-nTFRSReplicaSet }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const nTFRSReplicaSet: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ fRSReplicaSetType, fRSVersionGUID, schedule, fRSFileFilter, fRSDirectoryFilter, fRSDSPoll, fRSServiceCommand, fRSReplicaSetGUID, fRSLevelLimit, fRSRootSecurity, fRSExtensions, managedBy, fRSFlags, fRSPartnerAuthLevel, fRSPrimaryMember, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "nTFRSReplicaSet" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_nTFRSReplicaSet /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
