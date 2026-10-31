/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications } from "../InformationFramework/AttributeUsage.ta.mjs";
import { base4kidsNextcloudShareId } from "../LdapBase4kids2/base4kidsNextcloudShareId.oa.mjs";
import { id_at_base4kidsNextcloudClassShareId } from "../LdapBase4kids2/id-at-base4kidsNextcloudClassShareId.va.mjs";

/**
 * @summary base4kidsNextcloudClassShareId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * base4kidsNextcloudClassShareId ATTRIBUTE ::= {
 *   SUBTYPE OF                base4kidsNextcloudShareId
 *   LDAP-NAME                 {"base4kidsNextcloudClassShareId"}
 *   LDAP-DESC                 "Nextcloud school class folder share ID"
 *   ID                        id-at-base4kidsNextcloudClassShareId }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const base4kidsNextcloudClassShareId: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {},
    encoderFor: {},
    "&derivation": base4kidsNextcloudShareId /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["base4kidsNextcloudClassShareId"],
    "&ldapDesc": "Nextcloud school class folder share ID" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_base4kidsNextcloudClassShareId /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
