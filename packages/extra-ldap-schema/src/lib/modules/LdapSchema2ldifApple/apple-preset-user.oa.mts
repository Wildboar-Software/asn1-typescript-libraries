/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
// export { id_oc_apple_preset_user } from "../LdapSchema2ldifApple/id-oc-apple-preset-user.va.mjs";


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
const apple_preset_user: OBJECT_CLASS = undefined;

/* eslint-enable */
