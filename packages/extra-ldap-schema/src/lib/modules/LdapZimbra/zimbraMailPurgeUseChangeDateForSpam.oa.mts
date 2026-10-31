/* eslint-disable */
import { type BOOLEAN } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications } from "../InformationFramework/AttributeUsage.ta.mjs";
import { id_at_zimbraMailPurgeUseChangeDateForSpam } from "../LdapZimbra/id-at-zimbraMailPurgeUseChangeDateForSpam.va.mjs";
import { boolean_ } from "../SelectedAttributeTypes/boolean.oa.mjs";
import { booleanMatch } from "../SelectedAttributeTypes/booleanMatch.oa.mjs";

/**
 * @summary zimbraMailPurgeUseChangeDateForSpam
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraMailPurgeUseChangeDateForSpam ATTRIBUTE ::= {
 *   WITH SYNTAX               BOOLEAN
 *   EQUALITY MATCHING RULE    booleanMatch
 *   SINGLE VALUE              TRUE
 *   LDAP-SYNTAX               boolean.&id
 *   LDAP-NAME                 {"zimbraMailPurgeUseChangeDateForSpam"}
 *   LDAP-DESC                 "If TRUE, a message is purged from Spam based on the date that it was moved to the Spam folder. If FALSE, a message is purged from Spam based on the date that it was added to the mailbox."
 *   ID                        id-at-zimbraMailPurgeUseChangeDateForSpam }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<BOOLEAN>}
 * @implements {ATTRIBUTE<BOOLEAN>}
 */
export
const zimbraMailPurgeUseChangeDateForSpam: ATTRIBUTE<BOOLEAN> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeBoolean,
    },
    encoderFor: {
        "&Type": $._encodeBoolean,
    },
    "&equality-match": booleanMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": boolean_["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["zimbraMailPurgeUseChangeDateForSpam"],
    "&ldapDesc": "If TRUE, a message is purged from Spam based on the date that it was moved to the Spam folder. If FALSE, a message is purged from Spam based on the date that it was added to the mailbox." /* OBJECT_FIELD_SETTING */,
    "&id": id_at_zimbraMailPurgeUseChangeDateForSpam /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
