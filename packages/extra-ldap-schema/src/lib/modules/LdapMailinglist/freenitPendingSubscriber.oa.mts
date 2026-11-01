/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_freenitPendingSubscriber } from "../LdapMailinglist/id-oc-freenitPendingSubscriber.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { mlidNumber } from "../LdapMailinglist/mlidNumber.oa.mjs";
import { mail } from "../LdapSchema2ldifCore/mail.oa.mjs";
import { mailinglistToken } from "../LdapMailinglist/mailinglistToken.oa.mjs";
import { mailinglistAction } from "../LdapMailinglist/mailinglistAction.oa.mjs";
import { createdAt } from "../LdapMailinglist/createdAt.oa.mjs";
// export { id_oc_freenitPendingSubscriber } from "../LdapMailinglist/id-oc-freenitPendingSubscriber.va.mjs";


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
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ commonName, mlidNumber, mail, mailinglistToken, mailinglistAction, createdAt, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "freenitPendingSubscriber" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Freenit pending mailing list subscriber" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_freenitPendingSubscriber /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
