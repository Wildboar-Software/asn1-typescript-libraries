/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { integerMatch } from "../SelectedAttributeTypes/integerMatch.oa.mjs";
import { integer } from "../SelectedAttributeTypes/integer.oa.mjs";
import { id_at_zimbraMobilePolicyAllowSMIMEEncryptionAlgorithmNegotiation } from "../LdapZimbra/id-at-zimbraMobilePolicyAllowSMIMEEncryptionAlgorithmNegotiation.va.mjs";

/**
 * @summary zimbraMobilePolicyAllowSMIMEEncryptionAlgorithmNegotiation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraMobilePolicyAllowSMIMEEncryptionAlgorithmNegotiation ATTRIBUTE ::= {
 *   WITH SYNTAX               INTEGER
 *   EQUALITY MATCHING RULE    integerMatch
 *   SINGLE VALUE              TRUE
 *   LDAP-SYNTAX               integer.&id
 *   LDAP-NAME                 {"zimbraMobilePolicyAllowSMIMEEncryptionAlgorithmNegotiation"}
 *   LDAP-DESC                 "whether the messaging application on the device can negotiate the encryption algorithm if a recipient's certificate doesn't support the specified encryption algorithm; 0 - BlockNegotiation 1 - OnlyStrongAlgorithmNegotiation 2 - AllowAnyAlgorithmNegotiation ignored if zimbraFeatureMobilePolicyEnabled=FALSE or zimbraMobilePolicyAllowSMIMEEncryptionAlgorithmNegotiation value is set to -1"
 *   ID                        id-at-zimbraMobilePolicyAllowSMIMEEncryptionAlgorithmNegotiation }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<INTEGER>}
 * @implements {ATTRIBUTE<INTEGER>}
 */
export
const zimbraMobilePolicyAllowSMIMEEncryptionAlgorithmNegotiation: ATTRIBUTE<INTEGER> = {
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
    "&ldapName": [ "zimbraMobilePolicyAllowSMIMEEncryptionAlgorithmNegotiation" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "whether the messaging application on the device can negotiate the encryption algorithm if a recipient's certificate doesn't support the specified encryption algorithm; 0 - BlockNegotiation 1 - OnlyStrongAlgorithmNegotiation 2 - AllowAnyAlgorithmNegotiation ignored if zimbraFeatureMobilePolicyEnabled=FALSE or zimbraMobilePolicyAllowSMIMEEncryptionAlgorithmNegotiation value is set to -1" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_zimbraMobilePolicyAllowSMIMEEncryptionAlgorithmNegotiation /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
