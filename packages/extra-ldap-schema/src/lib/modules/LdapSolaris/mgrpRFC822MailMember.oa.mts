/* eslint-disable */
import {
    type IA5String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { caseIgnoreIA5Match } from "../SelectedAttributeTypes/caseIgnoreIA5Match.oa.mjs";
import { ia5String } from "../SelectedAttributeTypes/ia5String.oa.mjs";
import { id_at_mgrpRFC822MailMember } from "../LdapSolaris/id-at-mgrpRFC822MailMember.va.mjs";


/**
 * @summary mgrpRFC822MailMember
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * mgrpRFC822MailMember ATTRIBUTE ::= {
 *   WITH SYNTAX               IA5String
 *   EQUALITY MATCHING RULE    caseIgnoreIA5Match
 *   LDAP-SYNTAX               ia5String.&id
 *   LDAP-NAME                 {"mgrpRFC822MailMember"}
 *   LDAP-DESC                 "mgrpRFC822MailMember"
 *   ID                        id-at-mgrpRFC822MailMember }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<IA5String>}
 * @implements {ATTRIBUTE<IA5String>}
 */
export
const mgrpRFC822MailMember: ATTRIBUTE<IA5String> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeIA5String,
    },
    encoderFor: {
        "&Type": $._encodeIA5String,
    },
    "&equality-match": caseIgnoreIA5Match /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": ia5String["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "mgrpRFC822MailMember" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "mgrpRFC822MailMember" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_mgrpRFC822MailMember /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

