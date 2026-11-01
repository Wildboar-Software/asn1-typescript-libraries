/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { uid } from "../SelectedAttributeTypes/uid.oa.mjs";
import { mailMessageStore } from "../QMailSchema/mailMessageStore.oa.mjs";
import { homeDirectory } from "../NIS/homeDirectory.oa.mjs";
import { userPassword } from "../AuthenticationFramework/userPassword.oa.mjs";
import { mailAlternateAddress } from "../QMailSchema/mailAlternateAddress.oa.mjs";
import { qmailUID } from "../QMailSchema/qmailUID.oa.mjs";
import { qmailGID } from "../QMailSchema/qmailGID.oa.mjs";
import { mailHost } from "../QMailSchema/mailHost.oa.mjs";
import { mailForwardingAddress } from "../QMailSchema/mailForwardingAddress.oa.mjs";
import { deliveryProgramPath } from "../QMailSchema/deliveryProgramPath.oa.mjs";
import { qmailDotMode } from "../QMailSchema/qmailDotMode.oa.mjs";
import { deliveryMode } from "../QMailSchema/deliveryMode.oa.mjs";
import { mailReplyText } from "../QMailSchema/mailReplyText.oa.mjs";
import { accountStatus } from "../QMailSchema/accountStatus.oa.mjs";
import { qmailAccountPurge } from "../QMailSchema/qmailAccountPurge.oa.mjs";
import { mailQuotaSize } from "../QMailSchema/mailQuotaSize.oa.mjs";
import { mailQuotaCount } from "../QMailSchema/mailQuotaCount.oa.mjs";
import { mailSizeMax } from "../QMailSchema/mailSizeMax.oa.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { mail } from "../Cosine/mail.oa.mjs";


/**
 * @summary qmailUser
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * qmailUser OBJECT-CLASS ::= {
 *     SUBCLASS OF     {top}
 *     KIND            auxiliary
 *     MUST CONTAIN    {mail}
 *     MAY CONTAIN     {
 *         uid
 *         | mailMessageStore
 *         | homeDirectory
 *         | userPassword
 *         | mailAlternateAddress
 *         | qmailUID
 *         | qmailGID
 *         | mailHost
 *         | mailForwardingAddress
 *         | deliveryProgramPath
 *         | qmailDotMode
 *         | deliveryMode
 *         | mailReplyText
 *         | accountStatus
 *         | qmailAccountPurge
 *         | mailQuotaSize
 *         | mailQuotaCount
 *         | mailSizeMax
 *     }
 *     LDAP-NAME       {"qmailUser"}
 *     LDAP-DESC       "QMail-LDAP User"
 *     ID              { 1 3 6 1 4 1 7914 1 2 2 1 }
 * }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const qmailUser: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ mail, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ uid, mailMessageStore, homeDirectory, userPassword, mailAlternateAddress, qmailUID, qmailGID, mailHost, mailForwardingAddress, deliveryProgramPath, qmailDotMode, deliveryMode, mailReplyText, accountStatus, qmailAccountPurge, mailQuotaSize, mailQuotaCount, mailSizeMax, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "qmailUser" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "QMail-LDAP User" /* OBJECT_FIELD_SETTING */,
    "&id": _OID.fromParts([1, 3, 6, 1, 4, 1, 7914, 1, 2, 2, 1,]) /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
