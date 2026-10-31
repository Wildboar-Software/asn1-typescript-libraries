/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
// export { id_oc_gosaApplicationGroup } from "../LdapGosaCoreGosaSamba3/id-oc-gosaApplicationGroup.va.mjs";


/**
 * @summary gosaApplicationGroup
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gosaApplicationGroup OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { commonName }
 *   MAY CONTAIN               { gosaMemberApplication
 *                               | gosaApplicationParameter }
 *   LDAP-NAME                 {"gosaApplicationGroup"}
 *   LDAP-DESC                 "Class for GOsa application groups (v2.7)"
 *   ID                        id-oc-gosaApplicationGroup }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gosaApplicationGroup: OBJECT_CLASS = undefined;

/* eslint-enable */
