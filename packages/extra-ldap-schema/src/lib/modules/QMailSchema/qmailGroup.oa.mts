/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { mail } from "../Cosine/mail.oa.mjs";
import { mailAlternateAddress } from "../QMailSchema/mailAlternateAddress.oa.mjs";
import { mailMessageStore } from "../QMailSchema/mailMessageStore.oa.mjs";
import { dnmember } from "../QMailSchema/dnmember.oa.mjs";
import { rfc822member } from "../QMailSchema/rfc822member.oa.mjs";
import { filtermember } from "../QMailSchema/filtermember.oa.mjs";
import { senderconfirm } from "../QMailSchema/senderconfirm.oa.mjs";
import { membersonly } from "../QMailSchema/membersonly.oa.mjs";
import { confirmtext } from "../QMailSchema/confirmtext.oa.mjs";
import { dnmoderator } from "../QMailSchema/dnmoderator.oa.mjs";
import { rfc822moderator } from "../QMailSchema/rfc822moderator.oa.mjs";
import { moderatortext } from "../QMailSchema/moderatortext.oa.mjs";
import { dnsender } from "../QMailSchema/dnsender.oa.mjs";
import { rfc822sender } from "../QMailSchema/rfc822sender.oa.mjs";
import { filtersender } from "../QMailSchema/filtersender.oa.mjs";
import { top } from "../InformationFramework/top.oa.mjs";


/**
 * @summary qmailGroup
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * qmailGroup OBJECT-CLASS ::= {
 *     SUBCLASS OF     {top}
 *     KIND            auxiliary
 *     MUST CONTAIN    {
 *         mail
 *         | mailAlternateAddress
 *         | mailMessageStore
 *     }
 *     MAY CONTAIN     {
 *         dnmember
 *         | rfc822member
 *         | filtermember
 *         | senderconfirm
 *         | membersonly
 *         | confirmtext
 *         | dnmoderator
 *         | rfc822moderator
 *         | moderatortext
 *         | dnsender
 *         | rfc822sender
 *         | filtersender
 *     }
 *     LDAP-NAME       {"qmailGroup"}
 *     LDAP-DESC       "QMail-LDAP Group"
 *     ID              { 1 3 6 1 4 1 7914 1 3 2 1 }
 * }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const qmailGroup: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ mail, mailAlternateAddress, mailMessageStore, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ dnmember, rfc822member, filtermember, senderconfirm, membersonly, confirmtext, dnmoderator, rfc822moderator, moderatortext, dnsender, rfc822sender, filtersender, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "qmailGroup" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "QMail-LDAP Group" /* OBJECT_FIELD_SETTING */,
    "&id": _OID.fromParts([1, 3, 6, 1, 4, 1, 7914, 1, 3, 2, 1,]) /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
