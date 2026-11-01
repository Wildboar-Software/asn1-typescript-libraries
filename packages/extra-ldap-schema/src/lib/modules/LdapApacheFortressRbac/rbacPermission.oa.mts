/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_rbacPermission } from "../LdapApacheFortressRbac/id-oc-rbacPermission.va.mjs";

import { rbacRoles } from "../LdapApacheFortressRbac/rbacRoles.oa.mjs";
import { rbacObjName } from "../LdapApacheFortressRbac/rbacObjName.oa.mjs";
import { rbacOpName } from "../LdapApacheFortressRbac/rbacOpName.oa.mjs";
import { uid } from "../SelectedAttributeTypes/uid.oa.mjs";
/**
 * @summary rbacPermission
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * rbacPermission OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MAY CONTAIN               { rbacRoles
 *                               | rbacObjName
 *                               | rbacOpName
 *                               | uid }
 *   LDAP-NAME                 {"rbacPermission"}
 *   LDAP-DESC                 "RBAC Permission Object Class"
 *   ID                        id-oc-rbacPermission }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const rbacPermission: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ rbacRoles, rbacObjName, rbacOpName, uid, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "rbacPermission" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "RBAC Permission Object Class" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_rbacPermission /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
