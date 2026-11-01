/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_gotoMimeType } from "../LdapGosaCoreGotoMime/id-oc-gotoMimeType.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { gotoMimeFilePattern } from "../LdapGosaCoreGotoMime/gotoMimeFilePattern.oa.mjs";
import { gotoMimeGroup } from "../LdapGosaCoreGotoMime/gotoMimeGroup.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { gotoMimeIcon } from "../LdapGosaCoreGotoMime/gotoMimeIcon.oa.mjs";
import { gotoMimeApplication } from "../LdapGosaCoreGotoMime/gotoMimeApplication.oa.mjs";
import { gotoMimeEmbeddedApplication } from "../LdapGosaCoreGotoMime/gotoMimeEmbeddedApplication.oa.mjs";
import { gotoMimeLeftClickAction } from "../LdapGosaCoreGotoMime/gotoMimeLeftClickAction.oa.mjs";


/**
 * @summary gotoMimeType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gotoMimeType OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName
 *                               | gotoMimeFilePattern
 *                               | gotoMimeGroup }
 *   MAY CONTAIN               { description
 *                               | gotoMimeIcon
 *                               | gotoMimeApplication
 *                               | gotoMimeEmbeddedApplication
 *                               | gotoMimeLeftClickAction }
 *   LDAP-NAME                 {"gotoMimeType"}
 *   LDAP-DESC                 "Class to represent global mime types (v2.7)"
 *   ID                        id-oc-gotoMimeType }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gotoMimeType: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ commonName, gotoMimeFilePattern, gotoMimeGroup, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ description, gotoMimeIcon, gotoMimeApplication, gotoMimeEmbeddedApplication, gotoMimeLeftClickAction, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "gotoMimeType" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Class to represent global mime types (v2.7)" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_gotoMimeType /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

