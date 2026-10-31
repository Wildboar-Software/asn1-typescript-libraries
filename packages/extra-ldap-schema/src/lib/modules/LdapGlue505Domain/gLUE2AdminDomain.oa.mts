/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { gLUE2Domain } from "../LdapGlue505Domain/gLUE2Domain.oa.mjs";
// export { id_oc_gLUE2AdminDomain } from "../LdapGlue505Domain/id-oc-gLUE2AdminDomain.va.mjs";


/**
 * @summary gLUE2AdminDomain
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gLUE2AdminDomain OBJECT-CLASS ::= {
 *   SUBCLASS OF               { gLUE2Domain }
 *   MAY CONTAIN               { gLUE2AdminDomainDistributed
 *                               | gLUE2AdminDomainOwner
 *                               | gLUE2AdminDomainAdminDomainForeignKey }
 *   LDAP-NAME                 {"GLUE2AdminDomain"}
 *   LDAP-DESC                 "A collection of actors that can be assigned with administrative roles and privileges to services via policies. An AdminDomain manages services that can be geographically distributed, nevertheless a primary location should be identified."
 *   ID                        id-oc-gLUE2AdminDomain }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gLUE2AdminDomain: OBJECT_CLASS = undefined;

/* eslint-enable */
