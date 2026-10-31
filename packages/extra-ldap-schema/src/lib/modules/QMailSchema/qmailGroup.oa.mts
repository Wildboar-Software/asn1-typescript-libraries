/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { mail } from "../LdapSchema2ldifCore/mail.oa.mjs";
import { confirmtext } from "./confirmtext.oa.mjs";
import { dnmember } from "./dnmember.oa.mjs";
import { dnmoderator } from "./dnmoderator.oa.mjs";
import { dnsender } from "./dnsender.oa.mjs";
import { filtermember } from "./filtermember.oa.mjs";
import { filtersender } from "./filtersender.oa.mjs";
import { mailAlternateAddress } from "./mailAlternateAddress.oa.mjs";
import { mailMessageStore } from "./mailMessageStore.oa.mjs";
import { membersonly } from "./membersonly.oa.mjs";
import { moderatortext } from "./moderatortext.oa.mjs";
import { rfc822member } from "./rfc822member.oa.mjs";
import { rfc822moderator } from "./rfc822moderator.oa.mjs";
import { rfc822sender } from "./rfc822sender.oa.mjs";
import { senderconfirm } from "./senderconfirm.oa.mjs";

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
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [mail, mailAlternateAddress, mailMessageStore] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [dnmember, rfc822member, filtermember, senderconfirm, membersonly, confirmtext, dnmoderator, rfc822moderator, moderatortext, dnsender, rfc822sender, filtersender] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["qmailGroup"],
    "&ldapDesc": "QMail-LDAP Group" /* OBJECT_FIELD_SETTING */,
    "&id": _OID.fromParts([
        1,
        3,
        6,
        1,
        4,
        1,
        7914,
        1,
        3,
        2,
        1,
    ]) /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
