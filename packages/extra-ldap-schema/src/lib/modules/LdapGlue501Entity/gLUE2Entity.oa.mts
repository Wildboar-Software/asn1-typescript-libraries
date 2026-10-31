/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { id_oc_gLUE2Entity } from "../LdapGlue501Entity/id-oc-gLUE2Entity.va.mjs";


/**
 * @summary gLUE2Entity
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gLUE2Entity OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      abstract
 *   MAY CONTAIN               { gLUE2EntityName
 *                               | gLUE2EntityOtherInfo
 *                               | gLUE2EntityCreationTime
 *                               | gLUE2EntityValidity }
 *   LDAP-NAME                 {"GLUE2Entity"}
 *   LDAP-DESC                 "Base class"
 *   ID                        id-oc-gLUE2Entity }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gLUE2Entity: OBJECT_CLASS = undefined;

/* eslint-enable */
