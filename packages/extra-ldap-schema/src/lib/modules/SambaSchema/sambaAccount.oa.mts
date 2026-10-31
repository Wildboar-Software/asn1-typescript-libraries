/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { id_samba_oc } from "../SambaSchema/id-samba-oc.va.mjs";


/**
 * @summary sambaAccount
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * sambaAccount OBJECT-CLASS ::= {
 *     SUBCLASS OF         { top }
 *     KIND                auxiliary
 *     MUST CONTAIN        { uid | rid }
 *     MAY CONTAIN         {
 *         commonName
 *         | lmPassword
 *         | ntPassword
 *         | pwdLastSet
 *         | logonTime
 *         | logoffTime
 *         | kickoffTime
 *         | pwdCanChange
 *         | pwdMustChange
 *         | acctFlags
 *         | displayName
 *         | smbHome
 *         | homeDrive
 *         | scriptPath
 *         | profilePath
 *         | description
 *         | userWorkstations
 *         | primaryGroupID
 *         | domain
 *     }
 *     LDAP-NAME           { "sambaAccount" }
 *     LDAP-DESC           "Samba Auxilary Account"
 *     ID                  { id-samba-oc 3 }
 * }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const sambaAccount: OBJECT_CLASS = undefined;

/* eslint-enable */
