/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_freenitModerationMessage } from "../LdapMailinglist/id-oc-freenitModerationMessage.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { createdAt } from "./createdAt.oa.mjs";
import { decidedAt } from "./decidedAt.oa.mjs";
import { htmlBody } from "./htmlBody.oa.mjs";
import { mailinglistMessageId } from "./mailinglistMessageId.oa.mjs";
import { mailinglistSender } from "./mailinglistSender.oa.mjs";
import { mailinglistStatus } from "./mailinglistStatus.oa.mjs";
import { mailinglistSubject } from "./mailinglistSubject.oa.mjs";
import { mlidNumber } from "./mlidNumber.oa.mjs";
import { sentAt } from "./sentAt.oa.mjs";
import { textBody } from "./textBody.oa.mjs";

/**
 * @summary freenitModerationMessage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * freenitModerationMessage OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName
 *                               | mlidNumber
 *                               | createdAt }
 *   MAY CONTAIN               { mailinglistMessageId
 *                               | mailinglistSubject
 *                               | mailinglistSender
 *                               | sentAt
 *                               | textBody
 *                               | htmlBody
 *                               | mailinglistStatus
 *                               | decidedAt }
 *   LDAP-NAME                 {"freenitModerationMessage"}
 *   LDAP-DESC                 "Freenit moderation message entry"
 *   ID                        id-oc-freenitModerationMessage }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const freenitModerationMessage: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [commonName, mlidNumber, createdAt] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [mailinglistMessageId, mailinglistSubject, mailinglistSender, sentAt, textBody, htmlBody, mailinglistStatus, decidedAt] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["freenitModerationMessage"],
    "&ldapDesc": "Freenit moderation message entry" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_freenitModerationMessage /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
