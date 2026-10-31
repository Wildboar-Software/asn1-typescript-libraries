/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { abstract } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_applicationSettings } from "../LdapSchema2ldifMicrosoft/id-oc-applicationSettings.va.mjs";
import { applicationName } from "../MSUser/applicationName.oa.mjs";
import { notificationList } from "../MSUser/notificationList.oa.mjs";

/**
 * @summary applicationSettings
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * applicationSettings OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      abstract
 *   MAY CONTAIN               { applicationName
 *                               | notificationList }
 *   LDAP-NAME                 {"applicationSettings"}
 *   ID                        id-oc-applicationSettings }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const applicationSettings: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": abstract /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [applicationName, notificationList] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["applicationSettings"],
    "&id": id_oc_applicationSettings /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
