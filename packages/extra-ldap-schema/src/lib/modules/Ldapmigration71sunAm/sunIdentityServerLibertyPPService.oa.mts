/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_sunIdentityServerLibertyPPService } from "../Ldapmigration71sunAm/id-oc-sunIdentityServerLibertyPPService.va.mjs";
import { sunIdentityServerPPAddressCard } from "./sunIdentityServerPPAddressCard.oa.mjs";
import { sunIdentityServerPPCommonNameAltCN } from "./sunIdentityServerPPCommonNameAltCN.oa.mjs";
import { sunIdentityServerPPCommonNameCN } from "./sunIdentityServerPPCommonNameCN.oa.mjs";
import { sunIdentityServerPPCommonNameFN } from "./sunIdentityServerPPCommonNameFN.oa.mjs";
import { sunIdentityServerPPCommonNameMN } from "./sunIdentityServerPPCommonNameMN.oa.mjs";
import { sunIdentityServerPPCommonNamePT } from "./sunIdentityServerPPCommonNamePT.oa.mjs";
import { sunIdentityServerPPCommonNameSN } from "./sunIdentityServerPPCommonNameSN.oa.mjs";
import { sunIdentityServerPPDemographicsAge } from "./sunIdentityServerPPDemographicsAge.oa.mjs";
import { sunIdentityServerPPDemographicsBirthday } from "./sunIdentityServerPPDemographicsBirthday.oa.mjs";
import { sunIdentityServerPPDemographicsDisplayLanguage } from "./sunIdentityServerPPDemographicsDisplayLanguage.oa.mjs";
import { sunIdentityServerPPDemographicsLanguage } from "./sunIdentityServerPPDemographicsLanguage.oa.mjs";
import { sunIdentityServerPPDemographicsTimeZone } from "./sunIdentityServerPPDemographicsTimeZone.oa.mjs";
import { sunIdentityServerPPEmergencyContact } from "./sunIdentityServerPPEmergencyContact.oa.mjs";
import { sunIdentityServerPPEmploymentIdentityAltO } from "./sunIdentityServerPPEmploymentIdentityAltO.oa.mjs";
import { sunIdentityServerPPEmploymentIdentityJobTitle } from "./sunIdentityServerPPEmploymentIdentityJobTitle.oa.mjs";
import { sunIdentityServerPPEmploymentIdentityOrg } from "./sunIdentityServerPPEmploymentIdentityOrg.oa.mjs";
import { sunIdentityServerPPEncryptKey } from "./sunIdentityServerPPEncryptKey.oa.mjs";
import { sunIdentityServerPPFacadeGreetMeSound } from "./sunIdentityServerPPFacadeGreetMeSound.oa.mjs";
import { sunIdentityServerPPFacadeGreetSound } from "./sunIdentityServerPPFacadeGreetSound.oa.mjs";
import { sunIdentityServerPPFacadeMugShot } from "./sunIdentityServerPPFacadeMugShot.oa.mjs";
import { sunIdentityServerPPFacadeNamePronounced } from "./sunIdentityServerPPFacadeNamePronounced.oa.mjs";
import { sunIdentityServerPPFacadeWebSite } from "./sunIdentityServerPPFacadeWebSite.oa.mjs";
import { sunIdentityServerPPInformalName } from "./sunIdentityServerPPInformalName.oa.mjs";
import { sunIdentityServerPPLegalIdentityAltIDType } from "./sunIdentityServerPPLegalIdentityAltIDType.oa.mjs";
import { sunIdentityServerPPLegalIdentityAltIDValue } from "./sunIdentityServerPPLegalIdentityAltIDValue.oa.mjs";
import { sunIdentityServerPPLegalIdentityDOB } from "./sunIdentityServerPPLegalIdentityDOB.oa.mjs";
import { sunIdentityServerPPLegalIdentityGender } from "./sunIdentityServerPPLegalIdentityGender.oa.mjs";
import { sunIdentityServerPPLegalIdentityLegalName } from "./sunIdentityServerPPLegalIdentityLegalName.oa.mjs";
import { sunIdentityServerPPLegalIdentityMaritalStatus } from "./sunIdentityServerPPLegalIdentityMaritalStatus.oa.mjs";
import { sunIdentityServerPPLegalIdentityVATIDType } from "./sunIdentityServerPPLegalIdentityVATIDType.oa.mjs";
import { sunIdentityServerPPLegalIdentityVATIDValue } from "./sunIdentityServerPPLegalIdentityVATIDValue.oa.mjs";
import { sunIdentityServerPPMsgContact } from "./sunIdentityServerPPMsgContact.oa.mjs";
import { sunIdentityServerPPSignKey } from "./sunIdentityServerPPSignKey.oa.mjs";

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
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [sunIdentityServerPPCommonNameCN, sunIdentityServerPPCommonNameAltCN, sunIdentityServerPPCommonNameFN, sunIdentityServerPPCommonNameSN, sunIdentityServerPPCommonNamePT, sunIdentityServerPPCommonNameMN, sunIdentityServerPPInformalName, sunIdentityServerPPLegalIdentityLegalName, sunIdentityServerPPLegalIdentityDOB, sunIdentityServerPPLegalIdentityMaritalStatus, sunIdentityServerPPLegalIdentityGender, sunIdentityServerPPLegalIdentityAltIDType, sunIdentityServerPPLegalIdentityAltIDValue, sunIdentityServerPPLegalIdentityVATIDType, sunIdentityServerPPLegalIdentityVATIDValue, sunIdentityServerPPEmploymentIdentityJobTitle, sunIdentityServerPPEmploymentIdentityOrg, sunIdentityServerPPEmploymentIdentityAltO, sunIdentityServerPPAddressCard, sunIdentityServerPPMsgContact, sunIdentityServerPPFacadeMugShot, sunIdentityServerPPFacadeWebSite, sunIdentityServerPPFacadeNamePronounced, sunIdentityServerPPFacadeGreetSound, sunIdentityServerPPFacadeGreetMeSound, sunIdentityServerPPDemographicsDisplayLanguage, sunIdentityServerPPDemographicsLanguage, sunIdentityServerPPDemographicsBirthday, sunIdentityServerPPDemographicsAge, sunIdentityServerPPDemographicsTimeZone, sunIdentityServerPPSignKey, sunIdentityServerPPEncryptKey, sunIdentityServerPPEmergencyContact] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["sunIdentityServerLibertyPPService"],
    "&ldapDesc": "sunIdentityServerLibertyPPService OC" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_sunIdentityServerLibertyPPService /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
