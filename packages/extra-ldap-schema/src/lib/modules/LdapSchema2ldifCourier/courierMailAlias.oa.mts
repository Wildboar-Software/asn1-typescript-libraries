/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { id_oc_courierMailAlias } from "../LdapSchema2ldifCourier/id-oc-courierMailAlias.va.mjs";


/**
 * @summary courierMailAlias
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * courierMailAlias OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { mail
 *                               | maildrop }
 *   MAY CONTAIN               { mailsource
 *                               | description }
 *   LDAP-NAME                 {"CourierMailAlias"}
 *   LDAP-DESC                 "Mail aliasing/forwarding entry"
 *   ID                        id-oc-courierMailAlias }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const courierMailAlias: OBJECT_CLASS = undefined;

/* eslint-enable */
