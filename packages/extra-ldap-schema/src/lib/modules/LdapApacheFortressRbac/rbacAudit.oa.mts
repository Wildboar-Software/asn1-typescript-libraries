/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_rbacAudit } from "../LdapApacheFortressRbac/id-oc-rbacAudit.va.mjs";
import { uid } from "../SelectedAttributeTypes/uid.oa.mjs";
import { rbacAuditId } from "./rbacAuditId.oa.mjs";
import { rbacAuditMessages } from "./rbacAuditMessages.oa.mjs";
import { rbacAuditObjects } from "./rbacAuditObjects.oa.mjs";
import { rbacAuditOp } from "./rbacAuditOp.oa.mjs";
import { rbacAuditOperations } from "./rbacAuditOperations.oa.mjs";
import { rbacAuditProperties } from "./rbacAuditProperties.oa.mjs";
import { rbacAuditRequestedRoles } from "./rbacAuditRequestedRoles.oa.mjs";
import { rbacAuditResources } from "./rbacAuditResources.oa.mjs";
import { rbacAuditResult } from "./rbacAuditResult.oa.mjs";
import { rbacAuditRoles } from "./rbacAuditRoles.oa.mjs";
import { rbacAuditTimestamp } from "./rbacAuditTimestamp.oa.mjs";
import { rbacSessid } from "./rbacSessid.oa.mjs";

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
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [uid, rbacAuditId, rbacSessid, rbacAuditOp, rbacAuditRoles, rbacAuditRequestedRoles, rbacAuditObjects, rbacAuditOperations, rbacAuditResult, rbacAuditResources, rbacAuditProperties, rbacAuditTimestamp, rbacAuditMessages] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["rbacAudit"],
    "&ldapDesc": "RBAC Audit Object Class" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_rbacAudit /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
