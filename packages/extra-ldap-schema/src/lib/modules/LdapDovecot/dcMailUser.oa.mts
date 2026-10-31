/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { dcMailMessageStore } from "../LdapDovecot/dcMailMessageStore.oa.mjs";
// export { id_oc_dcMailUser } from "../LdapDovecot/id-oc-dcMailUser.va.mjs";


/**
 * @summary dcMailUser
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dcMailUser OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { dcMailMessageStore }
 *   LDAP-NAME                 {"dcMailUser"}
 *   LDAP-DESC                 "Dovecot-LDAP User"
 *   ID                        id-oc-dcMailUser }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const dcMailUser: OBJECT_CLASS = undefined;

/* eslint-enable */
