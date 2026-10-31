/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { id_oc_apple_user } from "../LdapSchema2ldifApple/id-oc-apple-user.va.mjs";


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
const apple_user: OBJECT_CLASS = undefined;

/* eslint-enable */
