/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { associatedDomain } from "../MIXERAddressMapping/associatedDomain.oa.mjs";
// export { id_oc_domainRelatedObject } from "../LdapSchema2ldifCosine/id-oc-domainRelatedObject.va.mjs";


/**
 * @summary domainRelatedObject
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * domainRelatedObject OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { associatedDomain }
 *   LDAP-NAME                 {"domainRelatedObject"}
 *   LDAP-DESC                 "RFC1274: an object related to an domain"
 *   ID                        id-oc-domainRelatedObject }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const domainRelatedObject: OBJECT_CLASS = undefined;

/* eslint-enable */
