/* eslint-disable */
import {
    type NumericString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { numericString } from "../SelectedAttributeTypes/numericString.oa.mjs";
import { id_at_emailVerificationCodeCtime } from "../LdapCloudos/id-at-emailVerificationCodeCtime.va.mjs";

/**
 * @summary emailVerificationCodeCtime
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * emailVerificationCodeCtime ATTRIBUTE ::= {
 *   WITH SYNTAX               NumericString(SIZE (1..256))
 *   LDAP-SYNTAX               numericString.&id
 *   LDAP-NAME                 {"emailVerificationCodeCtime"}
 *   LDAP-DESC                 "When was the email token set"
 *   ID                        id-at-emailVerificationCodeCtime }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<NumericString>}
 * @implements {ATTRIBUTE<NumericString>}
 */
export
const emailVerificationCodeCtime: ATTRIBUTE<NumericString> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeNumericString,
    },
    encoderFor: {
        "&Type": $._encodeNumericString,
    },
    "&ldapSyntax": numericString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "emailVerificationCodeCtime" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "When was the email token set" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_emailVerificationCodeCtime /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
