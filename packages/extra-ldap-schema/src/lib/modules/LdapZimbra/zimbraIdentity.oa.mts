/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { top } from "../InformationFramework/top.oa.mjs";
import { zimbraPrefIdentityName } from "../LdapZimbra/zimbraPrefIdentityName.oa.mjs";
import { id_oc_zimbraIdentity } from "../LdapZimbra/id-oc-zimbraIdentity.va.mjs";

import { zimbraCreateTimestamp } from "../LdapZimbra/zimbraCreateTimestamp.oa.mjs";
import { zimbraPrefBccAddress } from "../LdapZimbra/zimbraPrefBccAddress.oa.mjs";
import { zimbraPrefCalendarAcceptSignatureId } from "../LdapZimbra/zimbraPrefCalendarAcceptSignatureId.oa.mjs";
import { zimbraPrefCalendarAutoAcceptSignatureId } from "../LdapZimbra/zimbraPrefCalendarAutoAcceptSignatureId.oa.mjs";
import { zimbraPrefCalendarAutoDeclineSignatureId } from "../LdapZimbra/zimbraPrefCalendarAutoDeclineSignatureId.oa.mjs";
import { zimbraPrefCalendarAutoDenySignatureId } from "../LdapZimbra/zimbraPrefCalendarAutoDenySignatureId.oa.mjs";
import { zimbraPrefCalendarDeclineSignatureId } from "../LdapZimbra/zimbraPrefCalendarDeclineSignatureId.oa.mjs";
import { zimbraPrefCalendarTentativeSignatureId } from "../LdapZimbra/zimbraPrefCalendarTentativeSignatureId.oa.mjs";
import { zimbraPrefDefaultSignatureId } from "../LdapZimbra/zimbraPrefDefaultSignatureId.oa.mjs";
import { zimbraPrefForwardIncludeOriginalText } from "../LdapZimbra/zimbraPrefForwardIncludeOriginalText.oa.mjs";
import { zimbraPrefForwardReplyFormat } from "../LdapZimbra/zimbraPrefForwardReplyFormat.oa.mjs";
import { zimbraPrefForwardReplyPrefixChar } from "../LdapZimbra/zimbraPrefForwardReplyPrefixChar.oa.mjs";
import { zimbraPrefForwardReplySignatureId } from "../LdapZimbra/zimbraPrefForwardReplySignatureId.oa.mjs";
import { zimbraPrefFromAddress } from "../LdapZimbra/zimbraPrefFromAddress.oa.mjs";
import { zimbraPrefFromAddressType } from "../LdapZimbra/zimbraPrefFromAddressType.oa.mjs";
import { zimbraPrefFromDisplay } from "../LdapZimbra/zimbraPrefFromDisplay.oa.mjs";
import { zimbraPrefIdentityId } from "../LdapZimbra/zimbraPrefIdentityId.oa.mjs";
import { zimbraPrefMailSignature } from "../LdapZimbra/zimbraPrefMailSignature.oa.mjs";
import { zimbraPrefMailSignatureEnabled } from "../LdapZimbra/zimbraPrefMailSignatureEnabled.oa.mjs";
import { zimbraPrefMailSignatureStyle } from "../LdapZimbra/zimbraPrefMailSignatureStyle.oa.mjs";
import { zimbraPrefReadReceiptsToAddress } from "../LdapZimbra/zimbraPrefReadReceiptsToAddress.oa.mjs";
import { zimbraPrefReplyIncludeOriginalText } from "../LdapZimbra/zimbraPrefReplyIncludeOriginalText.oa.mjs";
import { zimbraPrefReplyToAddress } from "../LdapZimbra/zimbraPrefReplyToAddress.oa.mjs";
import { zimbraPrefReplyToDisplay } from "../LdapZimbra/zimbraPrefReplyToDisplay.oa.mjs";
import { zimbraPrefReplyToEnabled } from "../LdapZimbra/zimbraPrefReplyToEnabled.oa.mjs";
import { zimbraPrefSaveToSent } from "../LdapZimbra/zimbraPrefSaveToSent.oa.mjs";
import { zimbraPrefSentMailFolder } from "../LdapZimbra/zimbraPrefSentMailFolder.oa.mjs";
import { zimbraPrefUseDefaultIdentitySettings } from "../LdapZimbra/zimbraPrefUseDefaultIdentitySettings.oa.mjs";
import { zimbraPrefWhenInFolderIds } from "../LdapZimbra/zimbraPrefWhenInFolderIds.oa.mjs";
import { zimbraPrefWhenInFoldersEnabled } from "../LdapZimbra/zimbraPrefWhenInFoldersEnabled.oa.mjs";
import { zimbraPrefWhenSentToAddresses } from "../LdapZimbra/zimbraPrefWhenSentToAddresses.oa.mjs";
import { zimbraPrefWhenSentToEnabled } from "../LdapZimbra/zimbraPrefWhenSentToEnabled.oa.mjs";
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
const zimbraIdentity: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ zimbraPrefIdentityName, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ zimbraCreateTimestamp, zimbraPrefBccAddress, zimbraPrefCalendarAcceptSignatureId, zimbraPrefCalendarAutoAcceptSignatureId, zimbraPrefCalendarAutoDeclineSignatureId, zimbraPrefCalendarAutoDenySignatureId, zimbraPrefCalendarDeclineSignatureId, zimbraPrefCalendarTentativeSignatureId, zimbraPrefDefaultSignatureId, zimbraPrefForwardIncludeOriginalText, zimbraPrefForwardReplyFormat, zimbraPrefForwardReplyPrefixChar, zimbraPrefForwardReplySignatureId, zimbraPrefFromAddress, zimbraPrefFromAddressType, zimbraPrefFromDisplay, zimbraPrefIdentityId, zimbraPrefMailSignature, zimbraPrefMailSignatureEnabled, zimbraPrefMailSignatureStyle, zimbraPrefReadReceiptsToAddress, zimbraPrefReplyIncludeOriginalText, zimbraPrefReplyToAddress, zimbraPrefReplyToDisplay, zimbraPrefReplyToEnabled, zimbraPrefSaveToSent, zimbraPrefSentMailFolder, zimbraPrefUseDefaultIdentitySettings, zimbraPrefWhenInFolderIds, zimbraPrefWhenInFoldersEnabled, zimbraPrefWhenSentToAddresses, zimbraPrefWhenSentToEnabled, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "zimbraIdentity" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Account Email Identity information" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_zimbraIdentity /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
