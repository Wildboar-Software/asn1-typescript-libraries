/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_zimbraGroupDynamicUnit } from "../LdapZimbra/id-oc-zimbraGroupDynamicUnit.va.mjs";

import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { displayName } from "../InetOrgPerson/displayName.oa.mjs";
import { mail } from "../LdapSchema2ldifCore/mail.oa.mjs";
import { zimbraCreateTimestamp } from "../LdapZimbra/zimbraCreateTimestamp.oa.mjs";
import { zimbraMailAlias } from "../LdapZimbra/zimbraMailAlias.oa.mjs";
import { zimbraMailStatus } from "../LdapZimbra/zimbraMailStatus.oa.mjs";
import { memberURL } from "../DynGroup/memberURL.oa.mjs";
import { zimbraGroupId } from "../LdapZimbra/zimbraGroupId.oa.mjs";
import { zimbraId } from "../LdapZimbra/zimbraId.oa.mjs";
/**
 * @summary zimbraGroupDynamicUnit
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraGroupDynamicUnit OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { memberURL
 *                               | zimbraGroupId
 *                               | zimbraId }
 *   MAY CONTAIN               { description
 *                               | displayName
 *                               | mail
 *                               | zimbraCreateTimestamp
 *                               | zimbraMailAlias
 *                               | zimbraMailStatus }
 *   LDAP-NAME                 {"zimbraGroupDynamicUnit"}
 *   LDAP-DESC                 "hold attributes for the dynamic entry of dynamic groups."
 *   ID                        id-oc-zimbraGroupDynamicUnit }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const zimbraGroupDynamicUnit: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ memberURL, zimbraGroupId, zimbraId, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ description, displayName, mail, zimbraCreateTimestamp, zimbraMailAlias, zimbraMailStatus, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "zimbraGroupDynamicUnit" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "hold attributes for the dynamic entry of dynamic groups." /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_zimbraGroupDynamicUnit /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
