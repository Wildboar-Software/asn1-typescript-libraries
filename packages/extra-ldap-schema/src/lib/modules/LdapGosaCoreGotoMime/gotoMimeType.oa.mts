/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_gotoMimeType } from "../LdapGosaCoreGotoMime/id-oc-gotoMimeType.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { gotoMimeApplication } from "./gotoMimeApplication.oa.mjs";
import { gotoMimeEmbeddedApplication } from "./gotoMimeEmbeddedApplication.oa.mjs";
import { gotoMimeFilePattern } from "./gotoMimeFilePattern.oa.mjs";
import { gotoMimeGroup } from "./gotoMimeGroup.oa.mjs";
import { gotoMimeIcon } from "./gotoMimeIcon.oa.mjs";
import { gotoMimeLeftClickAction } from "./gotoMimeLeftClickAction.oa.mjs";

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
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [commonName, gotoMimeFilePattern, gotoMimeGroup] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [description, gotoMimeIcon, gotoMimeApplication, gotoMimeEmbeddedApplication, gotoMimeLeftClickAction] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["gotoMimeType"],
    "&ldapDesc": "Class to represent global mime types (v2.7)" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_gotoMimeType /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
