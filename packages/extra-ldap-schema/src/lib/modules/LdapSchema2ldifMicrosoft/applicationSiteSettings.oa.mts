/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_applicationSiteSettings } from "../LdapSchema2ldifMicrosoft/id-oc-applicationSiteSettings.va.mjs";
import { applicationName } from "../MSUser/applicationName.oa.mjs";
import { notificationList } from "../MSUser/notificationList.oa.mjs";
// export { id_oc_applicationSiteSettings } from "../LdapSchema2ldifMicrosoft/id-oc-applicationSiteSettings.va.mjs";


/**
 * @summary applicationSiteSettings
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * applicationSiteSettings OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      abstract
 *   MAY CONTAIN               { applicationName
 *                               | notificationList }
 *   LDAP-NAME                 {"applicationSiteSettings"}
 *   ID                        id-oc-applicationSiteSettings }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const applicationSiteSettings: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": abstract /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ applicationName, notificationList, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "applicationSiteSettings" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_applicationSiteSettings /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
