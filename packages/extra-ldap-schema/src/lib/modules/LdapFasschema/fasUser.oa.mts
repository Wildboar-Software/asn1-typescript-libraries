/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_fasUser } from "../LdapFasschema/id-oc-fasUser.va.mjs";
import { countryName } from "../SelectedAttributeTypes/countryName.oa.mjs";
import { fasCreationTime } from "./fasCreationTime.oa.mjs";
import { fasGPGKeyId } from "./fasGPGKeyId.oa.mjs";
import { fasGitHubUsername } from "./fasGitHubUsername.oa.mjs";
import { fasGitLabUsername } from "./fasGitLabUsername.oa.mjs";
import { fasIRCNick } from "./fasIRCNick.oa.mjs";
import { fasIsPrivate } from "./fasIsPrivate.oa.mjs";
import { fasLocale } from "./fasLocale.oa.mjs";
import { fasPronoun } from "./fasPronoun.oa.mjs";
import { fasRHBZEmail } from "./fasRHBZEmail.oa.mjs";
import { fasRssUrl } from "./fasRssUrl.oa.mjs";
import { fasStatusNote } from "./fasStatusNote.oa.mjs";
import { fasTimezone } from "./fasTimezone.oa.mjs";
import { fasWebsiteUrl } from "./fasWebsiteUrl.oa.mjs";

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
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [fasTimezone, fasLocale, fasIRCNick, fasGPGKeyId, fasCreationTime, fasStatusNote, fasRHBZEmail, fasGitHubUsername, fasGitLabUsername, fasWebsiteUrl, fasIsPrivate, fasPronoun, fasRssUrl, countryName] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["fasUser"],
    "&ldapDesc": "FAS user objectclass" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_fasUser /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
