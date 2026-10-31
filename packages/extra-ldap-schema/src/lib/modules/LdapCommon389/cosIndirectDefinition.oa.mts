/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { cosSuperDefinition } from "../LdapCommon389/cosSuperDefinition.oa.mjs";
// export { cosIndirectSpecifier } from "../LdapCommon389/cosIndirectSpecifier.oa.mjs";
// export { id_oc_cosIndirectDefinition } from "../LdapCommon389/id-oc-cosIndirectDefinition.va.mjs";


/**
 * @summary cosIndirectDefinition
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * cosIndirectDefinition OBJECT-CLASS ::= {
 *   SUBCLASS OF               { cosSuperDefinition }
 *   MAY CONTAIN               { cosIndirectSpecifier }
 *   LDAP-NAME                 {"cosIndirectDefinition"}
 *   LDAP-DESC                 "Netscape defined objectclass"
 *   ID                        id-oc-cosIndirectDefinition }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const cosIndirectDefinition: OBJECT_CLASS = undefined;

/* eslint-enable */
