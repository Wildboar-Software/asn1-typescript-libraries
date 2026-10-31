/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_eduPermission } from "../Ldappc/id-oc-eduPermission.va.mjs";
import { eduPermissionFunctionId } from "./eduPermissionFunctionId.oa.mjs";
import { eduPermissionId } from "./eduPermissionId.oa.mjs";
import { eduPermissionLimit } from "./eduPermissionLimit.oa.mjs";
import { eduPermissionLimitId } from "./eduPermissionLimitId.oa.mjs";
import { eduPermissionScopeId } from "./eduPermissionScopeId.oa.mjs";
import { eduPermissionScopeName } from "./eduPermissionScopeName.oa.mjs";
import { eduPermissionSubsystemId } from "./eduPermissionSubsystemId.oa.mjs";

/**
 * @summary eduPermission
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * eduPermission OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { eduPermissionSubsystemId
 *                               | eduPermissionFunctionId
 *                               | eduPermissionId }
 *   MAY CONTAIN               { eduPermissionScopeId
 *                               | eduPermissionScopeName
 *                               | eduPermissionLimit
 *                               | eduPermissionLimitId }
 *   LDAP-NAME                 {"eduPermission"}
 *   ID                        id-oc-eduPermission }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const eduPermission: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [eduPermissionSubsystemId, eduPermissionFunctionId, eduPermissionId] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [eduPermissionScopeId, eduPermissionScopeName, eduPermissionLimit, eduPermissionLimitId] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["eduPermission"],
    "&id": id_oc_eduPermission /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
