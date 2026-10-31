/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
// export { id_oc_gotoSubmenuEntry } from "../LdapGosaCoreGosaSamba3/id-oc-gotoSubmenuEntry.va.mjs";


/**
 * @summary gotoSubmenuEntry
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gotoSubmenuEntry OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName }
 *   MAY CONTAIN               { gosaApplicationIcon
 *                               | gosaApplicationPriority }
 *   LDAP-NAME                 {"gotoSubmenuEntry"}
 *   LDAP-DESC                 "GOto - contains environment settings (v2.7)"
 *   ID                        id-oc-gotoSubmenuEntry }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gotoSubmenuEntry: OBJECT_CLASS = undefined;

/* eslint-enable */
