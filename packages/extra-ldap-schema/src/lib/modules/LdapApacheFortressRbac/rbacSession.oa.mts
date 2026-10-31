/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_rbacSession } from "../LdapApacheFortressRbac/id-oc-rbacSession.va.mjs";
import { uid } from "../SelectedAttributeTypes/uid.oa.mjs";
import { rbacRoleConstraints } from "./rbacRoleConstraints.oa.mjs";
import { rbacRoles } from "./rbacRoles.oa.mjs";
import { rbacSessid } from "./rbacSessid.oa.mjs";
import { rbacUserDN } from "./rbacUserDN.oa.mjs";
import { tenantid } from "./tenantid.oa.mjs";

/**
 * @summary rbacSession
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * rbacSession OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { rbacSessid
 *                               | uid
 *                               | tenantid }
 *   MAY CONTAIN               { rbacUserDN
 *                               | rbacRoles
 *                               | rbacRoleConstraints }
 *   LDAP-NAME                 {"rbacSession"}
 *   LDAP-DESC                 "RBAC Session Object Class"
 *   ID                        id-oc-rbacSession }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const rbacSession: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [rbacSessid, uid, tenantid] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [rbacUserDN, rbacRoles, rbacRoleConstraints] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["rbacSession"],
    "&ldapDesc": "RBAC Session Object Class" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_rbacSession /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
