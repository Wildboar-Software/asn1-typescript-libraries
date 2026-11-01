/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_ipaAssociation } from "../Ldap60basev2/id-oc-ipaAssociation.va.mjs";

import { memberUser } from "../Ldap60basev2/memberUser.oa.mjs";
import { userCategory } from "../Ldap60basev2/userCategory.oa.mjs";
import { memberHost } from "../Ldap60basev2/memberHost.oa.mjs";
import { hostCategory } from "../Ldap60basev2/hostCategory.oa.mjs";
import { ipaEnabledFlag } from "../Ldap60basev2/ipaEnabledFlag.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { ipaUniqueID } from "../Ldap60basev2/ipaUniqueID.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
/**
 * @summary ipaAssociation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ipaAssociation OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      abstract
 *   MUST CONTAIN              { ipaUniqueID
 *                               | commonName }
 *   MAY CONTAIN               { memberUser
 *                               | userCategory
 *                               | memberHost
 *                               | hostCategory
 *                               | ipaEnabledFlag
 *                               | description }
 *   LDAP-NAME                 {"ipaAssociation"}
 *   ID                        id-oc-ipaAssociation }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const ipaAssociation: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": abstract /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ ipaUniqueID, commonName, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ memberUser, userCategory, memberHost, hostCategory, ipaEnabledFlag, description, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "ipaAssociation" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_ipaAssociation /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
