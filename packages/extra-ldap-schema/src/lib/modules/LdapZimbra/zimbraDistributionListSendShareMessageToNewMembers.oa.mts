/* eslint-disable */
import {
    type BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { booleanMatch } from "../SelectedAttributeTypes/booleanMatch.oa.mjs";
import { boolean_ } from "../SelectedAttributeTypes/boolean.oa.mjs";
import { id_at_zimbraDistributionListSendShareMessageToNewMembers } from "../LdapZimbra/id-at-zimbraDistributionListSendShareMessageToNewMembers.va.mjs";


/**
 * @summary zimbraDistributionListSendShareMessageToNewMembers
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraDistributionListSendShareMessageToNewMembers ATTRIBUTE ::= {
 *   WITH SYNTAX               BOOLEAN
 *   EQUALITY MATCHING RULE    booleanMatch
 *   SINGLE VALUE              TRUE
 *   LDAP-SYNTAX               boolean.&id
 *   LDAP-NAME                 {"zimbraDistributionListSendShareMessageToNewMembers"}
 *   LDAP-DESC                 "Whether to send an email with all the shares of the group when a new member is added to the group. If not set, default is to send the email."
 *   ID                        id-at-zimbraDistributionListSendShareMessageToNewMembers }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<BOOLEAN>}
 * @implements {ATTRIBUTE<BOOLEAN>}
 */
export
const zimbraDistributionListSendShareMessageToNewMembers: ATTRIBUTE<BOOLEAN> = {
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
    "&ldapName": [ "zimbraDistributionListSendShareMessageToNewMembers" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Whether to send an email with all the shares of the group when a new member is added to the group. If not set, default is to send the email." /* OBJECT_FIELD_SETTING */,
    "&id": id_at_zimbraDistributionListSendShareMessageToNewMembers /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

