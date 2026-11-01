/* eslint-disable */
import {
    type BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { booleanMatch } from "../SelectedAttributeTypes/booleanMatch.oa.mjs";
import { boolean_ } from "../SelectedAttributeTypes/boolean.oa.mjs";
import { id_at_zimbraSmtpRestrictEnvelopeFrom } from "../LdapZimbra/id-at-zimbraSmtpRestrictEnvelopeFrom.va.mjs";

/**
 * @summary zimbraSmtpRestrictEnvelopeFrom
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraSmtpRestrictEnvelopeFrom ATTRIBUTE ::= {
 *   WITH SYNTAX               BOOLEAN
 *   EQUALITY MATCHING RULE    booleanMatch
 *   SINGLE VALUE              TRUE
 *   LDAP-SYNTAX               boolean.&id
 *   LDAP-NAME                 {"zimbraSmtpRestrictEnvelopeFrom"}
 *   LDAP-DESC                 "If TRUE, the address for MAIL FROM in the SMTP session will always be set to the email address of the account. If FALSE, the address will be the value of the Sender or From header in the outgoing message, in that order."
 *   ID                        id-at-zimbraSmtpRestrictEnvelopeFrom }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<BOOLEAN>}
 * @implements {ATTRIBUTE<BOOLEAN>}
 */
export
const zimbraSmtpRestrictEnvelopeFrom: ATTRIBUTE<BOOLEAN> = {
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
    "&ldapName": [ "zimbraSmtpRestrictEnvelopeFrom" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "If TRUE, the address for MAIL FROM in the SMTP session will always be set to the email address of the account. If FALSE, the address will be the value of the Sender or From header in the outgoing message, in that order." /* OBJECT_FIELD_SETTING */,
    "&id": id_at_zimbraSmtpRestrictEnvelopeFrom /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
