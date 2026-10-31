/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { id_oc_inetMailingListSubscription } from "../Ldapmigration56imsSchema/id-oc-inetMailingListSubscription.va.mjs";


/**
 * @summary inetMailingListSubscription
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * inetMailingListSubscription OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { mlsubListIdentifier
 *                               | mlsubRole }
 *   MAY CONTAIN               { mlsubMail
 *                               | mlsubDigest
 *                               | mlsubReceiveMail
 *                               | mlsubSuppressDuplicates
 *                               | mlsubJoinDate
 *                               | mlsubJoinIPAddress
 *                               | mlsubTentativeEmail
 *                               | mlsubTrack
 *                               | mlsubActionKey }
 *   LDAP-NAME                 {"inetMailingListSubscription"}
 *   LDAP-DESC                 "auxiliary class for mailing list subscriptions"
 *   ID                        id-oc-inetMailingListSubscription }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const inetMailingListSubscription: OBJECT_CLASS = undefined;

/* eslint-enable */
