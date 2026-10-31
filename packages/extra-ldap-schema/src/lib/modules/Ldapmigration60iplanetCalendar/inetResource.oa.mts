/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
// export { id_oc_inetResource } from "../Ldapmigration60iplanetCalendar/id-oc-inetResource.va.mjs";


/**
 * @summary inetResource
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * inetResource OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName }
 *   MAY CONTAIN               { telephoneNumber
 *                               | facsimileTelephoneNumber
 *                               | mail
 *                               | postalAddress
 *                               | inetResourceStatus }
 *   LDAP-NAME                 {"inetResource"}
 *   LDAP-DESC                 "Standard Object Class"
 *   ID                        id-oc-inetResource }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const inetResource: OBJECT_CLASS = undefined;

/* eslint-enable */
