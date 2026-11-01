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
import { id_oc_sunIdentityServerLibertyPPService } from "../Ldapmigration71sunAm/id-oc-sunIdentityServerLibertyPPService.va.mjs";

import { sunIdentityServerPPCommonNameCN } from "../Ldapmigration71sunAm/sunIdentityServerPPCommonNameCN.oa.mjs";
import { sunIdentityServerPPCommonNameAltCN } from "../Ldapmigration71sunAm/sunIdentityServerPPCommonNameAltCN.oa.mjs";
import { sunIdentityServerPPCommonNameFN } from "../Ldapmigration71sunAm/sunIdentityServerPPCommonNameFN.oa.mjs";
import { sunIdentityServerPPCommonNameSN } from "../Ldapmigration71sunAm/sunIdentityServerPPCommonNameSN.oa.mjs";
import { sunIdentityServerPPCommonNamePT } from "../Ldapmigration71sunAm/sunIdentityServerPPCommonNamePT.oa.mjs";
import { sunIdentityServerPPCommonNameMN } from "../Ldapmigration71sunAm/sunIdentityServerPPCommonNameMN.oa.mjs";
import { sunIdentityServerPPInformalName } from "../Ldapmigration71sunAm/sunIdentityServerPPInformalName.oa.mjs";
import { sunIdentityServerPPLegalIdentityLegalName } from "../Ldapmigration71sunAm/sunIdentityServerPPLegalIdentityLegalName.oa.mjs";
import { sunIdentityServerPPLegalIdentityDOB } from "../Ldapmigration71sunAm/sunIdentityServerPPLegalIdentityDOB.oa.mjs";
import { sunIdentityServerPPLegalIdentityMaritalStatus } from "../Ldapmigration71sunAm/sunIdentityServerPPLegalIdentityMaritalStatus.oa.mjs";
import { sunIdentityServerPPLegalIdentityGender } from "../Ldapmigration71sunAm/sunIdentityServerPPLegalIdentityGender.oa.mjs";
import { sunIdentityServerPPLegalIdentityAltIDType } from "../Ldapmigration71sunAm/sunIdentityServerPPLegalIdentityAltIDType.oa.mjs";
import { sunIdentityServerPPLegalIdentityAltIDValue } from "../Ldapmigration71sunAm/sunIdentityServerPPLegalIdentityAltIDValue.oa.mjs";
import { sunIdentityServerPPLegalIdentityVATIDType } from "../Ldapmigration71sunAm/sunIdentityServerPPLegalIdentityVATIDType.oa.mjs";
import { sunIdentityServerPPLegalIdentityVATIDValue } from "../Ldapmigration71sunAm/sunIdentityServerPPLegalIdentityVATIDValue.oa.mjs";
import { sunIdentityServerPPEmploymentIdentityJobTitle } from "../Ldapmigration71sunAm/sunIdentityServerPPEmploymentIdentityJobTitle.oa.mjs";
import { sunIdentityServerPPEmploymentIdentityOrg } from "../Ldapmigration71sunAm/sunIdentityServerPPEmploymentIdentityOrg.oa.mjs";
import { sunIdentityServerPPEmploymentIdentityAltO } from "../Ldapmigration71sunAm/sunIdentityServerPPEmploymentIdentityAltO.oa.mjs";
import { sunIdentityServerPPAddressCard } from "../Ldapmigration71sunAm/sunIdentityServerPPAddressCard.oa.mjs";
import { sunIdentityServerPPMsgContact } from "../Ldapmigration71sunAm/sunIdentityServerPPMsgContact.oa.mjs";
import { sunIdentityServerPPFacadeMugShot } from "../Ldapmigration71sunAm/sunIdentityServerPPFacadeMugShot.oa.mjs";
import { sunIdentityServerPPFacadeWebSite } from "../Ldapmigration71sunAm/sunIdentityServerPPFacadeWebSite.oa.mjs";
import { sunIdentityServerPPFacadeNamePronounced } from "../Ldapmigration71sunAm/sunIdentityServerPPFacadeNamePronounced.oa.mjs";
import { sunIdentityServerPPFacadeGreetSound } from "../Ldapmigration71sunAm/sunIdentityServerPPFacadeGreetSound.oa.mjs";
import { sunIdentityServerPPFacadeGreetMeSound } from "../Ldapmigration71sunAm/sunIdentityServerPPFacadeGreetMeSound.oa.mjs";
import { sunIdentityServerPPDemographicsDisplayLanguage } from "../Ldapmigration71sunAm/sunIdentityServerPPDemographicsDisplayLanguage.oa.mjs";
import { sunIdentityServerPPDemographicsLanguage } from "../Ldapmigration71sunAm/sunIdentityServerPPDemographicsLanguage.oa.mjs";
import { sunIdentityServerPPDemographicsBirthday } from "../Ldapmigration71sunAm/sunIdentityServerPPDemographicsBirthday.oa.mjs";
import { sunIdentityServerPPDemographicsAge } from "../Ldapmigration71sunAm/sunIdentityServerPPDemographicsAge.oa.mjs";
import { sunIdentityServerPPDemographicsTimeZone } from "../Ldapmigration71sunAm/sunIdentityServerPPDemographicsTimeZone.oa.mjs";
import { sunIdentityServerPPSignKey } from "../Ldapmigration71sunAm/sunIdentityServerPPSignKey.oa.mjs";
import { sunIdentityServerPPEncryptKey } from "../Ldapmigration71sunAm/sunIdentityServerPPEncryptKey.oa.mjs";
import { sunIdentityServerPPEmergencyContact } from "../Ldapmigration71sunAm/sunIdentityServerPPEmergencyContact.oa.mjs";
/**
 * @summary sunIdentityServerLibertyPPService
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * sunIdentityServerLibertyPPService OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { sunIdentityServerPPCommonNameCN
 *                               | sunIdentityServerPPCommonNameAltCN
 *                               | sunIdentityServerPPCommonNameFN
 *                               | sunIdentityServerPPCommonNameSN
 *                               | sunIdentityServerPPCommonNamePT
 *                               | sunIdentityServerPPCommonNameMN
 *                               | sunIdentityServerPPInformalName
 *                               | sunIdentityServerPPLegalIdentityLegalName
 *                               | sunIdentityServerPPLegalIdentityDOB
 *                               | sunIdentityServerPPLegalIdentityMaritalStatus
 *                               | sunIdentityServerPPLegalIdentityGender
 *                               | sunIdentityServerPPLegalIdentityAltIDType
 *                               | sunIdentityServerPPLegalIdentityAltIDValue
 *                               | sunIdentityServerPPLegalIdentityVATIDType
 *                               | sunIdentityServerPPLegalIdentityVATIDValue
 *                               | sunIdentityServerPPEmploymentIdentityJobTitle
 *                               | sunIdentityServerPPEmploymentIdentityOrg
 *                               | sunIdentityServerPPEmploymentIdentityAltO
 *                               | sunIdentityServerPPAddressCard
 *                               | sunIdentityServerPPMsgContact
 *                               | sunIdentityServerPPFacadeMugShot
 *                               | sunIdentityServerPPFacadeWebSite
 *                               | sunIdentityServerPPFacadeNamePronounced
 *                               | sunIdentityServerPPFacadeGreetSound
 *                               | sunIdentityServerPPFacadeGreetMeSound
 *                               | sunIdentityServerPPDemographicsDisplayLanguage
 *                               | sunIdentityServerPPDemographicsLanguage
 *                               | sunIdentityServerPPDemographicsBirthday
 *                               | sunIdentityServerPPDemographicsAge
 *                               | sunIdentityServerPPDemographicsTimeZone
 *                               | sunIdentityServerPPSignKey
 *                               | sunIdentityServerPPEncryptKey
 *                               | sunIdentityServerPPEmergencyContact }
 *   LDAP-NAME                 {"sunIdentityServerLibertyPPService"}
 *   LDAP-DESC                 "sunIdentityServerLibertyPPService OC"
 *   ID                        id-oc-sunIdentityServerLibertyPPService }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const sunIdentityServerLibertyPPService: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ sunIdentityServerPPCommonNameCN, sunIdentityServerPPCommonNameAltCN, sunIdentityServerPPCommonNameFN, sunIdentityServerPPCommonNameSN, sunIdentityServerPPCommonNamePT, sunIdentityServerPPCommonNameMN, sunIdentityServerPPInformalName, sunIdentityServerPPLegalIdentityLegalName, sunIdentityServerPPLegalIdentityDOB, sunIdentityServerPPLegalIdentityMaritalStatus, sunIdentityServerPPLegalIdentityGender, sunIdentityServerPPLegalIdentityAltIDType, sunIdentityServerPPLegalIdentityAltIDValue, sunIdentityServerPPLegalIdentityVATIDType, sunIdentityServerPPLegalIdentityVATIDValue, sunIdentityServerPPEmploymentIdentityJobTitle, sunIdentityServerPPEmploymentIdentityOrg, sunIdentityServerPPEmploymentIdentityAltO, sunIdentityServerPPAddressCard, sunIdentityServerPPMsgContact, sunIdentityServerPPFacadeMugShot, sunIdentityServerPPFacadeWebSite, sunIdentityServerPPFacadeNamePronounced, sunIdentityServerPPFacadeGreetSound, sunIdentityServerPPFacadeGreetMeSound, sunIdentityServerPPDemographicsDisplayLanguage, sunIdentityServerPPDemographicsLanguage, sunIdentityServerPPDemographicsBirthday, sunIdentityServerPPDemographicsAge, sunIdentityServerPPDemographicsTimeZone, sunIdentityServerPPSignKey, sunIdentityServerPPEncryptKey, sunIdentityServerPPEmergencyContact, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "sunIdentityServerLibertyPPService" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "sunIdentityServerLibertyPPService OC" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_sunIdentityServerLibertyPPService /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
