/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { id_oc_zimbraGroupStaticUnit } from "../LdapZimbra/id-oc-zimbraGroupStaticUnit.va.mjs";


/**
 * @summary zimbraGroupStaticUnit
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraGroupStaticUnit OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName
 *                               | zimbraGroupId
 *                               | zimbraId }
 *   MAY CONTAIN               { description
 *                               | zimbraCreateTimestamp
 *                               | zimbraMailForwardingAddress }
 *   LDAP-NAME                 {"zimbraGroupStaticUnit"}
 *   LDAP-DESC                 "hold attributes for the static entry of dynamic groups."
 *   ID                        id-oc-zimbraGroupStaticUnit }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const zimbraGroupStaticUnit: OBJECT_CLASS = undefined;

/* eslint-enable */
