/* eslint-disable */
import { displayName } from "../InetOrgPerson/displayName.oa.mjs";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { objectClass } from "../InformationFramework/objectClass.oa.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_oxCustomScript } from "../LdapOx/id-oc-oxCustomScript.va.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { inum } from "./inum.oa.mjs";
import { oxAlias } from "./oxAlias.oa.mjs";
import { oxConfigurationProperty } from "./oxConfigurationProperty.oa.mjs";
import { oxEnabled } from "./oxEnabled.oa.mjs";
import { oxLevel } from "./oxLevel.oa.mjs";
import { oxModuleProperty } from "./oxModuleProperty.oa.mjs";
import { oxRevision } from "./oxRevision.oa.mjs";
import { oxScript } from "./oxScript.oa.mjs";
import { oxScriptError } from "./oxScriptError.oa.mjs";
import { oxScriptType } from "./oxScriptType.oa.mjs";
import { programmingLanguage } from "./programmingLanguage.oa.mjs";

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
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [objectClass] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [inum, displayName, description, oxScript, oxScriptType, programmingLanguage, oxModuleProperty, oxConfigurationProperty, oxLevel, oxRevision, oxEnabled, oxScriptError, oxAlias] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["oxCustomScript"],
    "&id": id_oc_oxCustomScript /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
