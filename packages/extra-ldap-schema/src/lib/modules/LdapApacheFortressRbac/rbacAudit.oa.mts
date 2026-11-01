/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_rbacAudit } from "../LdapApacheFortressRbac/id-oc-rbacAudit.va.mjs";
import { uid } from "../SelectedAttributeTypes/uid.oa.mjs";
import { rbacAuditId } from "../LdapApacheFortressRbac/rbacAuditId.oa.mjs";
import { rbacSessid } from "../LdapApacheFortressRbac/rbacSessid.oa.mjs";
import { rbacAuditOp } from "../LdapApacheFortressRbac/rbacAuditOp.oa.mjs";
import { rbacAuditRoles } from "../LdapApacheFortressRbac/rbacAuditRoles.oa.mjs";
import { rbacAuditRequestedRoles } from "../LdapApacheFortressRbac/rbacAuditRequestedRoles.oa.mjs";
import { rbacAuditObjects } from "../LdapApacheFortressRbac/rbacAuditObjects.oa.mjs";
import { rbacAuditOperations } from "../LdapApacheFortressRbac/rbacAuditOperations.oa.mjs";
import { rbacAuditResult } from "../LdapApacheFortressRbac/rbacAuditResult.oa.mjs";
import { rbacAuditResources } from "../LdapApacheFortressRbac/rbacAuditResources.oa.mjs";
import { rbacAuditProperties } from "../LdapApacheFortressRbac/rbacAuditProperties.oa.mjs";
import { rbacAuditTimestamp } from "../LdapApacheFortressRbac/rbacAuditTimestamp.oa.mjs";
import { rbacAuditMessages } from "../LdapApacheFortressRbac/rbacAuditMessages.oa.mjs";


/**
 * @summary rbacAudit
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * rbacAudit OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MAY CONTAIN               { uid
 *                               | rbacAuditId
 *                               | rbacSessid
 *                               | rbacAuditOp
 *                               | rbacAuditRoles
 *                               | rbacAuditRequestedRoles
 *                               | rbacAuditObjects
 *                               | rbacAuditOperations
 *                               | rbacAuditResult
 *                               | rbacAuditResources
 *                               | rbacAuditProperties
 *                               | rbacAuditTimestamp
 *                               | rbacAuditMessages }
 *   LDAP-NAME                 {"rbacAudit"}
 *   LDAP-DESC                 "RBAC Audit Object Class"
 *   ID                        id-oc-rbacAudit }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const rbacAudit: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ uid, rbacAuditId, rbacSessid, rbacAuditOp, rbacAuditRoles, rbacAuditRequestedRoles, rbacAuditObjects, rbacAuditOperations, rbacAuditResult, rbacAuditResources, rbacAuditProperties, rbacAuditTimestamp, rbacAuditMessages, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "rbacAudit" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "RBAC Audit Object Class" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_rbacAudit /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

