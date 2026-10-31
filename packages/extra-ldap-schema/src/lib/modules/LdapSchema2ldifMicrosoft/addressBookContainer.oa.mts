/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { displayName } from "../LdapSchema2ldifMicrosoft/displayName.oa.mjs";
// export { purportedSearch } from "../LdapSchema2ldifMicrosoft/purportedSearch.oa.mjs";
// export { id_oc_addressBookContainer } from "../LdapSchema2ldifMicrosoft/id-oc-addressBookContainer.va.mjs";


/**
 * @summary addressBookContainer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * addressBookContainer OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { displayName }
 *   MAY CONTAIN               { purportedSearch }
 *   LDAP-NAME                 {"addressBookContainer"}
 *   ID                        id-oc-addressBookContainer }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const addressBookContainer: OBJECT_CLASS = undefined;

/* eslint-enable */
