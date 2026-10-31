/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_zimbraIdentity } from "../LdapZimbra/id-oc-zimbraIdentity.va.mjs";
import { zimbraPrefIdentityName } from "../LdapZimbra/zimbraPrefIdentityName.oa.mjs";
import { zimbraCreateTimestamp } from "./zimbraCreateTimestamp.oa.mjs";
import { zimbraPrefBccAddress } from "./zimbraPrefBccAddress.oa.mjs";
import { zimbraPrefCalendarAcceptSignatureId } from "./zimbraPrefCalendarAcceptSignatureId.oa.mjs";
import { zimbraPrefCalendarAutoAcceptSignatureId } from "./zimbraPrefCalendarAutoAcceptSignatureId.oa.mjs";
import { zimbraPrefCalendarAutoDeclineSignatureId } from "./zimbraPrefCalendarAutoDeclineSignatureId.oa.mjs";
import { zimbraPrefCalendarAutoDenySignatureId } from "./zimbraPrefCalendarAutoDenySignatureId.oa.mjs";
import { zimbraPrefCalendarDeclineSignatureId } from "./zimbraPrefCalendarDeclineSignatureId.oa.mjs";
import { zimbraPrefCalendarTentativeSignatureId } from "./zimbraPrefCalendarTentativeSignatureId.oa.mjs";
import { zimbraPrefDefaultSignatureId } from "./zimbraPrefDefaultSignatureId.oa.mjs";
import { zimbraPrefForwardIncludeOriginalText } from "./zimbraPrefForwardIncludeOriginalText.oa.mjs";
import { zimbraPrefForwardReplyFormat } from "./zimbraPrefForwardReplyFormat.oa.mjs";
import { zimbraPrefForwardReplyPrefixChar } from "./zimbraPrefForwardReplyPrefixChar.oa.mjs";
import { zimbraPrefForwardReplySignatureId } from "./zimbraPrefForwardReplySignatureId.oa.mjs";
import { zimbraPrefFromAddress } from "./zimbraPrefFromAddress.oa.mjs";
import { zimbraPrefFromAddressType } from "./zimbraPrefFromAddressType.oa.mjs";
import { zimbraPrefFromDisplay } from "./zimbraPrefFromDisplay.oa.mjs";
import { zimbraPrefIdentityId } from "./zimbraPrefIdentityId.oa.mjs";
import { zimbraPrefMailSignature } from "./zimbraPrefMailSignature.oa.mjs";
import { zimbraPrefMailSignatureEnabled } from "./zimbraPrefMailSignatureEnabled.oa.mjs";
import { zimbraPrefMailSignatureStyle } from "./zimbraPrefMailSignatureStyle.oa.mjs";
import { zimbraPrefReadReceiptsToAddress } from "./zimbraPrefReadReceiptsToAddress.oa.mjs";
import { zimbraPrefReplyIncludeOriginalText } from "./zimbraPrefReplyIncludeOriginalText.oa.mjs";
import { zimbraPrefReplyToAddress } from "./zimbraPrefReplyToAddress.oa.mjs";
import { zimbraPrefReplyToDisplay } from "./zimbraPrefReplyToDisplay.oa.mjs";
import { zimbraPrefReplyToEnabled } from "./zimbraPrefReplyToEnabled.oa.mjs";
import { zimbraPrefSaveToSent } from "./zimbraPrefSaveToSent.oa.mjs";
import { zimbraPrefSentMailFolder } from "./zimbraPrefSentMailFolder.oa.mjs";
import { zimbraPrefUseDefaultIdentitySettings } from "./zimbraPrefUseDefaultIdentitySettings.oa.mjs";
import { zimbraPrefWhenInFolderIds } from "./zimbraPrefWhenInFolderIds.oa.mjs";
import { zimbraPrefWhenInFoldersEnabled } from "./zimbraPrefWhenInFoldersEnabled.oa.mjs";
import { zimbraPrefWhenSentToAddresses } from "./zimbraPrefWhenSentToAddresses.oa.mjs";
import { zimbraPrefWhenSentToEnabled } from "./zimbraPrefWhenSentToEnabled.oa.mjs";

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
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [zimbraPrefIdentityName] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [zimbraCreateTimestamp, zimbraPrefBccAddress, zimbraPrefCalendarAcceptSignatureId, zimbraPrefCalendarAutoAcceptSignatureId, zimbraPrefCalendarAutoDeclineSignatureId, zimbraPrefCalendarAutoDenySignatureId, zimbraPrefCalendarDeclineSignatureId, zimbraPrefCalendarTentativeSignatureId, zimbraPrefDefaultSignatureId, zimbraPrefForwardIncludeOriginalText, zimbraPrefForwardReplyFormat, zimbraPrefForwardReplyPrefixChar, zimbraPrefForwardReplySignatureId, zimbraPrefFromAddress, zimbraPrefFromAddressType, zimbraPrefFromDisplay, zimbraPrefIdentityId, zimbraPrefMailSignature, zimbraPrefMailSignatureEnabled, zimbraPrefMailSignatureStyle, zimbraPrefReadReceiptsToAddress, zimbraPrefReplyIncludeOriginalText, zimbraPrefReplyToAddress, zimbraPrefReplyToDisplay, zimbraPrefReplyToEnabled, zimbraPrefSaveToSent, zimbraPrefSentMailFolder, zimbraPrefUseDefaultIdentitySettings, zimbraPrefWhenInFolderIds, zimbraPrefWhenInFoldersEnabled, zimbraPrefWhenSentToAddresses, zimbraPrefWhenSentToEnabled] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["zimbraIdentity"],
    "&ldapDesc": "Account Email Identity information" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_zimbraIdentity /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
