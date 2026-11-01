/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_rbacSession } from "../LdapApacheFortressRbac/id-oc-rbacSession.va.mjs";
import { rbacSessid } from "../LdapApacheFortressRbac/rbacSessid.oa.mjs";
import { uid } from "../SelectedAttributeTypes/uid.oa.mjs";
import { tenantid } from "../LdapApacheFortressRbac/tenantid.oa.mjs";
import { rbacUserDN } from "../LdapApacheFortressRbac/rbacUserDN.oa.mjs";
import { rbacRoles } from "../LdapApacheFortressRbac/rbacRoles.oa.mjs";
import { rbacRoleConstraints } from "../LdapApacheFortressRbac/rbacRoleConstraints.oa.mjs";
// export { id_oc_rbacSession } from "../LdapApacheFortressRbac/id-oc-rbacSession.va.mjs";


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
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ rbacSessid, uid, tenantid, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ rbacUserDN, rbacRoles, rbacRoleConstraints, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "rbacSession" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "RBAC Session Object Class" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_rbacSession /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
