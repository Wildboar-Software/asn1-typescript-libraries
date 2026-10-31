/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { id_oc_freenitMailingList } from "../LdapMailinglist/id-oc-freenitMailingList.va.mjs";


/**
 * @summary freenitMailingList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * freenitMailingList OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName
 *                               | mlidNumber
 *                               | mailinglistAddress
 *                               | mailinglistDistributionAddress
 *                               | mailinglistArchiveAddress }
 *   MAY CONTAIN               { description
 *                               | mailinglistPublic
 *                               | mailinglistArchiveEnabled
 *                               | mailinglistModerationEnabled
 *                               | principalId
 *                               | inboxPrincipalId
 *                               | archivePrincipalId
 *                               | createdAt
 *                               | updatedAt }
 *   LDAP-NAME                 {"freenitMailingList"}
 *   LDAP-DESC                 "Freenit mailing list entry"
 *   ID                        id-oc-freenitMailingList }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const freenitMailingList: OBJECT_CLASS = undefined;

/* eslint-enable */
