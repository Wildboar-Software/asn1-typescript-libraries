/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { id_oc_passwordObject } from "../LdapCommon389/id-oc-passwordObject.va.mjs";


/**
 * @summary passwordObject
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * passwordObject OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MAY CONTAIN               { pwdpolicysubentry
 *                               | passwordExpirationTime
 *                               | passwordExpWarned
 *                               | passwordRetryCount
 *                               | retryCountResetTime
 *                               | accountUnlockTime
 *                               | passwordHistory
 *                               | passwordAllowChangeTime
 *                               | passwordGraceUserTime
 *                               | pwdReset
 *                               | pwdTPRReset
 *                               | pwdTPRUseCount
 *                               | pwdTPRValidFrom
 *                               | pwdTPRExpireAt }
 *   LDAP-NAME                 {"passwordObject"}
 *   LDAP-DESC                 "Netscape defined password policy objectclass"
 *   ID                        id-oc-passwordObject }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const passwordObject: OBJECT_CLASS = undefined;

/* eslint-enable */
