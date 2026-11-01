/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_gosaApplication } from "../LdapGosaCoreGosaSamba3/id-oc-gosaApplication.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { gosaApplicationExecute } from "../LdapGosaCoreGosaSamba3/gosaApplicationExecute.oa.mjs";
import { gosaApplicationName } from "../LdapGosaCoreGosaSamba3/gosaApplicationName.oa.mjs";
import { gosaApplicationIcon } from "../LdapGosaCoreGosaSamba3/gosaApplicationIcon.oa.mjs";
import { gosaApplicationFlags } from "../LdapGosaCoreGosaSamba3/gosaApplicationFlags.oa.mjs";
import { gosaApplicationMimeType } from "../LdapGosaCoreGosaSamba3/gosaApplicationMimeType.oa.mjs";
import { gosaApplicationParameter } from "../LdapGosaCoreGosaSamba3/gosaApplicationParameter.oa.mjs";
import { gotoLogonScript } from "../LdapGosaCoreGoto/gotoLogonScript.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { gosaApplicationCategory } from "../LdapGosaCoreGosaSamba3/gosaApplicationCategory.oa.mjs";


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
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ commonName, gosaApplicationExecute, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ gosaApplicationName, gosaApplicationIcon, gosaApplicationFlags, gosaApplicationMimeType, gosaApplicationParameter, gotoLogonScript, description, gosaApplicationCategory, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "gosaApplication" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Class for GOsa applications (v2.7)" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_gosaApplication /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

