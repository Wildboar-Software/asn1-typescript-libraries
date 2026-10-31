/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { sambaPreviousClearTextPassword } from "../LdapGosaCoreSamba3/sambaPreviousClearTextPassword.oa.mjs";
// export { id_oc_sambaTrustedDomainPassword } from "../LdapGosaCoreSamba3/id-oc-sambaTrustedDomainPassword.va.mjs";


/**
 * @summary sambaTrustedDomainPassword
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * sambaTrustedDomainPassword OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { sambaDomainName
 *                               | sambaSID
 *                               | sambaClearTextPassword
 *                               | sambaPwdLastSet }
 *   MAY CONTAIN               { sambaPreviousClearTextPassword }
 *   LDAP-NAME                 {"sambaTrustedDomainPassword"}
 *   LDAP-DESC                 "Samba Trusted Domain Password"
 *   ID                        id-oc-sambaTrustedDomainPassword }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const sambaTrustedDomainPassword: OBJECT_CLASS = undefined;

/* eslint-enable */
