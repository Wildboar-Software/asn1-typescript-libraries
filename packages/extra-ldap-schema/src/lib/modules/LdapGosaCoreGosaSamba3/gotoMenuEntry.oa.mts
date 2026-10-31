/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
// export { id_oc_gotoMenuEntry } from "../LdapGosaCoreGosaSamba3/id-oc-gotoMenuEntry.va.mjs";


/**
 * @summary gotoMenuEntry
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gotoMenuEntry OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName }
 *   MAY CONTAIN               { gosaApplicationParameter
 *                               | gosaApplicationPriority }
 *   LDAP-NAME                 {"gotoMenuEntry"}
 *   LDAP-DESC                 "GOto - defines a menu entry (v2.7)"
 *   ID                        id-oc-gotoMenuEntry }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gotoMenuEntry: OBJECT_CLASS = undefined;

/* eslint-enable */
