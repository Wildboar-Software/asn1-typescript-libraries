/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

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
