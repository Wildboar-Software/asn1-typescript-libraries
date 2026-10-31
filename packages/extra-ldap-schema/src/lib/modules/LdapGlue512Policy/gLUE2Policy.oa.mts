/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { gLUE2Entity } from "../LdapGlue501Entity/gLUE2Entity.oa.mjs";
// export { gLUE2PolicyUserDomainForeignKey } from "../LdapGlue512Policy/gLUE2PolicyUserDomainForeignKey.oa.mjs";
// export { id_oc_gLUE2Policy } from "../LdapGlue512Policy/id-oc-gLUE2Policy.va.mjs";


/**
 * @summary gLUE2Policy
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gLUE2Policy OBJECT-CLASS ::= {
 *   SUBCLASS OF               { gLUE2Entity }
 *   MUST CONTAIN              { gLUE2PolicyID
 *                               | gLUE2PolicyScheme
 *                               | gLUE2PolicyRule }
 *   MAY CONTAIN               { gLUE2PolicyUserDomainForeignKey }
 *   LDAP-NAME                 {"GLUE2Policy"}
 *   LDAP-DESC                 "A policy"
 *   ID                        id-oc-gLUE2Policy }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gLUE2Policy: OBJECT_CLASS = undefined;

/* eslint-enable */
