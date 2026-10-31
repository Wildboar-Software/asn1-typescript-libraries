/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { zimbraPrefIdentityName } from "../LdapZimbra/zimbraPrefIdentityName.oa.mjs";
// export { id_oc_zimbraIdentity } from "../LdapZimbra/id-oc-zimbraIdentity.va.mjs";


/**
 * @summary zimbraIdentity
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraIdentity OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { zimbraPrefIdentityName }
 *   MAY CONTAIN               { zimbraCreateTimestamp
 *                               | zimbraPrefBccAddress
 *                               | zimbraPrefCalendarAcceptSignatureId
 *                               | zimbraPrefCalendarAutoAcceptSignatureId
 *                               | zimbraPrefCalendarAutoDeclineSignatureId
 *                               | zimbraPrefCalendarAutoDenySignatureId
 *                               | zimbraPrefCalendarDeclineSignatureId
 *                               | zimbraPrefCalendarTentativeSignatureId
 *                               | zimbraPrefDefaultSignatureId
 *                               | zimbraPrefForwardIncludeOriginalText
 *                               | zimbraPrefForwardReplyFormat
 *                               | zimbraPrefForwardReplyPrefixChar
 *                               | zimbraPrefForwardReplySignatureId
 *                               | zimbraPrefFromAddress
 *                               | zimbraPrefFromAddressType
 *                               | zimbraPrefFromDisplay
 *                               | zimbraPrefIdentityId
 *                               | zimbraPrefMailSignature
 *                               | zimbraPrefMailSignatureEnabled
 *                               | zimbraPrefMailSignatureStyle
 *                               | zimbraPrefReadReceiptsToAddress
 *                               | zimbraPrefReplyIncludeOriginalText
 *                               | zimbraPrefReplyToAddress
 *                               | zimbraPrefReplyToDisplay
 *                               | zimbraPrefReplyToEnabled
 *                               | zimbraPrefSaveToSent
 *                               | zimbraPrefSentMailFolder
 *                               | zimbraPrefUseDefaultIdentitySettings
 *                               | zimbraPrefWhenInFolderIds
 *                               | zimbraPrefWhenInFoldersEnabled
 *                               | zimbraPrefWhenSentToAddresses
 *                               | zimbraPrefWhenSentToEnabled }
 *   LDAP-NAME                 {"zimbraIdentity"}
 *   LDAP-DESC                 "Account Email Identity information"
 *   ID                        id-oc-zimbraIdentity }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const zimbraIdentity: OBJECT_CLASS = undefined;

/* eslint-enable */
