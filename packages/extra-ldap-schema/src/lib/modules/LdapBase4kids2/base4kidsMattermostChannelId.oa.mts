/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications } from "../InformationFramework/AttributeUsage.ta.mjs";
import { base4kidsMattermostTeamId } from "../LdapBase4kids2/base4kidsMattermostTeamId.oa.mjs";
import { id_at_base4kidsMattermostChannelId } from "../LdapBase4kids2/id-at-base4kidsMattermostChannelId.va.mjs";

/**
 * @summary base4kidsMattermostChannelId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * base4kidsMattermostChannelId ATTRIBUTE ::= {
 *   SUBTYPE OF                base4kidsMattermostTeamId
 *   LDAP-NAME                 {"base4kidsMattermostChannelId"}
 *   LDAP-DESC                 "Mattermost channel GUID"
 *   ID                        id-at-base4kidsMattermostChannelId }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const base4kidsMattermostChannelId: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {},
    encoderFor: {},
    "&derivation": base4kidsMattermostTeamId /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["base4kidsMattermostChannelId"],
    "&ldapDesc": "Mattermost channel GUID" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_base4kidsMattermostChannelId /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
