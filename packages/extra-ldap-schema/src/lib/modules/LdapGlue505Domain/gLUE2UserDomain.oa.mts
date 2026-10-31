/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { gLUE2Domain } from "../LdapGlue505Domain/gLUE2Domain.oa.mjs";
// export { id_oc_gLUE2UserDomain } from "../LdapGlue505Domain/id-oc-gLUE2UserDomain.va.mjs";


/**
 * @summary gLUE2UserDomain
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gLUE2UserDomain OBJECT-CLASS ::= {
 *   SUBCLASS OF               { gLUE2Domain }
 *   MAY CONTAIN               { gLUE2UserDomainLevel
 *                               | gLUE2UserDomainUserManager
 *                               | gLUE2UserDomainMember
 *                               | gLUE2UserDomainUserDomainForeignKey }
 *   LDAP-NAME                 {"GLUE2UserDomain"}
 *   LDAP-DESC                 "A collection of actors that can be assigned with user roles and privileges to services or shares via policies"
 *   ID                        id-oc-gLUE2UserDomain }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gLUE2UserDomain: OBJECT_CLASS = undefined;

/* eslint-enable */
