/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { base4kidsIsActive } from "../LdapBase4kids2/base4kidsIsActive.oa.mjs";
import { id_at_base4kidsImapIsActive } from "../LdapBase4kids2/id-at-base4kidsImapIsActive.va.mjs";

/**
 * @summary base4kidsImapIsActive
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * base4kidsImapIsActive ATTRIBUTE ::= {
 *   SUBTYPE OF                base4kidsIsActive
 *   LDAP-NAME                 {"base4kidsImapIsActive"}
 *   LDAP-DESC                 "Determines whether IMAP access is active"
 *   ID                        id-at-base4kidsImapIsActive }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const base4kidsImapIsActive: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&derivation": base4kidsIsActive /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "base4kidsImapIsActive" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Determines whether IMAP access is active" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_base4kidsImapIsActive /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
