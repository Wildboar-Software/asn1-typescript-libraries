/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_fasUser } from "../LdapFasschema/id-oc-fasUser.va.mjs";
import { fasTimezone } from "../LdapFasschema/fasTimezone.oa.mjs";
import { fasLocale } from "../LdapFasschema/fasLocale.oa.mjs";
import { fasIRCNick } from "../LdapFasschema/fasIRCNick.oa.mjs";
import { fasGPGKeyId } from "../LdapFasschema/fasGPGKeyId.oa.mjs";
import { fasCreationTime } from "../LdapFasschema/fasCreationTime.oa.mjs";
import { fasStatusNote } from "../LdapFasschema/fasStatusNote.oa.mjs";
import { fasRHBZEmail } from "../LdapFasschema/fasRHBZEmail.oa.mjs";
import { fasGitHubUsername } from "../LdapFasschema/fasGitHubUsername.oa.mjs";
import { fasGitLabUsername } from "../LdapFasschema/fasGitLabUsername.oa.mjs";
import { fasWebsiteUrl } from "../LdapFasschema/fasWebsiteUrl.oa.mjs";
import { fasIsPrivate } from "../LdapFasschema/fasIsPrivate.oa.mjs";
import { fasPronoun } from "../LdapFasschema/fasPronoun.oa.mjs";
import { fasRssUrl } from "../LdapFasschema/fasRssUrl.oa.mjs";
import { countryName } from "../SelectedAttributeTypes/countryName.oa.mjs";


/**
 * @summary fasUser
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * fasUser OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { fasTimezone
 *                               | fasLocale
 *                               | fasIRCNick
 *                               | fasGPGKeyId
 *                               | fasCreationTime
 *                               | fasStatusNote
 *                               | fasRHBZEmail
 *                               | fasGitHubUsername
 *                               | fasGitLabUsername
 *                               | fasWebsiteUrl
 *                               | fasIsPrivate
 *                               | fasPronoun
 *                               | fasRssUrl
 *                               | countryName }
 *   LDAP-NAME                 {"fasUser"}
 *   LDAP-DESC                 "FAS user objectclass"
 *   ID                        id-oc-fasUser }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const fasUser: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ fasTimezone, fasLocale, fasIRCNick, fasGPGKeyId, fasCreationTime, fasStatusNote, fasRHBZEmail, fasGitHubUsername, fasGitLabUsername, fasWebsiteUrl, fasIsPrivate, fasPronoun, fasRssUrl, countryName, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "fasUser" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "FAS user objectclass" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_fasUser /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

