/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_sunIMStoredMessage } from "../Ldapmigration65im/id-oc-sunIMStoredMessage.va.mjs";
import { sunIMMessageID } from "../Ldapmigration65im/sunIMMessageID.oa.mjs";
import { sunIMMessageContent } from "../Ldapmigration65im/sunIMMessageContent.oa.mjs";


/**
 * @summary sunIMStoredMessage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * sunIMStoredMessage OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { sunIMMessageID
 *                               | sunIMMessageContent }
 *   LDAP-NAME                 {"sunIMStoredMessage"}
 *   LDAP-DESC                 "Stored Message Object"
 *   ID                        id-oc-sunIMStoredMessage }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const sunIMStoredMessage: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ sunIMMessageID, sunIMMessageContent, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "sunIMStoredMessage" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Stored Message Object" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_sunIMStoredMessage /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

