/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_gosaApplication } from "../LdapGosaCoreGosaSamba3/id-oc-gosaApplication.va.mjs";
import { gotoLogonScript } from "../LdapGosaCoreGoto/gotoLogonScript.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { gosaApplicationCategory } from "./gosaApplicationCategory.oa.mjs";
import { gosaApplicationExecute } from "./gosaApplicationExecute.oa.mjs";
import { gosaApplicationFlags } from "./gosaApplicationFlags.oa.mjs";
import { gosaApplicationIcon } from "./gosaApplicationIcon.oa.mjs";
import { gosaApplicationMimeType } from "./gosaApplicationMimeType.oa.mjs";
import { gosaApplicationName } from "./gosaApplicationName.oa.mjs";
import { gosaApplicationParameter } from "./gosaApplicationParameter.oa.mjs";

/**
 * @summary gosaApplication
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gosaApplication OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName
 *                               | gosaApplicationExecute }
 *   MAY CONTAIN               { gosaApplicationName
 *                               | gosaApplicationIcon
 *                               | gosaApplicationFlags
 *                               | gosaApplicationMimeType
 *                               | gosaApplicationParameter
 *                               | gotoLogonScript
 *                               | description
 *                               | gosaApplicationCategory }
 *   LDAP-NAME                 {"gosaApplication"}
 *   LDAP-DESC                 "Class for GOsa applications (v2.7)"
 *   ID                        id-oc-gosaApplication }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gosaApplication: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [commonName, gosaApplicationExecute] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [gosaApplicationName, gosaApplicationIcon, gosaApplicationFlags, gosaApplicationMimeType, gosaApplicationParameter, gotoLogonScript, description, gosaApplicationCategory] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["gosaApplication"],
    "&ldapDesc": "Class for GOsa applications (v2.7)" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_gosaApplication /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
