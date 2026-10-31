/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { id_oc_inetMailUser } from "../Ldapmigration56imsSchema/id-oc-inetMailUser.va.mjs";


/**
 * @summary inetMailUser
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * inetMailUser OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { mailAutoReplyTimeout
 *                               | mailAutoReplySubject
 *                               | mailAutoReplyText
 *                               | mailAutoReplyTextInternal
 *                               | mailAutoReplyMode
 *                               | mailDeliveryOption
 *                               | mailForwardingAddress
 *                               | mailMessageStore
 *                               | mailProgramDeliveryInfo
 *                               | mailQuota
 *                               | mailMsgQuota
 *                               | mailSieveRuleSource
 *                               | mailSMTPSubmitChannel
 *                               | nswmExtendedUserPrefs
 *                               | mailAllowedServiceAccess
 *                               | mailUserStatus
 *                               | commonName
 *                               | dataSource
 *                               | mailEquivalentAddress
 *                               | mailMsgMaxBlocks
 *                               | mailConversionTag
 *                               | mailDeferProcessing
 *                               | mailAntiUBEService
 *                               | mailFolderDefaultAcl
 *                               | aclGroupAddr
 *                               | mailParentalControl
 *                               | mailSieveRuleRef
 *                               | mailEventNotificationDestination }
 *   LDAP-NAME                 {"inetMailUser"}
 *   LDAP-DESC                 "auxiliary class for a messaging server user"
 *   ID                        id-oc-inetMailUser }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const inetMailUser: OBJECT_CLASS = undefined;

/* eslint-enable */
