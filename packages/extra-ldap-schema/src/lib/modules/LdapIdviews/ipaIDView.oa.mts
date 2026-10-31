/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { nsContainer } from "../LdapCore389/nsContainer.oa.mjs";
// export { description } from "../SelectedAttributeTypes/description.oa.mjs";
// export { id_oc_ipaIDView } from "../LdapIdviews/id-oc-ipaIDView.va.mjs";


/**
 * @summary ipaIDView
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ipaIDView OBJECT-CLASS ::= {
 *   SUBCLASS OF               { nsContainer }
 *   MAY CONTAIN               { description }
 *   LDAP-NAME                 {"ipaIDView"}
 *   ID                        id-oc-ipaIDView }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const ipaIDView: OBJECT_CLASS = undefined;

/* eslint-enable */
