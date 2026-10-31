/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { id_oc_interSiteTransport } from "../LdapSchema2ldifMicrosoft/id-oc-interSiteTransport.va.mjs";


/**
 * @summary interSiteTransport
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * interSiteTransport OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { transportDLLName
 *                               | transportAddressAttribute }
 *   MAY CONTAIN               { options
 *                               | replInterval }
 *   LDAP-NAME                 {"interSiteTransport"}
 *   ID                        id-oc-interSiteTransport }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const interSiteTransport: OBJECT_CLASS = undefined;

/* eslint-enable */
