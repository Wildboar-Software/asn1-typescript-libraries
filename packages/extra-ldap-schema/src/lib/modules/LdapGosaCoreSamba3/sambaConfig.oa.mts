/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { description } from "../SelectedAttributeTypes/description.oa.mjs";
// export { id_oc_sambaConfig } from "../LdapGosaCoreSamba3/id-oc-sambaConfig.va.mjs";


/**
 * @summary sambaConfig
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * sambaConfig OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { description }
 *   LDAP-NAME                 {"sambaConfig"}
 *   LDAP-DESC                 "Samba Configuration Section"
 *   ID                        id-oc-sambaConfig }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const sambaConfig: OBJECT_CLASS = undefined;

/* eslint-enable */
