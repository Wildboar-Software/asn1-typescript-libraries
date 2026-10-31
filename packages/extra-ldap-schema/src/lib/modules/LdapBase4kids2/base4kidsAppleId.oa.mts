/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications } from "../InformationFramework/AttributeUsage.ta.mjs";
import { id_at_base4kidsAppleId } from "../LdapBase4kids2/id-at-base4kidsAppleId.va.mjs";
import { mail } from "../LdapSchema2ldifCore/mail.oa.mjs";

/**
 * @summary base4kidsAppleId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * base4kidsAppleId ATTRIBUTE ::= {
 *   SUBTYPE OF                mail
 *   LDAP-NAME                 {"base4kidsAppleId"}
 *   LDAP-DESC                 "Apple ID (email address)"
 *   ID                        id-at-base4kidsAppleId }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const base4kidsAppleId: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {},
    encoderFor: {},
    "&derivation": mail /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["base4kidsAppleId"],
    "&ldapDesc": "Apple ID (email address)" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_base4kidsAppleId /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
