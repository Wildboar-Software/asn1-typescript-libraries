/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { inetMailUser } from "../Ldapmigration56imsSchema/inetMailUser.oa.mjs";
// export { soniaMailDelegatedAddress } from "../Ldapmigration97sonia/soniaMailDelegatedAddress.oa.mjs";
// export { id_oc_soniaMailAccount } from "../Ldapmigration97sonia/id-oc-soniaMailAccount.va.mjs";


/**
 * @summary soniaMailAccount
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * soniaMailAccount OBJECT-CLASS ::= {
 *   SUBCLASS OF               { inetMailUser }
 *   MUST CONTAIN              { uid
 *                               | mail }
 *   MAY CONTAIN               { soniaMailDelegatedAddress }
 *   LDAP-NAME                 {"soniaMailAccount"}
 *   ID                        id-oc-soniaMailAccount }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const soniaMailAccount: OBJECT_CLASS = undefined;

/* eslint-enable */
