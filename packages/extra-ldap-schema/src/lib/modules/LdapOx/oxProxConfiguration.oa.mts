/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { objectClass } from "../InformationFramework/objectClass.oa.mjs";
import { id_oc_oxProxConfiguration } from "../LdapOx/id-oc-oxProxConfiguration.va.mjs";
import { organizationalUnitName } from "../SelectedAttributeTypes/organizationalUnitName.oa.mjs";
import { oxScriptDn } from "../LdapOx/oxScriptDn.oa.mjs";
import { oxProxConf } from "../LdapOx/oxProxConf.oa.mjs";


/**
 * @summary oxProxConfiguration
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * oxProxConfiguration OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { objectClass }
 *   MAY CONTAIN               { organizationalUnitName
 *                               | oxProxConf
 *                               | oxScriptDn }
 *   LDAP-NAME                 {"oxProxConfiguration"}
 *   ID                        id-oc-oxProxConfiguration }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const oxProxConfiguration: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ objectClass, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ organizationalUnitName, oxProxConf, oxScriptDn, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "oxProxConfiguration" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_oxProxConfiguration /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

