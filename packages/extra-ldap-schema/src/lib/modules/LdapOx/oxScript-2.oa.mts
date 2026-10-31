/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { objectClass } from "../InformationFramework/objectClass.oa.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_oxScript_2 } from "../LdapOx/id-oc-oxScript-2.va.mjs";
import { inum } from "./inum.oa.mjs";
import { oxScript } from "./oxScript.oa.mjs";
import { oxScriptType } from "./oxScriptType.oa.mjs";

/**
 * @summary oxScript_2
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * oxScript-2 OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { objectClass }
 *   MAY CONTAIN               { inum
 *                               | oxScript
 *                               | oxScriptType }
 *   LDAP-NAME                 {"oxScript"}
 *   ID                        id-oc-oxScript-2 }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const oxScript_2: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [objectClass] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [inum, oxScript, oxScriptType] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["oxScript"],
    "&id": id_oc_oxScript_2 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
