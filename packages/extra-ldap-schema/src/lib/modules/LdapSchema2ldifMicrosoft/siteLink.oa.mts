/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { siteList } from "../LdapSchema2ldifMicrosoft/siteList.oa.mjs";
// export { id_oc_siteLink } from "../LdapSchema2ldifMicrosoft/id-oc-siteLink.va.mjs";


/**
 * @summary siteLink
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * siteLink OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { siteList }
 *   MAY CONTAIN               { cost
 *                               | schedule
 *                               | options
 *                               | replInterval }
 *   LDAP-NAME                 {"siteLink"}
 *   ID                        id-oc-siteLink }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const siteLink: OBJECT_CLASS = undefined;

/* eslint-enable */
