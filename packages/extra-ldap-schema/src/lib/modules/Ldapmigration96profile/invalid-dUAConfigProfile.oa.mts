/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
// export { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { id_oc_invalid_dUAConfigProfile } from "../Ldapmigration96profile/id-oc-invalid-dUAConfigProfile.va.mjs";
import { attributeMap } from "../DUAConf/attributeMap.oa.mjs";
import { authenticationMethod } from "../DUAConf/authenticationMethod.oa.mjs";
import { bindTimeLimit } from "../DUAConf/bindTimeLimit.oa.mjs";
import { credentialLevel } from "../DUAConf/credentialLevel.oa.mjs";
import { defaultSearchBase } from "../DUAConf/defaultSearchBase.oa.mjs";
import { defaultSearchScope } from "../DUAConf/defaultSearchScope.oa.mjs";
import { defaultServerList } from "../DUAConf/defaultServerList.oa.mjs";
import { followReferrals } from "../DUAConf/followReferrals.oa.mjs";
import { objectclassMap } from "../DUAConf/objectclassMap.oa.mjs";
import { preferredServerList } from "../DUAConf/preferredServerList.oa.mjs";
import { profileTTL } from "../DUAConf/profileTTL.oa.mjs";
import { searchTimeLimit } from "../DUAConf/searchTimeLimit.oa.mjs";
import { serviceAuthenticationMethod } from "../DUAConf/serviceAuthenticationMethod.oa.mjs";
import { serviceCredentialLevel } from "../DUAConf/serviceCredentialLevel.oa.mjs";
import { serviceSearchDescriptor } from "../DUAConf/serviceSearchDescriptor.oa.mjs";
// export { id_oc_invalid_dUAConfigProfile } from "../Ldapmigration96profile/id-oc-invalid-dUAConfigProfile.va.mjs";


/**
 * @summary invalid_dUAConfigProfile
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * invalid-dUAConfigProfile OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName }
 *   MAY CONTAIN               { attributeMap
 *                               | authenticationMethod
 *                               | bindTimeLimit
 *                               | credentialLevel
 *                               | defaultSearchBase
 *                               | defaultSearchScope
 *                               | defaultServerList
 *                               | followReferrals
 *                               | objectclassMap
 *                               | preferredServerList
 *                               | profileTTL
 *                               | searchTimeLimit
 *                               | serviceAuthenticationMethod
 *                               | serviceCredentialLevel
 *                               | serviceSearchDescriptor }
 *   LDAP-NAME                 {"DUAConfigProfile"}
 *   ID                        id-oc-invalid-dUAConfigProfile }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const invalid_dUAConfigProfile: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ commonName, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ attributeMap, authenticationMethod, bindTimeLimit, credentialLevel, defaultSearchBase, defaultSearchScope, defaultServerList, followReferrals, objectclassMap, preferredServerList, profileTTL, searchTimeLimit, serviceAuthenticationMethod, serviceCredentialLevel, serviceSearchDescriptor, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "DUAConfigProfile" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_invalid_dUAConfigProfile /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
