/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { id_oc_sunIdentityServerLibertyPPService } from "../Ldapmigration71sunAm/id-oc-sunIdentityServerLibertyPPService.va.mjs";


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
const sunIdentityServerLibertyPPService: OBJECT_CLASS = undefined;

/* eslint-enable */
