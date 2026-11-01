/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { top } from "../InformationFramework/top.oa.mjs";
import { objectClass } from "../InformationFramework/objectClass.oa.mjs";
import { id_oc_oxCustomScript } from "../LdapOx/id-oc-oxCustomScript.va.mjs";

import { inum } from "../LdapOx/inum.oa.mjs";
import { displayName } from "../InetOrgPerson/displayName.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { oxScript } from "../LdapOx/oxScript.oa.mjs";
import { oxScriptType } from "../LdapOx/oxScriptType.oa.mjs";
import { programmingLanguage } from "../LdapOx/programmingLanguage.oa.mjs";
import { oxModuleProperty } from "../LdapOx/oxModuleProperty.oa.mjs";
import { oxConfigurationProperty } from "../LdapOx/oxConfigurationProperty.oa.mjs";
import { oxLevel } from "../LdapOx/oxLevel.oa.mjs";
import { oxRevision } from "../LdapOx/oxRevision.oa.mjs";
import { oxEnabled } from "../LdapOx/oxEnabled.oa.mjs";
import { oxScriptError } from "../LdapOx/oxScriptError.oa.mjs";
import { oxAlias } from "../LdapOx/oxAlias.oa.mjs";
/**
 * @summary oxCustomScript
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * oxCustomScript OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { objectClass }
 *   MAY CONTAIN               { inum
 *                               | displayName
 *                               | description
 *                               | oxScript
 *                               | oxScriptType
 *                               | programmingLanguage
 *                               | oxModuleProperty
 *                               | oxConfigurationProperty
 *                               | oxLevel
 *                               | oxRevision
 *                               | oxEnabled
 *                               | oxScriptError
 *                               | oxAlias }
 *   LDAP-NAME                 {"oxCustomScript"}
 *   ID                        id-oc-oxCustomScript }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const oxCustomScript: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ objectClass, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ inum, displayName, description, oxScript, oxScriptType, programmingLanguage, oxModuleProperty, oxConfigurationProperty, oxLevel, oxRevision, oxEnabled, oxScriptError, oxAlias, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "oxCustomScript" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_oxCustomScript /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
