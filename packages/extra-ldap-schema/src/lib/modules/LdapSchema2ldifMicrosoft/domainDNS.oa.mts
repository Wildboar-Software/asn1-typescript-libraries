/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { domain } from "../LdapSchema2ldifMicrosoft/domain.oa.mjs";
// export { managedBy } from "../MSUser/managedBy.oa.mjs";
// export { id_oc_domainDNS } from "../LdapSchema2ldifMicrosoft/id-oc-domainDNS.va.mjs";


/**
 * @summary domainDNS
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * domainDNS OBJECT-CLASS ::= {
 *   SUBCLASS OF               { domain }
 *   MAY CONTAIN               { managedBy }
 *   LDAP-NAME                 {"domainDNS"}
 *   ID                        id-oc-domainDNS }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const domainDNS: OBJECT_CLASS = undefined;

/* eslint-enable */
