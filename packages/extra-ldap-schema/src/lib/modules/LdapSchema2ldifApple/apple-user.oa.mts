/* eslint-disable */
import { userCertificate } from "../AuthenticationFramework/userCertificate.oa.mjs";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_apple_user } from "../LdapSchema2ldifApple/id-oc-apple-user.va.mjs";
import { acctFlags } from "../SambaSchema/acctFlags.oa.mjs";
import { homeDrive } from "../SambaSchema/homeDrive.oa.mjs";
import { kickoffTime } from "../SambaSchema/kickoffTime.oa.mjs";
import { logoffTime } from "../SambaSchema/logoffTime.oa.mjs";
import { logonTime } from "../SambaSchema/logonTime.oa.mjs";
import { primaryGroupID } from "../SambaSchema/primaryGroupID.oa.mjs";
import { profilePath } from "../SambaSchema/profilePath.oa.mjs";
import { pwdLastSet } from "../SambaSchema/pwdLastSet.oa.mjs";
import { rid } from "../SambaSchema/rid.oa.mjs";
import { scriptPath } from "../SambaSchema/scriptPath.oa.mjs";
import { smbHome } from "../SambaSchema/smbHome.oa.mjs";
import { userWorkstations } from "../SambaSchema/userWorkstations.oa.mjs";
import { sambaPrimaryGroupSID } from "../SambaV3Schema/sambaPrimaryGroupSID.oa.mjs";
import { sambaSID } from "../SambaV3Schema/sambaSID.oa.mjs";
import { apple_generateduid } from "./apple-generateduid.oa.mjs";
import { apple_imhandle } from "./apple-imhandle.oa.mjs";
import { apple_keyword } from "./apple-keyword.oa.mjs";
import { apple_mcxflags } from "./apple-mcxflags.oa.mjs";
import { apple_mcxsettings } from "./apple-mcxsettings.oa.mjs";
import { apple_user_adminlimits } from "./apple-user-adminlimits.oa.mjs";
import { apple_user_authenticationhint } from "./apple-user-authenticationhint.oa.mjs";
import { apple_user_class } from "./apple-user-class.oa.mjs";
import { apple_user_homequota } from "./apple-user-homequota.oa.mjs";
import { apple_user_homesoftquota } from "./apple-user-homesoftquota.oa.mjs";
import { apple_user_homeurl } from "./apple-user-homeurl.oa.mjs";
import { apple_user_mailattribute } from "./apple-user-mailattribute.oa.mjs";
import { apple_user_passwordpolicy } from "./apple-user-passwordpolicy.oa.mjs";
import { apple_user_picture } from "./apple-user-picture.oa.mjs";
import { apple_user_printattribute } from "./apple-user-printattribute.oa.mjs";
import { apple_webloguri } from "./apple-webloguri.oa.mjs";
import { authAuthority } from "./authAuthority.oa.mjs";

/**
 * @summary apple_user
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * apple-user OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { apple-user-homeurl
 *                               | apple-user-class
 *                               | apple-user-homequota
 *                               | apple-user-mailattribute
 *                               | apple-user-printattribute
 *                               | apple-mcxflags
 *                               | apple-mcxsettings
 *                               | apple-user-adminlimits
 *                               | apple-user-picture
 *                               | apple-user-authenticationhint
 *                               | apple-user-homesoftquota
 *                               | apple-user-passwordpolicy
 *                               | apple-keyword
 *                               | apple-generateduid
 *                               | apple-imhandle
 *                               | apple-webloguri
 *                               | authAuthority
 *                               | acctFlags
 *                               | pwdLastSet
 *                               | logonTime
 *                               | logoffTime
 *                               | kickoffTime
 *                               | homeDrive
 *                               | scriptPath
 *                               | profilePath
 *                               | userWorkstations
 *                               | smbHome
 *                               | rid
 *                               | primaryGroupID
 *                               | sambaSID
 *                               | sambaPrimaryGroupSID
 *                               | userCertificate }
 *   LDAP-NAME                 {"apple-user"}
 *   LDAP-DESC                 "apple user account"
 *   ID                        id-oc-apple-user }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const apple_user: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [apple_user_homeurl, apple_user_class, apple_user_homequota, apple_user_mailattribute, apple_user_printattribute, apple_mcxflags, apple_mcxsettings, apple_user_adminlimits, apple_user_picture, apple_user_authenticationhint, apple_user_homesoftquota, apple_user_passwordpolicy, apple_keyword, apple_generateduid, apple_imhandle, apple_webloguri, authAuthority, acctFlags, pwdLastSet, logonTime, logoffTime, kickoffTime, homeDrive, scriptPath, profilePath, userWorkstations, smbHome, rid, primaryGroupID, sambaSID, sambaPrimaryGroupSID, userCertificate] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["apple-user"],
    "&ldapDesc": "apple user account" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_apple_user /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
