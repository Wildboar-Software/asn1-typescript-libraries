/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications } from "../InformationFramework/AttributeUsage.ta.mjs";
import { base4kidsIsActive } from "../LdapBase4kids2/base4kidsIsActive.oa.mjs";
import { id_at_base4kidsSmtpReceiveIsActive } from "../LdapBase4kids2/id-at-base4kidsSmtpReceiveIsActive.va.mjs";

/**
 * @summary base4kidsSmtpReceiveIsActive
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * base4kidsSmtpReceiveIsActive ATTRIBUTE ::= {
 *   SUBTYPE OF                base4kidsIsActive
 *   LDAP-NAME                 {"base4kidsSmtpReceiveIsActive"}
 *   LDAP-DESC                 "Determines whether SMTP (mail) receiving is active"
 *   ID                        id-at-base4kidsSmtpReceiveIsActive }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const base4kidsSmtpReceiveIsActive: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {},
    encoderFor: {},
    "&derivation": base4kidsIsActive /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["base4kidsSmtpReceiveIsActive"],
    "&ldapDesc": "Determines whether SMTP (mail) receiving is active" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_base4kidsSmtpReceiveIsActive /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
