/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { id_nis_oc } from "../NIS/id-nis-oc.va.mjs";


/**
 * @summary posixAccount
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * posixAccount OBJECT-CLASS ::= {
 *     SUBCLASS OF     {top}
 *     KIND            auxiliary
 *     MUST CONTAIN    {
 *         commonName
 *         | uid
 *         | uidNumber
 *         | gidNumber
 *         | homeDirectory
 *     }
 *     MAY CONTAIN        {
 *         userPassword
 *         | loginShell
 *         | gecos
 *         | description
 *     }
 *     LDAP-NAME        {"posixAccount"}
 *     LDAP-DESC        "Abstraction of an account with POSIX attributes"
 *     ID                { id-nis-oc 0 }
 * }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const posixAccount: OBJECT_CLASS = undefined;

/* eslint-enable */
