/* eslint-disable */
import { type NumericString } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications } from "../InformationFramework/AttributeUsage.ta.mjs";
import { id_at_mobilePhoneCountryCode } from "../LdapCloudos/id-at-mobilePhoneCountryCode.va.mjs";
import { numericString } from "../SelectedAttributeTypes/numericString.oa.mjs";

/**
 * @summary mobilePhoneCountryCode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * mobilePhoneCountryCode ATTRIBUTE ::= {
 *   WITH SYNTAX               NumericString(SIZE (1..8))
 *   LDAP-SYNTAX               numericString.&id
 *   LDAP-NAME                 {"mobilePhoneCountryCode"}
 *   LDAP-DESC                 "Mobile phone country code"
 *   ID                        id-at-mobilePhoneCountryCode }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<NumericString>}
 * @implements {ATTRIBUTE<NumericString>}
 */
export
const mobilePhoneCountryCode: ATTRIBUTE<NumericString> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeNumericString,
    },
    encoderFor: {
        "&Type": $._encodeNumericString,
    },
    "&ldapSyntax": numericString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["mobilePhoneCountryCode"],
    "&ldapDesc": "Mobile phone country code" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_mobilePhoneCountryCode /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
