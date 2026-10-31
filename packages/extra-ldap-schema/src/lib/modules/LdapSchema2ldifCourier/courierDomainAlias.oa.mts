/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { id_oc_courierDomainAlias } from "../LdapSchema2ldifCourier/id-oc-courierDomainAlias.va.mjs";


/**
 * @summary courierDomainAlias
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * courierDomainAlias OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { virtualdomain
 *                               | virtualdomainuser }
 *   MAY CONTAIN               { mailsource
 *                               | description }
 *   LDAP-NAME                 {"CourierDomainAlias"}
 *   LDAP-DESC                 "Domain mail aliasing/forwarding entry"
 *   ID                        id-oc-courierDomainAlias }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const courierDomainAlias: OBJECT_CLASS = undefined;

/* eslint-enable */
