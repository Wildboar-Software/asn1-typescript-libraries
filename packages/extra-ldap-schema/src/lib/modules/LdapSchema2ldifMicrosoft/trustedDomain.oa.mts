/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { leaf } from "../LdapSchema2ldifFmserver/leaf.oa.mjs";
// export { id_oc_trustedDomain } from "../LdapSchema2ldifMicrosoft/id-oc-trustedDomain.va.mjs";


/**
 * @summary trustedDomain
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * trustedDomain OBJECT-CLASS ::= {
 *   SUBCLASS OF               { leaf }
 *   MAY CONTAIN               { securityIdentifier
 *                               | trustAuthIncoming
 *                               | trustDirection
 *                               | trustPartner
 *                               | trustPosixOffset
 *                               | trustAuthOutgoing
 *                               | trustType
 *                               | trustAttributes
 *                               | domainCrossRef
 *                               | flatName
 *                               | initialAuthIncoming
 *                               | initialAuthOutgoing
 *                               | domainIdentifier
 *                               | additionalTrustedServiceNames }
 *   LDAP-NAME                 {"trustedDomain"}
 *   ID                        id-oc-trustedDomain }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const trustedDomain: OBJECT_CLASS = undefined;

/* eslint-enable */
