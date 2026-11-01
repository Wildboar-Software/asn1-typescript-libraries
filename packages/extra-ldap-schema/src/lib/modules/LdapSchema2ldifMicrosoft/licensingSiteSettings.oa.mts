/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { applicationSiteSettings } from "../LdapSchema2ldifMicrosoft/applicationSiteSettings.oa.mjs";
import { siteServer } from "../MSUser/siteServer.oa.mjs";
import { id_oc_licensingSiteSettings } from "../LdapSchema2ldifMicrosoft/id-oc-licensingSiteSettings.va.mjs";


/**
 * @summary licensingSiteSettings
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * licensingSiteSettings OBJECT-CLASS ::= {
 *   SUBCLASS OF               { applicationSiteSettings }
 *   MAY CONTAIN               { siteServer }
 *   LDAP-NAME                 {"licensingSiteSettings"}
 *   ID                        id-oc-licensingSiteSettings }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const licensingSiteSettings: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ applicationSiteSettings, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ siteServer, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "licensingSiteSettings" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_licensingSiteSettings /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

