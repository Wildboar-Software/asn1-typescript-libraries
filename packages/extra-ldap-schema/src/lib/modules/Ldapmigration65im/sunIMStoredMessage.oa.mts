/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { id_oc_sunIMStoredMessage } from "../Ldapmigration65im/id-oc-sunIMStoredMessage.va.mjs";


/**
 * @summary sunIMStoredMessage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * sunIMStoredMessage OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { sunIMMessageID
 *                               | sunIMMessageContent }
 *   LDAP-NAME                 {"sunIMStoredMessage"}
 *   LDAP-DESC                 "Stored Message Object"
 *   ID                        id-oc-sunIMStoredMessage }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const sunIMStoredMessage: OBJECT_CLASS = undefined;

/* eslint-enable */
