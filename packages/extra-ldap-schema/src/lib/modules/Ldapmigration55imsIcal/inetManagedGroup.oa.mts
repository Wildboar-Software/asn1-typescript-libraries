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
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { id_oc_inetManagedGroup } from "../Ldapmigration55imsIcal/id-oc-inetManagedGroup.va.mjs";

import { mnggrpDeletionPolicy } from "../Ldapmigration55imsIcal/mnggrpDeletionPolicy.oa.mjs";
import { mnggrpAdditionPolicy } from "../Ldapmigration55imsIcal/mnggrpAdditionPolicy.oa.mjs";
import { mnggrpBillableUser } from "../Ldapmigration55imsIcal/mnggrpBillableUser.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { mnggrpStatus } from "../Ldapmigration55imsIcal/mnggrpStatus.oa.mjs";
import { mnggrpMaxUsers } from "../Ldapmigration55imsIcal/mnggrpMaxUsers.oa.mjs";
import { mnggrpCurrentUsers } from "../Ldapmigration55imsIcal/mnggrpCurrentUsers.oa.mjs";
import { mnggrpMailQuota } from "../Ldapmigration55imsIcal/mnggrpMailQuota.oa.mjs";
import { owner } from "../SelectedAttributeTypes/owner.oa.mjs";
import { nsdaModifiableBy } from "../Ldapmigration50nsDelegatedAdmin/nsdaModifiableBy.oa.mjs";
import { mnggrpUserClassOfServices } from "../Ldapmigration55imsIcal/mnggrpUserClassOfServices.oa.mjs";
import { mailSieveRuleSource } from "../Ldapmigration55imsIcal/mailSieveRuleSource.oa.mjs";
/**
 * @summary inetManagedGroup
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * inetManagedGroup OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { commonName }
 *   MAY CONTAIN               { mnggrpDeletionPolicy
 *                               | mnggrpAdditionPolicy
 *                               | mnggrpBillableUser
 *                               | description
 *                               | mnggrpStatus
 *                               | mnggrpMaxUsers
 *                               | mnggrpCurrentUsers
 *                               | mnggrpMailQuota
 *                               | owner
 *                               | nsdaModifiableBy
 *                               | mnggrpUserClassOfServices
 *                               | mailSieveRuleSource }
 *   LDAP-NAME                 {"inetManagedGroup"}
 *   LDAP-DESC                 "auxiliary class for a managed group used by family accounts"
 *   ID                        id-oc-inetManagedGroup }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const inetManagedGroup: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ commonName, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ mnggrpDeletionPolicy, mnggrpAdditionPolicy, mnggrpBillableUser, description, mnggrpStatus, mnggrpMaxUsers, mnggrpCurrentUsers, mnggrpMailQuota, owner, nsdaModifiableBy, mnggrpUserClassOfServices, mailSieveRuleSource, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "inetManagedGroup" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "auxiliary class for a managed group used by family accounts" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_inetManagedGroup /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
