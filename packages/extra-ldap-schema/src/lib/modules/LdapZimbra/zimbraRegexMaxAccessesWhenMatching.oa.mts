/* eslint-disable */
import { type INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications } from "../InformationFramework/AttributeUsage.ta.mjs";
import { id_at_zimbraRegexMaxAccessesWhenMatching } from "../LdapZimbra/id-at-zimbraRegexMaxAccessesWhenMatching.va.mjs";
import { integer } from "../SelectedAttributeTypes/integer.oa.mjs";
import { integerMatch } from "../SelectedAttributeTypes/integerMatch.oa.mjs";

/**
 * @summary zimbraRegexMaxAccessesWhenMatching
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraRegexMaxAccessesWhenMatching ATTRIBUTE ::= {
 *   WITH SYNTAX               INTEGER
 *   EQUALITY MATCHING RULE    integerMatch
 *   SINGLE VALUE              TRUE
 *   LDAP-SYNTAX               integer.&id
 *   LDAP-NAME                 {"zimbraRegexMaxAccessesWhenMatching"}
 *   LDAP-DESC                 "This attribute is used to limit the amount of computation allowed when matching regex expressions. For example as part of the IMAP LIST command. Set to a higher value if legitimate IMAP list commands fail throwing TooManyAccessesToMatchTargetException."
 *   ID                        id-at-zimbraRegexMaxAccessesWhenMatching }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<INTEGER>}
 * @implements {ATTRIBUTE<INTEGER>}
 */
export
const zimbraRegexMaxAccessesWhenMatching: ATTRIBUTE<INTEGER> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeInteger,
    },
    encoderFor: {
        "&Type": $._encodeInteger,
    },
    "&equality-match": integerMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": integer["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["zimbraRegexMaxAccessesWhenMatching"],
    "&ldapDesc": "This attribute is used to limit the amount of computation allowed when matching regex expressions. For example as part of the IMAP LIST command. Set to a higher value if legitimate IMAP list commands fail throwing TooManyAccessesToMatchTargetException." /* OBJECT_FIELD_SETTING */,
    "&id": id_at_zimbraRegexMaxAccessesWhenMatching /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
