/* eslint-disable */
import { userPassword } from "../AuthenticationFramework/userPassword.oa.mjs";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_apple_preset_user } from "../LdapSchema2ldifApple/id-oc-apple-preset-user.va.mjs";
import { gidNumber } from "../NIS/gidNumber.oa.mjs";
import { homeDirectory } from "../NIS/homeDirectory.oa.mjs";
import { loginShell } from "../NIS/loginShell.oa.mjs";
import { memberUid } from "../NIS/memberUid.oa.mjs";
import { shadowExpire } from "../NIS/shadowExpire.oa.mjs";
import { shadowLastChange } from "../NIS/shadowLastChange.oa.mjs";
import { homeDrive } from "../SambaSchema/homeDrive.oa.mjs";
import { profilePath } from "../SambaSchema/profilePath.oa.mjs";
import { scriptPath } from "../SambaSchema/scriptPath.oa.mjs";
import { smbHome } from "../SambaSchema/smbHome.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { uid } from "../SelectedAttributeTypes/uid.oa.mjs";
import { apple_keyword } from "./apple-keyword.oa.mjs";
import { apple_mcxflags } from "./apple-mcxflags.oa.mjs";
import { apple_mcxsettings } from "./apple-mcxsettings.oa.mjs";
import { apple_preset_user_is_admin } from "./apple-preset-user-is-admin.oa.mjs";
import { apple_user_adminlimits } from "./apple-user-adminlimits.oa.mjs";
import { apple_user_homequota } from "./apple-user-homequota.oa.mjs";
import { apple_user_homesoftquota } from "./apple-user-homesoftquota.oa.mjs";
import { apple_user_homeurl } from "./apple-user-homeurl.oa.mjs";
import { apple_user_mailattribute } from "./apple-user-mailattribute.oa.mjs";
import { apple_user_passwordpolicy } from "./apple-user-passwordpolicy.oa.mjs";
import { apple_user_picture } from "./apple-user-picture.oa.mjs";
import { apple_user_printattribute } from "./apple-user-printattribute.oa.mjs";
import { authAuthority } from "./authAuthority.oa.mjs";

/**
 * @summary apple_preset_user
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * apple-preset-user OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName }
 *   MAY CONTAIN               { uid
 *                               | memberUid
 *                               | gidNumber
 *                               | homeDirectory
 *                               | apple-user-homeurl
 *                               | apple-user-homequota
 *                               | apple-user-homesoftquota
 *                               | apple-user-mailattribute
 *                               | apple-user-printattribute
 *                               | apple-mcxflags
 *                               | apple-mcxsettings
 *                               | apple-user-adminlimits
 *                               | apple-user-passwordpolicy
 *                               | userPassword
 *                               | apple-user-picture
 *                               | apple-keyword
 *                               | loginShell
 *                               | description
 *                               | shadowLastChange
 *                               | shadowExpire
 *                               | authAuthority
 *                               | homeDrive
 *                               | scriptPath
 *                               | profilePath
 *                               | smbHome
 *                               | apple-preset-user-is-admin }
 *   LDAP-NAME                 {"apple-preset-user"}
 *   LDAP-DESC                 "preset user"
 *   ID                        id-oc-apple-preset-user }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const apple_preset_user: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [commonName] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [uid, memberUid, gidNumber, homeDirectory, apple_user_homeurl, apple_user_homequota, apple_user_homesoftquota, apple_user_mailattribute, apple_user_printattribute, apple_mcxflags, apple_mcxsettings, apple_user_adminlimits, apple_user_passwordpolicy, userPassword, apple_user_picture, apple_keyword, loginShell, description, shadowLastChange, shadowExpire, authAuthority, homeDrive, scriptPath, profilePath, smbHome, apple_preset_user_is_admin] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["apple-preset-user"],
    "&ldapDesc": "preset user" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_apple_preset_user /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
