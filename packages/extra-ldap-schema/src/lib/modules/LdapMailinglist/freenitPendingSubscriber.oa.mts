/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_freenitPendingSubscriber } from "../LdapMailinglist/id-oc-freenitPendingSubscriber.va.mjs";
import { mail } from "../LdapSchema2ldifCore/mail.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { createdAt } from "./createdAt.oa.mjs";
import { mailinglistAction } from "./mailinglistAction.oa.mjs";
import { mailinglistToken } from "./mailinglistToken.oa.mjs";
import { mlidNumber } from "./mlidNumber.oa.mjs";

/**
 * @summary freenitPendingSubscriber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * freenitPendingSubscriber OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName
 *                               | mlidNumber
 *                               | mail
 *                               | mailinglistToken
 *                               | mailinglistAction
 *                               | createdAt }
 *   LDAP-NAME                 {"freenitPendingSubscriber"}
 *   LDAP-DESC                 "Freenit pending mailing list subscriber"
 *   ID                        id-oc-freenitPendingSubscriber }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const freenitPendingSubscriber: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [commonName, mlidNumber, mail, mailinglistToken, mailinglistAction, createdAt] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["freenitPendingSubscriber"],
    "&ldapDesc": "Freenit pending mailing list subscriber" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_freenitPendingSubscriber /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
