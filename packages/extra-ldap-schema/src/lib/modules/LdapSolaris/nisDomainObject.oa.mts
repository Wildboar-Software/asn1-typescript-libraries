/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { nisDomain } from "../LdapSolaris/nisDomain.oa.mjs";
// export { id_oc_nisDomainObject } from "../LdapSolaris/id-oc-nisDomainObject.va.mjs";


/**
 * @summary nisDomainObject
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * nisDomainObject OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { nisDomain }
 *   LDAP-NAME                 {"nisDomainObject"}
 *   LDAP-DESC                 "nisDomainObject"
 *   ID                        id-oc-nisDomainObject }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const nisDomainObject: OBJECT_CLASS = undefined;

/* eslint-enable */
