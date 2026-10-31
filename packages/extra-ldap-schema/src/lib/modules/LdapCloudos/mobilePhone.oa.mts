/* eslint-disable */
import { type NumericString } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications } from "../InformationFramework/AttributeUsage.ta.mjs";
import { id_at_mobilePhone } from "../LdapCloudos/id-at-mobilePhone.va.mjs";
import { numericString } from "../SelectedAttributeTypes/numericString.oa.mjs";

/**
 * @summary mobilePhone
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * mobilePhone ATTRIBUTE ::= {
 *   WITH SYNTAX               NumericString(SIZE (1..256))
 *   LDAP-SYNTAX               numericString.&id
 *   LDAP-NAME                 {"mobilePhone"}
 *   LDAP-DESC                 "Mobile phone number"
 *   ID                        id-at-mobilePhone }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<NumericString>}
 * @implements {ATTRIBUTE<NumericString>}
 */
export
const mobilePhone: ATTRIBUTE<NumericString> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeNumericString,
    },
    encoderFor: {
        "&Type": $._encodeNumericString,
    },
    "&ldapSyntax": numericString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["mobilePhone"],
    "&ldapDesc": "Mobile phone number" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_mobilePhone /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
