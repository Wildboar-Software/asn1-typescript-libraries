/* eslint-disable */
import {
    type IA5String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { caseExactIA5Match } from "../SelectedAttributeTypes/caseExactIA5Match.oa.mjs";
import { ia5String } from "../SelectedAttributeTypes/ia5String.oa.mjs";
import { id_at_saFlags } from "../LdapGosaCoreGoserver/id-at-saFlags.va.mjs";


/**
 * @summary saFlags
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * saFlags ATTRIBUTE ::= {
 *   WITH SYNTAX               IA5String
 *   EQUALITY MATCHING RULE    caseExactIA5Match
 *   LDAP-SYNTAX               ia5String.&id
 *   LDAP-NAME                 {"saFlags"}
 *   LDAP-DESC                 "Flags for spamassassin"
 *   ID                        id-at-saFlags }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<IA5String>}
 * @implements {ATTRIBUTE<IA5String>}
 */
export
const saFlags: ATTRIBUTE<IA5String> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeIA5String,
    },
    encoderFor: {
        "&Type": $._encodeIA5String,
    },
    "&equality-match": caseExactIA5Match /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": ia5String["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "saFlags" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Flags for spamassassin" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_saFlags /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

