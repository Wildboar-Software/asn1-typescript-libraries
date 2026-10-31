/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { gosaUserDefinedFilter } from "../LdapGosaCoreGosaSamba3/gosaUserDefinedFilter.oa.mjs";
// export { id_oc_gosaProperties } from "../LdapGosaCoreGosaSamba3/id-oc-gosaProperties.va.mjs";


/**
 * @summary gosaProperties
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gosaProperties OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { gosaUserDefinedFilter }
 *   LDAP-NAME                 {"gosaProperties"}
 *   LDAP-DESC                 "Store GOsa properties (v2.7)"
 *   ID                        id-oc-gosaProperties }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gosaProperties: OBJECT_CLASS = undefined;

/* eslint-enable */
