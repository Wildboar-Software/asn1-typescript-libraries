/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { base4kidsIsActive } from "../LdapBase4kids2/base4kidsIsActive.oa.mjs";
import { id_at_base4kidsSmtpSubmissionIsActive } from "../LdapBase4kids2/id-at-base4kidsSmtpSubmissionIsActive.va.mjs";

/**
 * @summary base4kidsSmtpSubmissionIsActive
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * base4kidsSmtpSubmissionIsActive ATTRIBUTE ::= {
 *   SUBTYPE OF                base4kidsIsActive
 *   LDAP-NAME                 {"base4kidsSmtpSubmissionIsActive"}
 *   LDAP-DESC                 "Determines whether SMTP submission is permitted"
 *   ID                        id-at-base4kidsSmtpSubmissionIsActive }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const base4kidsSmtpSubmissionIsActive: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&derivation": base4kidsIsActive /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "base4kidsSmtpSubmissionIsActive" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Determines whether SMTP submission is permitted" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_base4kidsSmtpSubmissionIsActive /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
