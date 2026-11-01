/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { integerMatch } from "../SelectedAttributeTypes/integerMatch.oa.mjs";
import { integer } from "../SelectedAttributeTypes/integer.oa.mjs";
import { id_at_zimbraMobilePolicyAllowConsumerEmail } from "../LdapZimbra/id-at-zimbraMobilePolicyAllowConsumerEmail.va.mjs";


/**
 * @summary zimbraMobilePolicyAllowConsumerEmail
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraMobilePolicyAllowConsumerEmail ATTRIBUTE ::= {
 *   WITH SYNTAX               INTEGER
 *   EQUALITY MATCHING RULE    integerMatch
 *   SINGLE VALUE              TRUE
 *   LDAP-SYNTAX               integer.&id
 *   LDAP-NAME                 {"zimbraMobilePolicyAllowConsumerEmail"}
 *   LDAP-DESC                 "whether the device user can configure a personal e-mail account on the mobile phone. This parameter doesn't control access to e-mails using third-party mobile phone e-mail programs. ignored if zimbraFeatureMobilePolicyEnabled=FALSE or zimbraMobilePolicyAllowConsumerEmail value is set to -1"
 *   ID                        id-at-zimbraMobilePolicyAllowConsumerEmail }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<INTEGER>}
 * @implements {ATTRIBUTE<INTEGER>}
 */
export
const zimbraMobilePolicyAllowConsumerEmail: ATTRIBUTE<INTEGER> = {
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
    "&ldapName": [ "zimbraMobilePolicyAllowConsumerEmail" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "whether the device user can configure a personal e-mail account on the mobile phone. This parameter doesn't control access to e-mails using third-party mobile phone e-mail programs. ignored if zimbraFeatureMobilePolicyEnabled=FALSE or zimbraMobilePolicyAllowConsumerEmail value is set to -1" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_zimbraMobilePolicyAllowConsumerEmail /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

