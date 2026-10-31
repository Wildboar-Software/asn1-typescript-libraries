/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_dSUISettings } from "../LdapSchema2ldifMicrosoft/id-oc-dSUISettings.va.mjs";
import { dSUIAdminMaximum } from "../MSUser/dSUIAdminMaximum.oa.mjs";
import { dSUIAdminNotification } from "../MSUser/dSUIAdminNotification.oa.mjs";
import { dSUIShellMaximum } from "../MSUser/dSUIShellMaximum.oa.mjs";

/**
 * @summary dSUISettings
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dSUISettings OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MAY CONTAIN               { dSUIAdminNotification
 *                               | dSUIAdminMaximum
 *                               | dSUIShellMaximum }
 *   LDAP-NAME                 {"dSUISettings"}
 *   ID                        id-oc-dSUISettings }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const dSUISettings: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [dSUIAdminNotification, dSUIAdminMaximum, dSUIShellMaximum] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["dSUISettings"],
    "&id": id_oc_dSUISettings /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
