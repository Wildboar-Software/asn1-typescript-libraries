/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { applicationSettings } from "../LdapSchema2ldifMicrosoft/applicationSettings.oa.mjs";
import { id_oc_nTFRSSettings } from "../LdapSchema2ldifMicrosoft/id-oc-nTFRSSettings.va.mjs";
import { fRSExtensions } from "../MSUser/fRSExtensions.oa.mjs";
import { managedBy } from "../MSUser/managedBy.oa.mjs";

/**
 * @summary nTFRSSettings
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * nTFRSSettings OBJECT-CLASS ::= {
 *   SUBCLASS OF               { applicationSettings }
 *   MAY CONTAIN               { fRSExtensions
 *                               | managedBy }
 *   LDAP-NAME                 {"nTFRSSettings"}
 *   ID                        id-oc-nTFRSSettings }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const nTFRSSettings: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [applicationSettings] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [fRSExtensions, managedBy] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["nTFRSSettings"],
    "&id": id_oc_nTFRSSettings /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
